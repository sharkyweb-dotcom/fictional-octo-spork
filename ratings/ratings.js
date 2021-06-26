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