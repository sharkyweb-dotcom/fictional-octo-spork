library(tidyverse) 
library(readxl)

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
  'brick2for1',
  'ore2for1',
  'wheat2for1',
  'sheep2for1',
  'lumber2for1',
  rep('any3for1',4)
)

generate_board <- function() {
  tiles <- tibble(tiles = sample(x = available_tiles, replace = F, size = 19))
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
  
  # roads <- 
  
  return(list(
    "tiles" = tiles, 
    "probs" = probs, 
    "houses" = houses, 
    # roads = roads, 
    "ports" = ports
  ))
}

# for roads 
# take int_road_helper
# subset down to where people's houses are 
# create a similiar dataset for where people's roads are
# for each of the 8 intersections, take nonnull entries in the row of int_road_helper
# select one, store it, move on 

board1 <- generate_board()

line1 <- str_c("let tiles = [", str_flatten(deframe(board1$tiles), collapse = ", "), "]")
line2 <- str_c("let probs = [", str_flatten(deframe(board1$probs), collapse = ", "), "]")
line3 <- str_c("let houses = [", str_flatten(deframe(board1$houses), collapse = ", "), "]")
line4 <- str_c("let ports = [", str_flatten(deframe(board1$ports), collapse = ", "), "]")


tibble_to_js <- function(which_to_write) {
  str_c("let ", which_to_write, " = [", str_flatten(deframe(board1[[which_to_write]]), collapse = ", "), "]")
}


gen_JS <- function() {
  tmp <- c()
  for(i in c('tiles', 'probs', 'houses', 'ports')) {
    # print(tibble_to_js(i))
    tmp <- append(tmp, tibble_to_js(i))
  }
  return(tmp)
}

res <- gen_JS() 

# TODO add quotes around 'brick', 'wheat', etc 
setwd("~/projects/catan")
file.create("fictional-octo-spork/output.js")
fileConn <- file("fictional-octo-spork/output.js")
cat(res, file = fileConn, sep = "\n")
close(fileConn)