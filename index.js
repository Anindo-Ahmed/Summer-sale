// Get each card rom HTML nad show them to cart.
let itemCount = 1;
let totalPrice = 0;
const cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("click", function () {
    const h3ItemTitle = card.querySelector("h3");
    const itemName = h3ItemTitle.innerText;

    // get item name list
    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = itemCount+ '. ' + itemName;
    titleContainer.appendChild(p);
    itemCount ++;

    // get total price
    const priceElement = card.querySelector('span');
    const price = parseFloat(priceElement.innerText.split(' ')[1]);
    totalPrice = totalPrice + price;
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerText = totalPrice;
    
  });
  
}

