let settlementIncrement=1;
Object.values(document.getElementsByClassName('settleHex')).forEach(settleHex=>{
    settleHex.classList.add('settleHex'+settlementIncrement)
    settlementIncrement++;
})
const roadIdArray=[
    //Row 1
    [1, 2, 7, 8,12,13], 
    [3, 4, 8, 9, 14, 15], 
    [5,6,9,10,16,17],
    //Row 2
    [11, 12, 19, 20, 25, 26], 
    [13, 14, 20, 21, 27, 28],
    [15,16,21,22,29,30],
    [17,18,22,23,31,32],
    //Row 3
    [24,25,34,35,40,41],
    [26,27,35,36,42,43],
    [28,29,36,37,44,45],
    [30,31,37,38,46,47],
    [32,33,38,39,48,49],
    //Row 4
    [41,42,50,51,55,56],
    [43,44,51,52,57,58],
    [45,46,52,53,59,60],
    [47,48,53,54,61,62],
    //Row 5
    [56,57,63,64,67,68],
    [58,59,64,65,69,70],
    [60,61,65,66,71,72]
]
let index=0;
let index2=0;
function changeIndex() {
    if (index2===5) {
        index2=0;
        index++;
    } else {
        index2++;
    }
}
roadIdArray.forEach((idArray)=>{
    idArray.forEach((roadId)=>{
        roadId=`road${roadId.toString()}`
    })
})
Object.values(document.getElementsByClassName('road')).forEach((road)=>{
    road.classList.add(`road${roadIdArray[index][index2]}`)
    changeIndex()
    //colorize(road.id,'blue')
})
let incre=1;
Object.values(document.querySelectorAll('#roadBoard .hex-row .hex')).forEach(thingy=>{
    thingy.classList.add(`tile${incre}`)
    incre++;
})

function colorize(road,color) {
    Object.values(document.getElementsByClassName(`road${road}`)).forEach(existingRoad=>{
        roadElem=existingRoad;
        let roadType=Object.values(roadElem.classList)[1]
        switch (roadType) {
            case 'top':
                roadElem.style.borderBottomColor=color;
                break;
            case 'middle':
                roadElem.style.backgroundColor=color;
                break;
            case 'bottom':
                roadElem.style.borderTopColor=color;
                break;
        }
    })
}

let index3=0;
function directPosition(whichStyle,top,left) {
    whichStyle.top=top;
    whichStyle.left=left;
}
function position(elem,place) {
    let dirPos=directPosition
    let styling=elem.style;
    switch (place){
        case 1:
            dirPos(styling,'-15%', '30%');
            break;
        case 2:
            dirPos(styling,'5%', '75%');
            break;
        case 3:
            dirPos(styling,'40%','75%');
            break;
        case 4:
            dirPos(styling,'60%','30%');
            break;
        case 5:
            dirPos(styling,'40%','-5%');
            break;
        case 6:
            dirPos(styling,'5%','-5%');
            break;
    }
}


function settle(tile,intersection,color) {
    let house=document.createElement('div');
    house.className='settlement';
    house.style.backgroundColor=color;
    position(house,intersection)
    document.querySelector(`.${tile}`).appendChild(house)
}

const functionArray=[]
class SettlementFunction {
    constructor(functionTile,functionIntersection,number) {
        functionArray.push(this)
        this.functionTile=functionTile,
        this.functionIntersection=functionIntersection,
        this.number=number
    }
    useSettleFunction(col) {
        settle(`settleHex${this.functionTile}`,this.functionIntersection,col)
    } 
}
let firstTile=true;
let one=true;
let tilesInRow=3;
let selectTile=1;
let selectTileNumber=1;

function whereIs(num) {
    switch(num) {
        case 1:
            return 'top-left'
        case 2:
            return 'middle-right'
        case 3:
            return 'middle-right'
        case 4:
            return 'bottom-left'
        case 5:
            return 'middle-left'
        case 6:
             return 'middle-left'
    }
}
function findTopIntersections() {
    if (firstTile) {
        firstTile=false;
        return 6;
    } else if (one) {
        one=false;
        return 1;
    } else {
        one=true;
        if (selectTile===tilesInRow) {
            tilesInRow++;
            selectTile=0;
            firstTile=true;
        }
        selectTile++;
        selectTileNumber++
        return 2;
    }
} 
let firstTileBottom=true;
let four=true;
let tilesInBottomRow=5;
let selectBottomTile=1;
let selectBottomTileNumber=8;
function findBottomIntersections() {
    if (firstTileBottom) {
        firstTileBottom=false;
        return 5;
    } else if (four) {
        four=false;
        return 4;
    } else {
        four=true;
        if (selectBottomTile===tilesInBottomRow) {
            tilesInBottomRow--;
            selectBottomTile=0;
            firstTileBottom=true;
        }
        selectBottomTile++;
        selectBottomTileNumber++
        return 3;
    }
}
let functionNumber=1;
for (let k=1;k<28;k++) {
    new SettlementFunction(selectTileNumber,findTopIntersections(),functionNumber)
    functionNumber++;
}
let permaSett=(numberSett,settCol)=>{
    functionArray[numberSett].useSettleFunction(settCol)
}

