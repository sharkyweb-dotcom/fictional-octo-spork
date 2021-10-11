//location.replace('./unfinished.html')
Object.values(document.getElementsByClassName('road')).forEach((road)=>{
    colorize(road.id,'transparent')
})
let porti;
//ports = ['sheep2for1', 'ore2for1', 'lumber2for1', 'brick2for1', 'lumber2for1', 'brick2for1', 'any3for1', 'wheat2for1', 'any3for1']
// Enter fair map lists here
/*const mapOne=['brick','sheep','lumber','brick','ore','lumber','brick','brick','sheep','brick','brick','brick','brick','brick','brick','brick','brick','brick','brick'];
const mapTwo=["brick", "desert", "lumber", "wheat", "lumber", "sheep", "ore", "lumber", "ore", "ore", "brick", "wheat", "brick", "wheat", "wheat", "sheep"];
const mapThree=['ore'];
const mapFour=['lumber'];
const mapFive=['wheat'];
const mapSix=['desert'];
let selectedMap;
function randMap() {
    const random=Math.floor(Math.random()*6)
    switch (random) {
        case 0:
            selectedMap=mapOne;
            break;
        case 1:
            selectedMap=mapTwo;
            break;
        case 2:
            selectedMap=mapThree;
            break;
        case 3:
            selectedMap=mapFour;
            break;
        case 4:
            selectedMap=mapFive;
            break;
        case 5:
            selectedMap=mapSix;
            break;
    }
}*/

// Add Settlement Class (ASL-American Sign Language)
let settlementIncrement=1;
Object.values(document.getElementsByClassName('settleHex')).forEach(settleHex=>{
    settleHex.classList.add('settleHex'+settlementIncrement)
    settlementIncrement++;
})
// Add Road Id (ARI)
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
//Finished Road ID
let incre=1;
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

for (let k=1;k<28;k++) {
    new SettlementFunction(selectBottomTileNumber,findBottomIntersections(),functionNumber)
    functionNumber++;
}

function actuallySettle(num,col) {
    functionArray[num-1].useSettleFunction(col)
}

// Interpret Map that's Selected, not being Lackadaisical (IMS Loan)
let first=true;
let colorObj={
    red:[0,2],
    blue:[0,2],
    orange:[0,2],
    white:[0,2]
}
function log(mes) {
    console.log(mes)
}
let probIndex=0;
let houseIndex=0;
let roadIndex=0;
let portIndex=0;
function addImg(map) {
    let indexOfMap=0;
    map=tiles;
    // And Desert-Add Propability Tile (ADAPT)
    if (!first) {
        let circle=document.createElement('div');
        Object.values(document.getElementsByClassName('desert')).forEach(desertHex=>desertHex.appendChild(circle))
    }
    // Add Resource Types (ART)
    Object.values(document.querySelectorAll('.imgBoard .hex-row .hex')).forEach(tile=>{
        tile.setAttribute("class", map[indexOfMap]);
        // Remove Desert Propability Circle
        if (map[indexOfMap]==='desert') {
            tile.removeChild(tile.firstChild)
        }
        indexOfMap++;
    })
    // Propability Circle (PC-Personal Computer)
    Object.values(document.getElementsByClassName('propacircle')).forEach(cop/*Circle Of Probability*/=>{
        cop.innerHTML=probs[probIndex]
        probIndex++;
    })
    // Ports
    porti=0;
        Object.values(document.getElementsByClassName('port')).forEach(()=>{
            if (ports[portIndex]!=='any3for1') {
            img(ports[portIndex].split('2')[0])
            } else {
                img('question')
            }
            log(portIndex)
            log(ports[portIndex])
            portIndex++;
            porti++;
        })
    
    //Delete, Intelligently, but not Austerely,Previous Exultant Roads and Settlements (DIAPERS)
    if (!first) {
        Object.values(document.getElementsByClassName('road')).forEach((road)=>{
            colorize(road.id,'transparent')
        })
        Object.values(document.getElementsByClassName('settlement')).forEach(house=>house.remove())
    }
    // Houses Or Settlements, Sacrosanct (HOSS)
    Object.entries(colorObj).forEach(pair=>{
        while (pair[1][0]!==pair[1][1]) {
            actuallySettle(houses[houseIndex],pair[0])
            pair[1][0]++;
            houseIndex++;
        }
    })
    colorObj={
        red:[0,2],
        blue:[0,2],
        orange:[0,2],
        white:[0,2]
    }
    //Roads Of Actual Daring (ROAD)
    Object.entries(colorObj).forEach(pair=>{
        while (pair[1][0]!==pair[1][1]) {
            colorize(roads[roadIndex],pair[0])
            pair[1][0]++;
            roadIndex++;
        }
    })
    colorObj={
        red:[0,2],
        blue:[0,2],
        orange:[0,2],
        white:[0,2]
    }
    probIndex=0;
    houseIndex=0;
    roadIndex=0;
    portIndex=0;
    first=false;
}
let page='fair';

function c(v,i) {
    let element=Object.values(document.getElementsByClassName('port'))[i]
    element.id=`port${v}`
}
function img(val) {
    // ports
    let element=Object.values(document.getElementsByClassName('image'))[porti]
        element.src=`../images/${val}.jpg`;
        element.className=val+' image';
        Object.values(document.getElementsByClassName('label'))[porti].innerHTML='2 : 1'
        element.style.border='none'
        if (val==='question') {
            element.src=`../images/${val}.png`;
            Object.values(document.getElementsByClassName('label'))[porti].innerHTML='3 : 1'
            Object.values(document.getElementsByClassName('label'))[porti].style.color='purple'
            element.style.border='3px solid black'
        } else if (val==='wheat') {;
            Object.values(document.getElementsByClassName('label'))[porti].style.color='black'
        } else {
            Object.values(document.getElementsByClassName('label'))[porti].style.color='lightgreen'
        }
}
let cNum=0;
let cArr=[6,1,1,5,2,5,3,4,3]
cArr.forEach((cVal)=>{
    c(cVal,cNum)
    cNum++;
})