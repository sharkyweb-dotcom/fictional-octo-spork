function addImg() {
    let randomNum=Math.floor(Math.random()*6);
    switch (randomNum) {
        case 0: 
            document.getElementById("test").setAttribute("class", 'brick');
            break;
        case 1: 
            document.getElementById("test").setAttribute("class", 'lumber');
            break;
        case 2: 
            document.getElementById("test").setAttribute("class", 'wheat');
            break;
        case 3: 
            document.getElementById("test").setAttribute("class", 'sheep');
            break;
        case 4: 
            document.getElementById("test").setAttribute("class", 'ore');
            break;
        case 5:
            document.getElementById("test").setAttribute("class", 'desert');
        default:
            document.getElementById("test").setAttribute("class", 'desert');
    }
}
