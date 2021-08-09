library(tidyverse)
library(readxl)
df <- read_excel("helper_matrices/for_finn_1.xlsx")

file.create("fictional-octo-spork/int_to_adj_road_map.js")
fileConn <- file("fictional-octo-spork/int_to_adj_road_map.js")
cat(df$out, file = fileConn, sep = "\n")
close(fileConn)