import {renderStars,displaySale,displayProductPrice} from "./product.js";
// import products, {renderStars,displaySale,displayProductPrice} from "./product.js";


const homeButton = document.querySelector("#home");
homeButton.addEventListener('click',() => {
  window.location.href ="index.html";
})

const contactButton = document.querySelector("#contact");
contactButton.addEventListener('click',() => {
  window.location.href ="contact.html";
})

const aboutButton = document.querySelector("#about");
aboutButton.addEventListener('click',() => {
  window.location.href ="about.html";
})

const signUpButton = document.querySelector("#sign-up");
signUpButton.addEventListener('click',() => {
  window.location.href ="signup.html";
})

// Lấy products từ lưu trữ
function getProductsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

const products = getProductsFromLocalStorage();

// Danh sách sale
const flashSaleProducts = products.filter((product)=>product.discountRate>0);

// Danh sách sắp xếp theo lượng bán
const sortedSaleProduct = products.sort((a,b) => b.sell - a.sell);

function displayFlashProducts(products) {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
    const productHTML = `
      <div class="sale-product">
                <div class="product-container" data-id=${product.id} data-name="${product.name}" data-price=${product.discountPrice} data-image="${product.img}">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.img}" alt="sale item">
                    </a>
                    <div class="sale-percentage">${product.discountRate}%</div>
                    <button class="add-to-cart">Add To Cart</button>
                    <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
                </div>
                <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
                <div class="product-price">
                    <p class="sale-price">$${product.discountPrice}</p>
                    <p class="original-price">$${product.price}</p>
                </div>
                <div class="rating">
                    <div class="rating-stars">${renderStars(product.rating)}</div>
                    <p class="rating-numbers">(${product.numberRating})</p>
                </div>
            </div>
    `;
    productContainer.innerHTML += productHTML;
  });
}

displayFlashProducts(flashSaleProducts);

function displayBestSellProducts(products) {
  const productContainer = document.getElementById('best-sell');
  products.forEach(product => {
  const productHTML = `
    <div class="sale-product">
              <div class="product-container" data-id=${product.id} data-name="${product.name}" data-price=${product.discountPrice} data-image="${product.img}">
                  <a href="product.html?id=${product.id}">
                      <img src="${product.img}" alt="sale item">
                  </a>
                  <div class="sale-percentage">${product.discountRate}%</div>
                  <button class="add-to-cart">Add To Cart</button>
                  <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
              </div>
              <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
              <div class="product-price">
                  <p class="sale-price">$${product.discountPrice}</p>
                  <p class="original-price">$${product.price}</p>
              </div>
              <div class="rating">
                  <div class="rating-stars">${renderStars(product.rating)}</div>
                  <p class="rating-numbers">(${product.numberRating})</p>
              </div>
          </div>
  `;
  productContainer.innerHTML += productHTML;
});
}

displayBestSellProducts(sortedSaleProduct)


const carousel = document.querySelector('#product-list');
const nextButton = document.querySelector('#next-btn');
const prevButton = document.querySelector('#prev-btn');

let currentIndex = 0; // Vị trí sản phẩm đầu tiên
const productWidth = 270; // Chiều rộng của mỗi sản phẩm (theo CSS)

// Hàm để trượt đến sản phẩm tiếp theo
prevButton.addEventListener('click', () => {
  const maxIndex = carousel.children.length - 1; // Chỉ số cuối cùng
  if (currentIndex < maxIndex) {
    currentIndex++;
    carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }
});

// Hàm để trượt về sản phẩm trước
nextButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carousel.style.transform = `translateX(-${currentIndex * productWidth}px)`;
  }
});


//Hiển thị tất cả sản phẩm sale
let allProductView = false;
const viewAllSellProducts = document.querySelector(".view-all-sale-button");
viewAllSellProducts.addEventListener('click',() =>{
    const allProductsView = document.querySelector("#product-list");
    if(!allProductView) {
        allProductsView.style.display = 'grid';
        allProductsView.style.gridTemplateColumns = 'repeat(4,270px)';
        nextButton.style.display = "none";
        prevButton.style.display = "none";
        viewAllSellProducts.textContent = "Collapse"
        allProductView = !allProductView;
    } else {
        allProductsView.style.display = 'flex';
        nextButton.style.display = "block";
        prevButton.style.display = "block";
        viewAllSellProducts.textContent = "All Sale Products"
        allProductView = !allProductView;
    }   
})

