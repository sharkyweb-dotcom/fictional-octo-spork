//location.replace('./unfinished.html')
// Enter fair map lists here
const mapOne=['brick','sheep','lumber','brick','ore','lumber','brick','brick','sheep','brick','brick','brick','brick','brick','brick','brick','brick','brick','brick'];
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
}

function addImg(map) {
    randMap();
    map=mapTwo;
    map.forEach(tile=>{
        const hexagon=document.getElementById("imgHex");
        hexagon.setAttribute("class", tile);
        hexagon.setAttribute("id", 'used');
    })
}
let page='fair'
