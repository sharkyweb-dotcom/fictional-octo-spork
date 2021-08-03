function filter() {
    let filteredArray=[];
    let restrictedArray=['bad', 'horrible', 'disgusting', 'useless', 'abhorrent'];
    let stringValue=document.getElementById('inputwhy').value;
    console.log(stringValue);
    let stringArray=stringValue.split(' ');
    stringArray.forEach(word=>{
    let number=0;
    restrictedArray.forEach(badWord=>{  
        if (word.toLowerCase()===badWord) {
            filteredArray.push('#*^#& ');
        } else {
            number++;
            console.log(`${restrictedArray.length} ${number}`)
            if (number===restrictedArray.length) {
                filteredArray.push(word)
            }
        }
    })
    })
    console.log(filteredArray)
    document.getElementById('inputwhy').value=filteredArray.join(' ');
}
const listenedList=['range','inputwhy', 'inputsuggest']
let timeOver;
let o;
let timeOut;
let t;
let inputArray=['I have done these things:'];
listenedList.forEach(item=>{
    document.getElementById(item).addEventListener("mouseover", function() {
        inputArray.push(`Mouseover: ${item}`);
        o=new Date;
        timeOver=o.getTime();
        document.getElementById('inputTracked').value=inputArray.join('\n');
        console.log(document.getElementById('inputTracked').value);
    });
    document.getElementById(item).addEventListener("mouseout", function() {
        t=new Date;
        timeOut=t.getTime();
        console.log('Seconds hovering over '+item+(timeOut-timeOver)/1000);
        inputArray.push(`Mouseout: ${item} \nSeconds hovering over ${item}:`);
        inputArray.push((timeOut-timeOver)/1000);
        document.getElementById('inputTracked').value=inputArray.join('\n');
    });
    document.getElementById(item).addEventListener("click", function() {
        console.log(`Clicked: ${item}`)
        inputArray.push(`Clicked: ${item}`)
        document.getElementById('inputTracked').value=inputArray.join('\n');
    });
})
let page='rate';