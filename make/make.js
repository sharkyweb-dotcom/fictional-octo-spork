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
