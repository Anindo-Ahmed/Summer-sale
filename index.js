// Get each card rom HTML nad show them to cart.
let itemCount = 1;
let totalPrice = 0;
const cards = document.getElementsByClassName("card");
for (let card of cards) {
    if(totalPrice >= 200){
        console.log('use coupon')
    }
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

const couponBtn = document.getElementById('apply-btn');
couponBtn.addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value.split(' ').join('').toUpperCase();
    
    if(totalPrice >=200){
        const discountElement = document.getElementById('discountPrice');
        discountPrice = totalPrice * 0.2;
        discountElement.innerText = discountPrice;
        
        if(inputText === 'SELL200'){
            const netPrice = totalPrice - discountPrice;
            const total = document.getElementById('total');
            total.innerText = netPrice;
            inputField.value = ' ';
        }
        else{
            return 'Invalid Coupun !'
        }

    }else{
        alert("Please purchse $200 & get 20% Off!")
        inputField.value = ' ';
    }
})
