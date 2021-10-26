let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
//let resetEl = document.getElementById("reset-el")
let count = 0

console.log(saveEl)

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalEl.textContent += count + count // Total Element Needs Work //
    count = 0
    countEl.textContent = 0
    
    console.log(count)
}
function reset() {
    count = 0
    countEl.textContent = 0
}

