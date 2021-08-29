library(tidyverse) 
library(readxl)


setwd("~/projects/catan/fictional-octo-spork/z_richards_code")

distance_matrix <- read_excel("helper_matrices/distance_matrix.xlsx")
int_road <- read_excel("helper_matrices/int_road.xlsx")
tile_int <- read_excel("helper_matrices/tile_adj_int.xlsx")

available_tiles <- c(
  rep('brick',3),
  rep('ore',3),
  rep('wheat',4),
  rep('sheep',4),
  rep('lumber',4),
  rep('desert',1)
)

available_probabilities <- c(
  2, 
  3, 3, 
  4, 4, 
  5, 5, 
  6, 6, 
  8, 8, 
  9, 9, 
  10, 10, 
  11, 11, 
  12
)

available_ports <- c(
  'brick',
  'ore',
  'wheat',
  'sheep',
  'lumber',
  rep('question',4)
)

generate_board <- function() {
  tiles <- tibble(tiles = sample(x = available_tiles, replace = F, size = 19))
  tiles <- tiles %>%
    mutate(tiles = str_c("'", tiles, "'"))
  probs <- tibble(probs = sample(x = available_probabilities, replace = F, size = 18))
  
  # this worked well for having 3 columns, player (1,2,3,4), house1, and house2 
  # to print to JS converting to single array with understanding it means P1, P1, P2, P2, P3, P3, P4, P4
  # where_houses <- sample(x = 1:54, size = 8, replace = F)
  # houses <- tibble(
  #   player = c("P1", "P2", "P3", "P4"), 
  #   house1 = where_houses[1:4],
  #   house2 = where_houses[5:8]
  # )
  houses <- tibble(houses = sample(x = 1:54, size = 8, replace = F))
  
  ports <- tibble(ports = sample(x = available_ports, size = 9, replace = F))
  ports <- ports %>%
    mutate(ports = str_c("'", ports, "'"))

  # horribly unoptimized but functional -------------------------------------

  roads_vec <- c()
  
  tmp <- int_road %>% filter(intersection %in% board1$houses$houses)
  
  for(i in houses$houses) {
    tmp <- filter(int_road, intersection == i)
    if(is.na(tmp$adj_road_3)) {
      j <- sample(x = c(1,2), size = 1)      
    } else {
      j <- sample(x = c(1,3), size = 1)      
    }
    roads_vec <- append(roads_vec, as.numeric(tmp[1,j]))
  }
  roads <- tibble(roads = roads_vec)
  
  return(list(
    "tiles" = tiles, 
    "probs" = probs, 
    "houses" = houses, 
    "roads" = roads,
    "ports" = ports
  ))
}

# for roads 
# take int_road
# subset down to where people's houses are 
# create a similar dataset for where people's roads are
# for each of the 8 intersections, take nonnull entries in the row of int_road_helper
# select one, store it, move on 

board1 <- generate_board()




tibble_to_js <- function(which_to_write, board) {
  # , add_quotes = F
  # if(add_quotes) {
  #   x <- str_c("let ", which_to_write, " = [", str_flatten(deframe(board[[which_to_write]]), collapse = ", "), "]")
  # } else {
  #   x <- str_c("let ", which_to_write, " = [", str_flatten(deframe(board[[which_to_write]]), collapse = ", "), "]")
  # }
  # return(x)
  str_c("let ", which_to_write, " = [", str_flatten(deframe(board[[which_to_write]]), collapse = ", "), "]")
}


gen_JS <- function() {
  tmp <- c()
  for(i in c('tiles', 'probs', 'houses', 'ports', 'roads')) {
    # print(tibble_to_js(i))
    tmp <- append(tmp, tibble_to_js(i, board = board1))
  }
  return(tmp)
}

res <- gen_JS() 

# TODO add quotes around 'brick', 'wheat', etc 
# setwd("~/projects/catan")
# file_name <- "js_generated_by_r/board1.js"
file_name <- "js_generated_by_r/board1.js"
file.create(file_name)
fileConn <- file(file_name)
cat(res, file = fileConn, sep = "\n")
close(fileConn)

# file.create("fictional-octo-spork/output.js")
# fileConn <- file("fictional-octo-spork/output.js")
# cat(res, file = fileConn, sep = "\n")
# close(fileConn)

# tmp <- board1[["tiles"]]


