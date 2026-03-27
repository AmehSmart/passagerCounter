let count = 0
let countEl = document.getElementById("cunt")
let saveEL = document.getElementById("pre")
function increment(){

    count += 1
    countEl.textContent = count
   
}

function save(){
    let saveCount = count + " - "
    saveEL.textContent += saveCount
    count = 0
    countEl.textContent = count
    console.log(count)
}