total = 0.00
document.getElementById("total").innerHTML = "M"+total

const addToCart = (button) => {
    price = parseFloat(button.parentElement.childNodes[5].textContent.trim().slice(1,))
    product_name = button.parentElement.childNodes[3].textContent.trim()
    document.getElementById("cart-items").innerHTML += makeElement()
    total += price
    document.getElementById("total").innerHTML = "M"+total
}

const makeElement = () => {
  return (`
    <div class="item">
        <span class="name">${product_name}</span>
        <span class="price">${price}</span>
    </div>
  `)
}


// console.log(document.getElementById("som").parentElement.childNodes[3].textContent)

const ATC = (p_id) => {
  price = document.getElementById(p_id)
  console.log(price);
}

const ATC2 = (price) => {
    total += price
    document.getElementById("total").innerHTML = "M"+total
}

