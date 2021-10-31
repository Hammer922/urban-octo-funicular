let onPress1 = document.getElementById("btn-1")
let onPress2 = document.getElementById("btn-2")
let names = "Chris Hammond"
let count = 0

function button1() {
    count += 1
    onPress1.textContent = count
    console.log(count)
}

function button2() {
    count += 1
    onPress2.textContent = names + count
}
