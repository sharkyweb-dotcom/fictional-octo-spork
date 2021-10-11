let first=true;
let porti;
let portIndex=0;
let ports = ['sheep2for1', 'any3for1', 'ore2for1', 'any3for1', 'lumber2for1', 'brick2for1', 'any3for1', 'wheat2for1', 'any3for1']
let colorList=['red','blue','orange','white']
let colorObj={
    red:[0,2],
    blue:[0,2],
    orange:[0,2],
    white:[0,2]
}
//console.log(functionArray)
function addImg() {
    brickCount=[0,3];
    wheatCount=[0,4];
    oreCount=[0,3];
    sheepCount=[0,4];
    lumberCount=[0,4];
    desertCount=[0,1];
    if (first===false) {
        let circle=document.createElement('div');
        if (odd) {
            circle.id='propacircle';
        } else {
            circle.id='usedCirc';
        }
        Object.values(document.getElementsByClassName('desert')).forEach(desertHex=>desertHex.appendChild(circle))
    }
    shuffleArray(propArray)
    for (let i=0; i<19;i++) {
        randomTile();
    };
    for (i=0; i<18;i++) {
        propabilityFinder()
    };
    if (odd) {odd=false} else {odd=true}
    if (!first) {
        Object.values(document.getElementsByClassName('road')).forEach((road)=>{
            colorize(road.id,'transparent')
        })
        Object.values(document.getElementsByClassName('settlement')).forEach(house=>house.remove())
        tempFuncArr=functionArray;
    }
    numArr=[]
    refill()
    Object.entries(colorObj).forEach(pair=>{
        while (pair[1][0]!==pair[1][1]) {
            setSubtract(pair[0])
            pair[1][0]++;
        }
    })
    //console.log(functionArray)
    /*Object.entries(colorObj).forEach(pair=>{
        while (pair[1][0]!==pair[1][1]) {
            subSett(pair[0])
            pair[1][0]++;
        }
    })*/
    /*Object.entries(colorObj).forEach(pair=>{
        while (pair[1][0]!==pair[1][1]) {
            where(pair[0])
            pair[1][0]++;
        }
    })*/
    
    /*Object.entries(colorObj).forEach(pair=>{
        while (pair[1][0]!==pair[1][1]) {
            randomSettlement(pair[0])
            pair[1][0]++;
        }
    })*/
    /*for (let i=0;i<2;i++) {
        colorList.forEach((li)=>{
            randomSettlement(li)
            console.log('loop1')
        })
    }*/
    colorObj={
        red:[0,2],
        blue:[0,2],
        orange:[0,2],
        white:[0,2]
    }
    // Ports
    shuffleArray(ports)
    porti=0;
        Object.values(document.getElementsByClassName('port')).forEach(()=>{
            if (ports[portIndex]!=='any3for1') {
            img(ports[portIndex].split('2')[0])
            } else {
                img('question')
            }
            portIndex++;
            porti++;
        })
    first=false;
    portIndex=0;
}
resourceList=[];
let hexagon;
let odd=true;
let switchFunction=()=>{
    if (hexagon===document.getElementById("imgHex")) {
        hexagon.setAttribute("id", 'used');
    } else {  
        hexagon.setAttribute("id", 'imgHex');
    }
} 
function shuffleArray(array) {
    for (let k = array.length - 1; k > 0; k--) {
        let m = Math.floor(Math.random() * (k + 1));
        let temp = array[k];
        array[k] = array[m];
        array[m] = temp;
    }
}
let propArray=[]
for (let lm=2;lm<=12;lm++) {
    if (lm===2 || lm===12) {
        propArray.push(lm)
    } else if (lm===7) {

    } else {
        propArray.push(lm,lm)
    }
}
let selectCircle;
let propNum=0;
function propabilityFinder() {
    //let randomNumber=Math.floor(Math.random()*12)+1;
    if (odd) {selectCircle=document.getElementById("propacircle");} else {selectCircle=document.getElementById("usedCirc");}
    selectCircle.innerHTML=propArray[propNum]
    if (propNum===17) {
        propNum=0;
    } else {
        propNum++
    }
    if (selectCircle===document.getElementById("propacircle")) {
        selectCircle.setAttribute("id", 'usedCirc');
    } else {  
        selectCircle.setAttribute("id", 'propacircle');
    }
}
const randomTile=()=>{
        let randomNum=Math.floor(Math.random()*6);
        if (odd) {hexagon=document.getElementById("imgHex");} else {hexagon=document.getElementById("used");}
        switch (randomNum) {
            case 0: 
                if (brickCount[0]<brickCount[1]) {
                    resourceList.push('brick')
                    hexagon.setAttribute("class", 'brick');
                    switchFunction()
                    brickCount[0]++
                } else {
                    randomTile();
                }
                break;
            case 1: 
                if (lumberCount[0]<lumberCount[1]) {
                    resourceList.push('lumber')  
                    hexagon.setAttribute("class", 'lumber');
                    switchFunction()
                    lumberCount[0]++
                } else {
                    randomTile();
                }
                break;
            case 2: 
                if (wheatCount[0]<wheatCount[1]) {
                    resourceList.push('wheat')
                    hexagon.setAttribute("class", 'wheat');
                    switchFunction()
                    wheatCount[0]++
                } else {
                    randomTile();
                }
                break;
            case 3: 
            if (sheepCount[0]<sheepCount[1]) {
                resourceList.push('sheep')
                hexagon.setAttribute("class", 'sheep');
                switchFunction()
                sheepCount[0]++
            } else {
                randomTile();
            }
                break;
            case 4: 
            if (oreCount[0]<oreCount[1]) {
                resourceList.push('ore')
                hexagon.setAttribute("class", 'ore');
                switchFunction()
                oreCount[0]++
            } else {
                randomTile();
            }
                break;
            case 5:
                if (desertCount[0]<desertCount[1]) {
                    resourceList.push('desert')
                    hexagon.setAttribute("class", 'desert');
                    switchFunction()
                    hexagon.removeChild(hexagon.firstChild)
                    desertCount[0]++
                } else {
                    randomTile();
                }
                break;
    };
} 
let page='random'

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