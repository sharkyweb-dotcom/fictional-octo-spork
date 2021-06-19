function addImg() {
    document.getElementById('refreshMessage').innerHTML='Refresh to get a new map'
    brickCount=[0,3];
    wheatCount=[0,4];
    oreCount=[0,3];
    sheepCount=[0,4];
    lumberCount=[0,4];
    desertCount=[0,1];
    for (let i=0; i<19;i++) {
        randomTile();
    }
}
const randomTile=()=>{
        let randomNum=Math.floor(Math.random()*6);
        const hexagon=document.getElementById("imgHex");
        switch (randomNum) {
            case 0: 
                if (brickCount[0]<brickCount[1]) {
                    hexagon.setAttribute("class", 'brick');
                    hexagon.setAttribute("id", 'used');
                    brickCount[0]++
                } else {
                    randomTile();
                }
                break;
            case 1: 
                if (lumberCount[0]<lumberCount[1]) {  
                    hexagon.setAttribute("class", 'lumber');
                    hexagon.setAttribute("id", 'used');
                    lumberCount[0]++
                } else {
                    randomTile();
                }
                break;
            case 2: 
                if (wheatCount[0]<wheatCount[1]) {
                    hexagon.setAttribute("class", 'wheat');
                    hexagon.setAttribute("id", 'used');
                    wheatCount[0]++
                } else {
                    randomTile();
                }
                break;
            case 3: 
            if (sheepCount[0]<sheepCount[1]) {
                hexagon.setAttribute("class", 'sheep');
                hexagon.setAttribute("id", 'used');
                sheepCount[0]++
            } else {
                randomTile();
            }
                break;
            case 4: 
            if (oreCount[0]<oreCount[1]) {
                hexagon.setAttribute("class", 'ore');
                hexagon.setAttribute("id", 'used');
                oreCount[0]++
            } else {
                randomTile();
            }
                break;
            case 5:
                console.log(5)
                if (desertCount[0]<desertCount[1]) {
                    hexagon.setAttribute("class", 'desert');
                    hexagon.setAttribute("id", 'used');
                    desertCount[0]++
                    console.log('imgadded')
                } else {
                    console.log('randomTile started')
                    randomTile();
                    console.log('randomTile started')
                }
            default:
                console.log(`Error:${randomNum}`);
    };
} 
