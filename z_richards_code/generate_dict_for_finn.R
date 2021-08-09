library(tidyverse)
library(readxl)

setwd("~/projects/catan/fictional-octo-spork/z_richards_code")

df <- read_excel("helper_matrices/for_finn_1.xlsx")

file_name <- "js_generated_by_r/intersection_adj_road.js"
file.create(file_name)
fileConn <- file(file_name)
cat(df$out, file = fileConn, sep = "\n")
close(fileConn)


# before having my own folder ---------------------------------------------

# file.create("fictional-octo-spork/int_to_adj_road_map.js")
# fileConn <- file("fictional-octo-spork/int_to_adj_road_map.js")
# cat(df$out, file = fileConn, sep = "\n")
# close(fileConn)