//Banner dạng carousel
const images = document.querySelectorAll('.carousel-images img');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentImgIndex = 0; // Ảnh hiện tại
const intervalTime = 3000; // 3 giây

function showImage(index) {
  images.forEach(img => img.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  images[index].classList.add('active');
  dots[index].classList.add('active');
}

function nextImage() {
  currentImgIndex = (currentImgIndex + 1) % images.length; // Lặp lại từ đầu nếu hết ảnh
  showImage(currentImgIndex);
}

let autoSlide = setInterval(nextImage, intervalTime);

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    clearInterval(autoSlide); // Dừng tự động chuyển ảnh khi người dùng thao tác
    currentImgIndex = parseInt(dot.dataset.index);
    showImage(currentImgIndex);
    autoSlide = setInterval(nextImgImage, intervalTime); // Khởi động lại tự động chuyển ảnh
  });
});

//Countdown flashsale
const countdownElement = document.getElementById('countdown-timer');

// Thời gian kết thúc (4 ngày kể từ hiện tại)
const endTime = new Date().getTime() + 4 * 24 * 60 * 60 * 1000;

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = endTime - now;

  if (timeLeft <= 0) {
    clearInterval(countdownInterval);
    countdownElement.innerHTML = "Kết thúc!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();


//Our product display
const ourProductContainer = document.getElementById('full-product-section');
  products.forEach(product => {
  const productHTML = `
    <div class="sale-product">
              <div class="product-container" data-id=${product.id} data-name="${product.name}" data-price=${product.discountPrice} data-image="${product.img}">
                  <a href="product.html?id=${product.id}">
                      <img src="${product.img}" alt="sale item">
                  </a>
                  <div class="sale-percentage">${product.discountRate}%</div>
                  <button class="add-to-cart">Add To Cart</button>
                  <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
              </div>
              <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
              <div class="product-price">
                  <p class="sale-price">$${product.discountPrice}</p>
                  <p class="original-price">$${product.price}</p>
              </div>
              <div class="rating">
                  <div class="rating-stars">${renderStars(product.rating)}</div>
                  <p class="rating-numbers">(${product.numberRating})</p>
              </div>
          </div>
  `;
  ourProductContainer.innerHTML += productHTML;
}); 

const showAllButton = document.getElementById('view-all-product-button'); 
const productGrid = document.getElementById('full-product-section'); 
showAllButton.addEventListener('click', () => { 
  if (productGrid.style.maxHeight === 'none') { 
    productGrid.style.maxHeight = '760px'; 
    showAllButton.textContent = 'View All Product'; 
  } else { 
    productGrid.style.maxHeight = 'none'; 
    showAllButton.textContent = 'View Less'; } });

//Scroll to top
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Cuộn mượt mà
  });
});

//Tính năng giỏ hàng
const cart = [];
const cartDisplay = document.querySelector(".cart-icon");

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1; 
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image, 
      quantity: 1 || ""
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayItemsNumber();
}

function displayItemsNumber() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const numberInCartContainer = document.querySelector("#cart-number");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  numberInCartContainer.textContent = totalItems;
  numberInCartContainer.style.opacity = totalItems > 0 ? "100%" : "0%";
}

displayItemsNumber(); 

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productElement = e.target.closest('.product-container');
      const product = {
        id: productElement.dataset.id,
        name: productElement.dataset.name,
        price: parseInt(productElement.dataset.price),
        image: productElement.getAttribute('data-image'),
      };
      addToCart(product);
      displayItemsNumber();
      
    });
  });
});

const userCartButton = document.querySelector("#user-cart");

userCartButton.addEventListener('click', () => {
    window.location.href = 'cart.html';
});

// Xóa dữ liệu giỏ hàng khỏi Local Storage
window.addEventListener('DOMContentLoaded', () => {
  localStorage.removeItem('cart'); 
});

//Thay đổi hiển thị khi người dùng đăng nhập
document.addEventListener('DOMContentLoaded', () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const userButton = document.getElementById("user-button");
  const userOptions = document.getElementById("user-options");
  if(currentUser) {
    userButton.style.display = "block";
    userButton.addEventListener('click',(e) => {
      e.stopPropagation();
      userOptions.classList.toggle("show");
      cartDisplay.style.display = "block";
    });
    window.addEventListener('click', (event) => { 
      if (!event.target.matches('#user-button')) { 
        if (userOptions.classList.contains('show')) { 
          userOptions.classList.remove('show'); 
        } 
      } 
    });
  } else {
    userButton.style.display = "none";
    cartDisplay.style.display = "none";
  }
})

