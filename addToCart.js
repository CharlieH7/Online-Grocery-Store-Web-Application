

function addToCart(item) {
  // get the item details
  var itemImage = item.querySelector("img").src;
  var itemName = item.querySelector("h3").innerText;
  var itemPrice = item.querySelector(".price").innerText;

  // check if the item already exists in the cart
  var cartItem = null;
  var cart = document.querySelector(".shopping-cart");
  var cartItems = cart.querySelectorAll(".cart-item");
  for (var i = 0; i < cartItems.length; i++) {
    var name = cartItems[i].querySelector(".cart-item-details h4").innerText;
    if (name === itemName) {
      cartItem = cartItems[i];
      break;
    }
  }

  if (cartItem) {
    // update the quantity of the existing cart item
    var quantityElement = cartItem.querySelector(".cart-item-quantity");
    var quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = quantity + 1;

    // update the cart total
    updateCartTotal();
  } else {
    // create a new cart item
    cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <img src="${itemImage}" alt="${itemName}">
      <div class="cart-item-details">
        <h4>${itemName}</h4>
        <p data-price="${parseFloat(itemPrice.replace("$", ""))}">${itemPrice}</p>
      </div>
      <span>Quantity: </span><span class="cart-item-quantity">1</span>
      <br/>
      <button class="remove-item">Remove</button>
    `;

    // add the item to the cart
    var cartItemsContainer = cart.querySelector("#title");
    cartItemsContainer.appendChild(cartItem);

    cartItem.querySelector(".remove-item").addEventListener("click", function () {
      cartItem.remove();
      updateCartTotal();
    });

    // update the cart total
    updateCartTotal();
  }
}

function updateCartTotal() {
  var cart = document.querySelector(".shopping-cart");
  var cartItems = cart.querySelectorAll(".cart-item");

  // calculate the total price and quantity
  var total = 0;
  var quantity = 0;
  for (var i = 0; i < cartItems.length; i++) {
    var itemPriceElement = cartItems[i].querySelector(".cart-item-details p");
    var itemPrice = parseFloat(itemPriceElement.dataset.price);
    var itemQuantity = parseInt(cartItems[i].querySelector(".cart-item-quantity").innerText);
    total += itemPrice * itemQuantity;
    quantity += itemQuantity;
  }

  // update the cart total and quantity
  var cartTotal = cart.querySelector(".cart-total");
  cartTotal.innerText = "Total (" + quantity + " items): $" + total.toFixed(2);

  // update the checkout button status
  const checkoutBtn = document.getElementById('checkout-btn');
  if (total === 0) {
    checkoutBtn.classList.add('disabled');
    checkoutBtn.onclick = function(event) {
      event.preventDefault();
      alert('Your shopping cart is empty!');
    }
  } else {
    checkoutBtn.classList.remove('disabled');
    checkoutBtn.onclick = function() {
      // Allow user to proceed to checkout
    }
  }
}


// chekkout button grey out
const checkoutBtn = document.getElementById('checkout-btn');
const cartTotal = document.querySelector('.cart-total');

// Check if cart total is $0.00
if (cartTotal.innerText === 'Total (0 items): $0.00') {
  // Disable checkout button
  checkoutBtn.classList.add('disabled');
  checkoutBtn.onclick = function(event) {
    event.preventDefault();
    alert('Your shopping cart is empty!');
  }
} else {
  // Enable checkout button
  checkoutBtn.classList.remove('disabled');
  checkoutBtn.onclick = function() {
    // Allow user to proceed to checkout
  }
}
