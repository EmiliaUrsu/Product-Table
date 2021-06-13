let products = [{
    product: "Product 1",
    price: 100.00,
    quantity: 1.00,
    operations: false },
{
    product: "Product 2",
    price: 200.00,
    quantity: 2.00,
    operations: true },
{
    product: "Product 3",
    price: 300.00,
    quantity: 3.00,
    operations: false }
]

function showProducts() { products.forEach(p => {
    let div = document.createElement('div')
    div.className = "row"

    Name = document.createElement('div')
    Name.className = "name"
    Name.innerText = p.product

    Price = document.createElement('div')
    Price.className = "price"
    Price.innerText = p.price.toFixed(2)

    quantity = document.createElement('div')
    quantity.className = "quantity"
    quantity.innerText = p.quantity.toFixed(2)

    Operation = document.createElement('div')
    Operation.className = "operations"

    buttonDown = document.createElement('button')
    buttonDown.innerText = "⇃"
    buttonDown.onclick = down

    buttonUp = document.createElement('button')
    buttonUp.innerText = "↾"
    buttonUp.onclick = up

    p.operations ? Operation.append(buttonDown, buttonUp):Operation.innerHTML = "x"

    div.append(Name, Price, quantity, Operation)
    table.appendChild(div)  } )

}
let arrayTabel = document.getElementById("table").children

function up() {
for (i=0; i<arrayTabel.length; i++) {
    let searchButton = arrayTabel[i].lastElementChild.children
    if (searchButton.length) { 
     if (i < 1) {
     return  }
     let prevR = arrayTabel[i-1]
     let currentR = arrayTabel[i]
     currentR.after(prevR)
    return }
 }
}

function down() {
for (i=0; i<arrayTabel.length; i++) {
    let searchButton = arrayTabel[i].lastElementChild.children
    if (searchButton.length) {
     if (i>arrayTabel.length-2) {
    return  }
    let prevR = arrayTabel[i+1]
    let currentR = arrayTabel[i]
    prevR.after(currentR)
    return}
 }
}
showProducts()