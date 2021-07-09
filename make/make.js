let selectedResource='brick';
const radioList=['brick','ore','lumber','wheat','sheep','desert'];
radioList.forEach(res=>{
    resource=document.getElementById(res);
    resource.addEventListener('click',function(){
        selectedResource=res;
    })
})

for (let i=0;i<19;i++) {
    console.log(i)
    const tile=document.getElementById("imgHex");
    tile.addEventListener('click',function(){
        tile.setAttribute('class',`hex ${selectedResource}`);
        console.log(`${selectedResource}Count`[0]);
    });
    tile.setAttribute('id','added')
}

function drag(elem) {
    elem.onmousedown=(e)=>{
        console.log('mousedown')
        elem.onmousemove=e=>{
            console.log('mousemove')
            let x=e.clientX;
            let y=e.clientY;
            console.log(y)
            elem.style.top=`${y-25}px`;
            elem.style.left=`${x-25}px`;
        }
    }
    elem.onclick=(e)=>{
        console.log('stopped holding')
        elem.onmousemove=()=>{}
        console.log(elem.onmousemove)
    }
}

const colObj={
    red:false,
    orange:false,
    black:false,
    blue:false
}
Object.entries(colObj).forEach(pair=>{
    let select=document.getElementById(pair[0]);
    console.log(document.getElementById([pair[0]]))
    console.log('ok')
    select.onclick=()=>{
        if (!pair[1]) {
            console.log('click')
            pair[1]=true;
            pentagon=document.createElement('div');
            pentagon2=document.createElement('div');
            pentagon.className=`${pair[0]} settlement`
            pentagon2.className=`${pair[0]} settlement`
            drag(pentagon)
            drag(pentagon2)
            document.getElementById('body').appendChild(pentagon)
            document.getElementById('body').appendChild(pentagon2)
            console.log(pentagon.parentElement)
            console.log(pentagon)
        } 
    }
})