let first=true;
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
    first=false;
    console.log(propArray)
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
    let randomNumber=Math.floor(Math.random()*12)+1;
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