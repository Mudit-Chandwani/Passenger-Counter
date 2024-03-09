let saveEl=document.getElementById ("save-el")
let countEl=document.getElementById("count-el")

let count=0

// console.log(saveEl)

function increment(){
    count=count+1
    countEl.textContent = count // textcontent or innertext

    
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    count=0
    countEl.textContent=0
    
}