for (let k=1;k<28;k++) {
    new SettlementFunction(selectBottomTileNumber,findBottomIntersections(),functionNumber)
    functionNumber++;
}
let settleArr=[3];
let checked;
let tempFuncArr=functionArray;
let numArr=[];
function refill() {
    for (let i=0;i<54;i++) {
        numArr.push(i+1);
    }
}
refill()
console.log(numArr)
function setSubtract(colorSett) {
    let chosenIndex=Math.floor(Math.random()*numArr.length);
    let chosenNum=numArr[chosenIndex];
    console.log(chosenNum)
    permaSett(chosenNum-1,colorSett);
    numArr.splice(chosenIndex,1)
    distanceDict[chosenNum].forEach((ineligible)=>{
        console.log(ineligible)
        numArr.splice(numArr.indexOf(ineligible),1)
    })
    console.log(numArr)
    let roadArray=settleRoadDict[chosenNum]
    let randomIndex=Math.floor(Math.random()*roadArray.length)
    let randomRoad=roadArray[randomIndex]
    colorize(`${randomRoad}`,colorSett)
}
/*function subSett(colorSett) {
    let indexSett=Math.floor(Math.random()*tempFuncArr.length)
    permaSett(indexSett,colorSett)
    tempFuncArr[indexSett].useSettleFunction=(indexSett)=>{
        tempFuncArr[indexSett+1].useSettleFunction()
    }

    distanceDict[indexSett+1].forEach((spot)=>{
        spot--;
        console.log(spot)
        if (spot!==53) {
            tempFuncArr[spot].useSettleFunction=(color)=>{
                tempFuncArr[spot+1].useSettleFunction(color)
            }
        } else {
            tempFuncArr[spot].useSettleFunction=(color)=>{
                tempFuncArr[0].useSettleFunction(color)
            }
        }
    })
    let roadArray=settleRoadDict[indexSett]
    let randomIndex=Math.floor(Math.random()*roadArray.length)
    let randomRoad=roadArray[randomIndex]
    colorize(`${randomRoad}`,colorSett)
}*/


function where(colorForSett) {
    randomSpot=Math.floor(Math.random()*53+1)
    console.log('supp'+randomSpot)
    settleArr.every(location=>{
        console.log('loc: '+location)
        if (location===randomSpot) {
            where()
            return true;
        } else {
            settleArr.push(randomSpot-1)
            distanceDict[randomSpot].forEach((spot)=>{
                settleArr.push(spot-1)
            })
            functionArray[randomSpot-1].useSettleFunction(colorForSett)
            let roadArray=settleRoadDict[randomSpot]
            let randomIndex=Math.floor(Math.random()*roadArray.length)
            let randomRoad=roadArray[randomIndex]
            colorize(`${randomRoad}`,colorForSett)
            return false;
        }
    })
}
/*function makeSpot() {
    randomSpot=Math.floor(Math.random()*53+1)
    console.log('Selected spot:'+randomSpot)
    settleArr.forEach((loc)=>{
        console.log(loc+':'+randomSpot)
        if (loc===randomSpot) {checked=false;/*console.log(randomSpot,false)}
        console.log('loop3')
    })
}*/
function randomSettlement(col) {
    /*checked=true;
    do {
        makeSpot()
        console.log('loop2')
    } while (checked===false)
    settleArr.push(randomSpot)
    distanceDict[randomSpot].forEach((spot)=>{
        settleArr.push(spot)
    })
    console.log('Settlement Array: '+settleArr)
    functionArray[randomSpot-1].useSettleFunction(col)*/
    let roadArray=settleRoadDict[randomSpot]
    let randomIndex=Math.floor(Math.random()*roadArray.length)
    let randomRoad=roadArray[randomIndex]
    colorize(`${randomRoad}`,col)
}


/*function settlePlace(road,color) {
    let house=document.createElement('div');
    house.className='settlement';
    house.style.backgroundColor=color;
    //position2(road,house)
    let roadElem=document.querySelector(`#${road}`)
    let roadElemType=roadElem.classList[0];
    switch (roadElemType) {
        case 'middle-left':
            break;
        case 'middle-right':
            break;
    }
    roadElem.appendChild(house)
}

function locationFind() {
    let randRoadNum=Math.floor(Math.random()*72+1)
    let randRoad=`road${randRoadNum}`
    return randRoad;
}
let lf=locationFind;

function addPerson(playerColor) {
    let place=lf();
    colorize(place,playerColor)
}

addPerson('red')
*/

//50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%
Object.values(document.getElementsByClassName('road')).forEach((road)=>{
    //colorize(road.id,'blue')
})