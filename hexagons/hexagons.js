// Enter fair map lists head
const mapOne=['brick','sheep','lumber','brick','ore','lumber','brick','brick','sheep','brick','brick','brick','brick','brick','brick','brick','brick','brick','brick'];
const mapTwo=['sheep'];
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
    map=selectedMap;
    map.forEach(tile=>{
        const hexagon=document.getElementById("imgHex");
        hexagon.setAttribute("class", tile);
        hexagon.setAttribute("id", 'used');
    })
}
