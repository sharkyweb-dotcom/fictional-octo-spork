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
    road.id=`road${roadIdArray[index][index2]}`
    changeIndex()
    //colorize(road.id,'red')
})
let incre=0;
Object.values(document.getElementsByClassName('hex')).forEach(thingy=>{
    thingy.classList.add(`tile${incre-18}`)
    incre++;
})
function colorize(road,color) {
    for (let i=0;i<=1;i++) {
        if (document.getElementById(road) !== null) {
        roadElem=document.getElementById(road)
        roadElem.id='roadnull'
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
    }
    }
}

let index3=0;
function directPosition(whichStyle,top,left) {
    whichStyle.top=top;
    whichStyle.left=left;
    console.log(whichStyle+' '+whichStyle.top+' '+whichStyle.left)
}
function position(elem,place) {
    let dirPos=directPosition
    let styling=elem.style;
    switch (place){
        case 1:
            dirPos(styling,'-19px','-23px')
            console.log(1)
            break;
        case 2:
            dirPos(styling,'0%','100%')
            console.log(2)
            break;
        case 3:
            dirPos(styling,'100%','100%')
            break;
        case 4:
            break;
        case 5:
            dirPos(styling,'0%','0%')
            break;
        case 6:
            dirPos(styling,'100%','0%')
            break;
    }
}

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

function settle(tile,intersection,color) {
    let house=document.createElement('div');
    house.className='settlement';
    house.style.backgroundColor=color;
    position(house,intersection)
    let cornerPart=whereIs(intersection);
    document.querySelector(`.${tile} .${cornerPart}`).appendChild(house)
    console.log(document.querySelector(`.${tile} .${cornerPart}`))
    /*Object.values(document.getElementsByClassName(tile)).forEach(thingy2=>{
        Object.values(thingy2.children).forEach(thingy3=>{
            if (thingy3===document.querySelector(`${thingy2} ${cornerPart}`)){
                thingy3.appendChild(house)
            }
        })
    })*/
}
settle('tile2',1,'red')
//colorize('road37','red')
//50% 0%, 100% 30%, 100% 70%, 50% 100%, 0% 70%, 0% 30%