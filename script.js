function lightMode() {
    document.getElementById("main").setAttribute("class", 'light-main')
    lightList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'];
    lightList.forEach(lightItem=> {
        document.getElementById(lightItem).classList.add('light-text');
    })
    /*document.getElementById("head").setAttribute("class", "light-text");
    document.getElementById("mainsub").setAttribute("class", "light-text");
    document.getElementById("sub1").setAttribute("class", "light-text");*/
}
function nightMode() {
    document.getElementById("main").setAttribute("class", 'night-main');
}
function neonMode() {
    document.getElementById("main").setAttribute("class", 'neon-main');
}
function colorMode() {
    document.getElementById("main").setAttribute("class", 'color-main');
}