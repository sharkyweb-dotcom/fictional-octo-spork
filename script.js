console.log(document.getElementById('logo'))
// Light
function lightMode() {
    document.getElementById("main").setAttribute("class", 'light-main')
    lightList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'/*,'login'*/];
    lightList.forEach(lightItem=> {
        itemOfLight=document.getElementById(lightItem);
        itemOfLight.classList.add('light-text');
        itemOfLight.classList.remove('neon-text');
        itemOfLight.classList.remove('night-text');
        itemOfLight.style.textShadow=('none');
    })
    document.getElementById('logo').setAttribute('class','lightLogo')
}
// Neon
function neonMode() {
    document.getElementById("main").setAttribute("class", 'neon-main');
    neonList=['nav1','nav2','nav3','nav4',"head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'/*,'login'*/];
    neonList.forEach(neonItem=> {
        document.getElementById(neonItem).classList.add('neon-text');
        document.getElementById(neonItem).classList.remove('light-text');
        document.getElementById(neonItem).classList.remove('night-text');
        itemColor=document.getElementById(neonItem).style.color;
        document.getElementById(neonItem).style.textShadow=`0 0 17px ${itemColor}`;
    })
    document.getElementById('logo').setAttribute('class','neonLogo');
}
// Night
function nightMode() {
    document.getElementById("main").setAttribute("class", 'night-main');
    nightList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'/*,'login'*/];
    nightList.forEach(nightItem=>{
        itemOfNight=document.getElementById(nightItem);
        itemOfNight.classList.add('night-text');
        itemOfNight.classList.remove('light-text');
        itemOfNight.classList.remove('neon-text');
    })
    document.getElementById('logo').setAttribute('class','nightLogo')
}
// Color
function colorMode() {
    document.getElementById("main").setAttribute("class", 'color-main');
    colorItemList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'/*,'login'*/];
    colorList=['red','orange','yellow','green','blue !important','indigo','indigo','indigo','indigo','indigo','violet','darkpink',/*'magenta'*/];
    for (let i=0; i<colorList.length; i++) {
        document.getElementById(colorItemList[i]).style.color=colorList[i];
        if (i===2) {
            document.getElementById(colorItemList[i]).style.textShadow='0 0 3px blue';
        } else if (i===0) {
            document.getElementById(colorItemList[i]).style.animationName='emphasize'
        } else {
            document.getElementById(colorItemList[i]).style.textShadow='none';
        }
        document.getElementById(colorItemList[i]).classList.remove('neon-text');
        document.getElementById(colorItemList[i]).classList.remove('light-text');
        document.getElementById(colorItemList[i]).classList.remove('night-text');
    }
    document.getElementById('logo').setAttribute('class','colorLogo')
}
// Default
function defaultMode() {
    document.getElementById("main").setAttribute("class", "before");
    defaultList=["head", "mainsub", "sub1", 'p1', 'sub2', 'p2', 'li1', 'li2', 'li3', 'ender', 'sub3', 'p3'/*,'login'*/];
    defaultList.forEach(item =>{
        document.getElementById(item).classList.remove('neon-text');
        document.getElementById(item).classList.remove('light-text');
        document.getElementById(item).classList.remove('night-text');
    })
    document.getElementById('logo').setAttribute('class','defaultLogo')
}
// Mouse Track
const logo=document.getElementById('logo')
document.onmousemove=(e)=>{
    let x=e.clientX;
    let y=e.clientY;
    logo.style.top=`${y-75}px`;
    logo.style.left=`${x-25}px`;
}