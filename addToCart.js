// // add to cart function
// var addItemId = 0;
// function addToCart(item) {
//   var selectedItem = document.createElement('div');
//   selectedItem.classList.add('cartImg');
//   selectedItem.setAttribute('id', addItemId);
//   var img = document.createElement('img');
//   img.setAttribute('src', item.children[0].currentSrc);
//   var title = document.createElement('h3');
//   title.innerText = item.children[1].innerText;
//   var label = document.createElement('label');
//   label.innerText = item.children[2].children[0].innerText;
//   var select  = document.createElement('select');
//   select.innerText = item.children[2].children[1].value;
//   label.append(select);
//   var cartItems = document.getElementById('title');
//   selectedItem.append(img);
//   selectedItem.append(title);
//   cartItems.append(selectedItem);
// }

function addToCart(item) {
    // get the item details
    var itemImage = item.querySelector("img").src;
    var itemName = item.querySelector("h3").innerText;
    var itemPrice = item.querySelector(".price").innerText;
  
    // create a new cart item
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${itemImage}" alt="${itemName}">
      <div class="cart-item-details">
        <h4>${itemName}</h4>
        <p>${itemPrice}</p>
      </div>
      <button class="remove-item">Remove</button>
    `;
  
    // add the item to the cart
    var cart = document.querySelector(".shopping-cart");
    var cartItems = cart.querySelector("#title");
    cartItems.appendChild(cartItem);
  
    cartItem.querySelector(".remove-item").addEventListener("click", function() {
        cartItem.remove();
        updateCartTotal();
      });
      
    // update the cart total
    updateCartTotal();
  }

function updateCartTotal() {
    var cart = document.querySelector(".shopping-cart");
    var cartItems = cart.querySelectorAll(".cart-item");

    // calculate the total price
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        var itemPrice = cartItems[i].querySelector(".cart-item-details p").innerText;
        total += parseFloat(itemPrice.replace("$", ""));
}

// update the cart total
var cartTotal = cart.querySelector(".cart-total");
cartTotal.innerText = "$" + total.toFixed(2);
}



  