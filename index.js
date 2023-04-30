const increment = document.querySelector("#plus");
const decrement = document.querySelector("#minus");
const amount = document.querySelector('.amount');
const addToCart = document.querySelector(".add_btn");
const cartNumber = document.querySelector(".indicator");
const cartBtn = document.querySelector('.cart-btn');
const cart = document.querySelector(".cart-wrp");
const nonePro = document.querySelector('.invisible');
const cartInfo = document.querySelector('.cart-content');
const mainImage = document.querySelector('.main-thumbnail')
const images = document.querySelectorAll(".preview > img");
const mainThumbnailLightBox = document.querySelector(".lightbox-container");
const mainThumbnailLightBoxImage = document.querySelector(".lightbox .main-thumbnail")
const lightbox = document.querySelector(".lightbox");
const closeBtn = document.querySelector(".close-lightbox");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#previous");
const mobileImg = document.querySelector(".thumb-mob");
const closeNavBtn = document.querySelector(".close-btn");
const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector('.overlay');
let count = 0;
let imageCount = 1;

increment.addEventListener('click',() => {
    count++;
    amount.innerText = count;
})

decrement.addEventListener('click', () => {
    if(count > 0) {
        count--;
    }
    amount.innerText = count;
})

nextBtn.addEventListener('click', () => {
    if(imageCount == 4) {
        imageCount = 1;
    }
    else {
        imageCount++;
    }
    mobileImg.src = `./images/image-product-${imageCount}.jpg`
})

prevBtn.addEventListener('click', () => {
    if(imageCount == 1) {
        imageCount = 4
    }
    else {
        imageCount--;
    }
    mobileImg.src = `./images/image-product-${imageCount}.jpg`
})

addToCart.addEventListener('click', () => {
    if(count > 0) {
        cartNumber.innerText = count;
        cartNumber.style.display = "flex"

        const total = 125.00 * count

        cartInfo.innerHTML = `<div class="product">
        <div>
          <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
          <div class="product-info">
            <p class="product-title">Fall Limited Edition Sneakers</p>
           <p><span>$125.00</span> × <span class="number">${count}</span> <b>$${parseFloat(total).toFixed(2)}</b></p>
          </div>
          <button class="delete-btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt="delete"></button>
        </div>
        <button class="checkout-btn">Checkout</button>
      </div>`;
    }
})

function toggleCart () {
    cart.classList.toggle('invisible')
}

function deleteItem () {
    cart.classList.add("empty");
    cart.innerHTML = `<p>Your cart is empty</p>`;
    cartNumber.style.display = "none";
}

images.forEach((image) => {
  image.addEventListener("click", () => {
    const lastImg = document.querySelectorAll(".selected");
    console.log(lastImg);
    if (lastImg) {
      lastImg[0].classList.remove("selected");
    }
    image.classList.add("selected");
    const selectedImg = document.querySelector(".selected");
    switch (selectedImg.getAttribute("src")) {
      case "./images/image-product-1-thumbnail.jpg":
        mainImage.src = "./images/image-product-1.jpg";
        mainThumbnailLightBoxImage.src = "./images/image-product-1.jpg";
        break;
      case "./images/image-product-2-thumbnail.jpg":
        mainImage.src = "./images/image-product-2.jpg";
        mainThumbnailLightBoxImage.src = "./images/image-product-2.jpg";
        break;
      case "./images/image-product-3-thumbnail.jpg":
        mainImage.src = "./images/image-product-3.jpg";
        mainThumbnailLightBoxImage.src = "./images/image-product-3.jpg";
        break;
      case "./images/image-product-4-thumbnail.jpg":
        mainImage.src = "./images/image-product-4.jpg";
        mainThumbnailLightBoxImage.src = "./images/image-product-4.jpg";
        break;
    }
  });
});
cartBtn.addEventListener('click', toggleCart);

mainImage.addEventListener('click', () => {
    console.log("chintu");
    lightbox.classList.remove('invisible');
})

closeBtn.addEventListener('click', () => {
    lightbox.classList.add('invisible');
})

menuBtn.addEventListener('click', () => {
  menu.classList.add("active");
  overlay.classList.add("active");
  
})

closeNavBtn.addEventListener('click', () => {
  menu.classList.remove("active");
  overlay.classList.remove("active");
})