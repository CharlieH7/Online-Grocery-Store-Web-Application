let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  navbar.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
    1020: {
      slidesPerView: 5,
    },
  },
});

// search function
function searchItems() {
  const input = document.getElementById("search-box");
  const filter = input.value.toUpperCase();
  const items = document.querySelectorAll(".swiper-slide");

  items.forEach((item) => {
    const name = item.querySelector("h3").textContent.toUpperCase();
    if (name.includes(filter)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

document.getElementById("search-box").addEventListener("keyup", searchItems);
