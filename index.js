// Get each card rom HTML nad show them to cart.
let itemCount = 1;
const cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("click", function () {
    const h3 = card.querySelector("h3");
    const h3Text = h3.innerText;
    console.log(h3Text);

    const titleContainer = document.getElementById("title-container");
    const p = document.createElement("p");
    p.innerText = itemCount+ '. ' + h3Text;
    titleContainer.appendChild(p);
    itemCount ++;

    
  });
}

