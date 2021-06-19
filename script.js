// Done
function lightMode() {
    document.getElementById("main").setAttribute("class", 'light-main')
    lightList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'];
    lightList.forEach(lightItem=> {
        itemOfLight=document.getElementById(lightItem);
        itemOfLight.classList.add('light-text');
        itemOfLight.classList.remove('neon-text');
        itemOfLight.classList.remove('night-text');
        itemOfLight.style.textShadow=('none');
    })
}
// Done
function neonMode() {
    document.getElementById("main").setAttribute("class", 'neon-main');
    neonList=['nav1','nav2','nav3','nav4',"head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'];
    neonList.forEach(neonItem=> {
        document.getElementById(neonItem).classList.add('neon-text');
        document.getElementById(neonItem).classList.remove('light-text');
        document.getElementById(neonItem).classList.remove('night-text');
        itemColor=document.getElementById(neonItem).style.color;
        document.getElementById(neonItem).style.textShadow=`0 0 17px ${itemColor}`;
    })
}
// Done
function nightMode() {
    document.getElementById("main").setAttribute("class", 'night-main');
    nightList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'];
    nightList.forEach(nightItem=>{
        itemOfNight=document.getElementById(nightItem);
        itemOfNight.classList.add('night-text');
        itemOfNight.classList.remove('light-text');
        itemOfNight.classList.remove('neon-text');
    })
}
// Incomplete
function colorMode() {
    document.getElementById("main").setAttribute("class", 'color-main');
    colorItemList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'];
    colorList=['red','orange','yellow','green','blue','indigo','indigo','indigo','indigo','indigo','violet','darkpink'];
    for (let i=0; i<colorList.length; i++) {
        if (i===2) {
            document.getElementById(colorItemList[i]).style.color=colorList[i];
            document.getElementById(colorItemList[i]).style.textShadow='0 0 4px blue';
        } else {
            document.getElementById(colorItemList[i]).style.color=colorList[i];
        }
        document.getElementById(colorItemList[i]).classList.remove('neon-text');
        document.getElementById(colorItemList[i]).classList.remove('light-text');
        document.getElementById(colorItemList[i]).classList.remove('night-text');
    }
}
// Done
function defaultMode() {
    document.getElementById("main").setAttribute("class", "before");
    colorItemList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'];
    document.getElementById(colorItemList[i]).classList.remove('neon-text');
    document.getElementById(colorItemList[i]).classList.remove('light-text');
    document.getElementById(colorItemList[i]).classList.remove('night-text');
}