//Đăng xuất tài khoản
function logoutUser() {
  localStorage.removeItem('currentUser');
  // window.location.href = 'login.html';
}

const logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener('click',() =>{
  logoutUser();
  document.getElementById("user-button").style.display = "none";
})

//Gợi ý sản phẩm tìm kiếm
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const suggestionsList = document.getElementById("search-suggestions");

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    const products = getProductsFromLocalStorage();

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(keyword)
    );

    suggestionsList.innerHTML = "";
    filteredProducts.forEach(product => {
      const suggestionItem = document.createElement("li");
      suggestionItem.innerHTML = `
        <a href="product.html?id=${product.id}" class="search-item" data-id=${product.id}>
          <img src="${product.img}" alt="Product thumbail" class="search-item-img">
          <span class="search-item-name">${product.name}</span>
        </a>  
      `;
      suggestionsList.appendChild(suggestionItem);
    });

    suggestionsList.style.display = filteredProducts.length > 0 ? "flex" : "none";
  });
});

//Hiện sản phẩm theo category
const categoryContainer = document.getElementById("product-by-category");
const categoryBtns = document.querySelectorAll(".category-button");
categoryBtns.forEach(button => button.addEventListener('click',() => {
  categoryContainer.innerHTML ="";
  const productOfCategory = products.filter(product => product.category===button.dataset.category);
  if (productOfCategory.length == 0) {
    categoryContainer.style.display = "flex";
    categoryContainer.innerHTML ="<i>Products in this category will be updated soon</i>";
  }
  categoryContainer.style.display = "grid";
  productOfCategory.forEach(item => {
    const productHTML = `
    <div class="sale-product">
              <div class="product-container" data-id=${item.id} data-name="${item.name}" data-price=${item.discountPrice} data-image="${item.img}">
                  <a href="product.html?id=${item.id}">
                      <img src="${item.img}" alt="sale item">
                  </a>
                  <div class="sale-percentage">${item.discountRate}%</div>
                  <button class="add-to-cart">Add To Cart</button>
                  <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
              </div>
              <a href="product.html?id=${item.id}" class="product-name">${item.name}</a>
              <div class="product-price">
                  <p class="sale-price">$${item.discountPrice}</p>
                  <p class="original-price">$${item.price}</p>
              </div>
              <div class="rating">
                  <div class="rating-stars">${renderStars(item.rating)}</div>
                  <p class="rating-numbers">(${item.numberRating})</p>
              </div>
          </div>
  `;
  categoryContainer.innerHTML += productHTML;
  })
}))

// Special offer
const specialOfferBtn = document.querySelector(".buynow-button");
specialOfferBtn.addEventListener('click',() => {
  window.location.href= "product.html?id=11";
})

// Special offer countdown
const countdownTimer = document.getElementById('timer');

// Thời gian kết thúc (4 ngày kể từ hiện tại)
const specialEndTime = new Date().getTime() + 6 * 24 * 60 * 60 * 1000;

function specialCountdown() {
  const now = new Date().getTime();
  const timeLeft = specialEndTime - now;

  if (timeLeft <= 0) {
    clearInterval(specialCountdownInterval);
    countdownTimer.innerHTML = "Kết thúc!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('timer-day-number').textContent = days;
  document.getElementById('timer-hour-number').textContent = String(hours).padStart(2, '0');
  document.getElementById('timer-minute-number').textContent = String(minutes).padStart(2, '0');
  document.getElementById('timer-second-number').textContent = String(seconds).padStart(2, '0');
}

const specialCountdownInterval = setInterval(specialCountdown, 1000);

specialCountdown();

//Tính năng chưa làm
document.querySelectorAll('.browse-category').forEach(button => {
  button.addEventListener('click',() => {
    alert("Tính năng đang hoàn thiện");
  })
})

document.querySelector("#send-email").addEventListener('click',() => {
  alert("Tính năng đang hoàn thiện");
})

document.querySelectorAll(".account-option").addEventListener('click',() => {
  alert("Tính năng đang hoàn thiện");
})

export {cart};