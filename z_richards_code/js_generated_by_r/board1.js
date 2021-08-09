/* 19 tiles - represent 1 through 19 on our map*/ 
let tiles = ['brick', 'sheep', 'ore', 'lumber', 'lumber', 'lumber', 'lumber', 'wheat', 'wheat', 'brick', 'desert', 'sheep', 'sheep', 'ore', 'ore', 'wheat', 'wheat', 'brick', 'sheep']
/* 18 tiles - you skip the desert one. let me know if you want me to put NA or 99 or something where the desert is */
let probs = [5, 8, 4, 11, 3, 2, 10, 5, 9, 6, 8, 9, 3, 6, 4, 10, 12, 11]
/* 8 houses: i'm doing convention of first two are player 1, next two are player 2, and so forth*/
/* but we can do however you want*/
let houses = [20, 23, 11, 33, 22, 19, 24, 41]
/* ports! I think this is rotating clockwise around starting from the top*/
let ports = ['sheep2for1', 'any3for1', 'ore2for1', 'any3for1', 'lumber2for1', 'brick2for1', 'any3for1', 'wheat2for1', 'any3for1']
/* 8 roads! I'm doing convention of first two are player 1, next two are player 2, and so forth*/
let roads = [20, 23, 13, 45, 28, 26, 30, 56]
