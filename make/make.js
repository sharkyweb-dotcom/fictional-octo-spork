let selectedResource='brick';
const radioList=['brick','ore','lumber','wheat','sheep','desert'];
radioList.forEach(res=>{
    resource=document.getElementById(res);
    resource.addEventListener('click',function(){
        selectedResource=res;
    })
})
for (let i=0;i<19;i++) {
    const tile=document.getElementById("imgHex");
    tile.addEventListener('click',function(){
        tile.setAttribute('class',`hex ${selectedResource}`);
    });
    tile.setAttribute('id','added')
}

function drag(elem) {
    elem.onmousedown=(e)=>{
        document.onmousemove=e=>{
            let x=e.clientX;
            let y=e.clientY;
            elem.style.top=`${y-25}px`;
            elem.style.left=`${x-25}px`;
        }
    }
    document.onclick=(e)=>{
        document.onmousemove=()=>{}
    }
}

const colObj={
    red:false,
    orange:false,
    white:false,
    blue:false
}
Object.entries(colObj).forEach(pair=>{
    let select=document.getElementById(pair[0]);
    select.onclick=()=>{
        if (!pair[1]) {
            pair[1]=true;
            pentagon=document.createElement('div');
            pentagon2=document.createElement('div');
            pentagon.className=`${pair[0]} settlement`
            pentagon2.className=`${pair[0]} settlement`
            drag(pentagon)
            drag(pentagon2)
            document.getElementById('body').appendChild(pentagon)
            document.getElementById('body').appendChild(pentagon2)
        } else {
            Object.values(document.querySelectorAll('.'+pair[0])).forEach(deletedHouse=>deletedHouse.remove())
            pair[1]=false;
        }
    }
})
let page='make'