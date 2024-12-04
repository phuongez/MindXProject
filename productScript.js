import products, {renderStars,displaySale,displayProductPrice} from "./product.js";

const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get('id'), 10);

const selectedProduct = products.find(product => product.id === productId);

function pathToProduct(selectedProduct) {
    const pathDisplay = document.querySelector(".path-to-ui");
    const pathText = `
        <p style="opacity: 50%;">Home</p>
        <p style="opacity: 50%;">/</p>
        <p style="opacity: 50%;">${selectedProduct.category}</p>
        <p style="opacity: 50%;">/</p>
        <p>${selectedProduct.name}</p>
    `
    pathDisplay.innerHTML = pathText;
}

function displayProductsInfo(product) {
    const productContainer = document.querySelector('.product-info');
    const productHTML = `
    <div class="product-images">
                <div><img src="${product.img2}" alt="Product Image"></div>
                <div><img src="${product.img3}" alt="Product Image"></div>
                <div><img src="${product.img4}" alt="Product Image"></div>
                <div><img src="${product.img5}" alt="Product Image"></div>
            </div>
            <div></div>
            <div class="product-thumb">
                <img src="${product.img}" alt="Product Image">
            </div>
            <div></div>
            <div class="product-desciption">
                <h1>${[product.name]}</h1>
                <div class="rate-and-stock">
                    <div class="rating-star">${renderStars(product.rating)}</div>
                    <p class="number-review">(${product.numberRating} Reviews)</p>
                    <div class="straight-line"></div>
                    <p class="in-stock">${product.stock>0?"In Stock":"Out of Stock"}</p>
                </div>
                <p class="product-price">$${product.discountPrice}</p>
                <p class="description">${product.description}</p>
                <div class="horizontal-line"></div>
                <div class="buy-quanity">
                    <div class="buy-number">
                        <button class="decrease-product">-</button>
                        <button class="product-number">1</button>
                        <button class="increase-product">+</button>
                    </div>
                    <button class="buy-now">Buy Now</button>
                    <div class="wish-list"><img src="./images/products/Vector.svg" alt="Heart icon"></div>
                </div>
                <div class="priviledge">
                    <div class="free-delivery">
                        <img src="./images/products/icon-delivery.png" alt="Delivery icon">
                        <div class="free-delivery-text">
                            <h1>Free Delivery</h1>
                            <p><u>Enter your postal code for Delivery Availability</u></p>
                        </div>
                    </div>
                    <div class="return-delivery">
                        <img src="./images/products/Icon-return.png" alt="Return icon">
                        <div class="return-delivery-text">
                            <h1>Return Delivery</h1>
                            <p>Free 30 Days Delivery Returns. <u>Details</u></p>
                        </div>
                    </div>
                </div>
            </div>
    `;
    productContainer.innerHTML = productHTML;
}

function displayColorChoice() {

}

// function renderStars(rating) {
//     let starHTML = '';
//     for (let i = 1; i <= 5; i++) {
//       if (rating >= i) {
//         // Sao vàng đầy
//         starHTML += `
//           <div class="star-container">
//             <svg class="star-svg">
//               <use href="#star-shape"></use>
//             </svg>
//           </div>`;
//       } else if (rating >= i - 0.5) {
//         // Sao nửa vàng
//         starHTML += `
//           <div class="star-container">
//             <svg class="star-svg gray">
//               <use href="#star-shape"></use>
//             </svg>
//             <svg class="star-svg yellow">
//               <use href="#star-shape"></use>
//             </svg>
//           </div>`;
//       } else {
//         // Sao xám
//         starHTML += `
//           <div class="star-container">
//             <svg class="star-svg gray">
//               <use href="#star-shape"></use>
//             </svg>
//           </div>`;
//       }
//     }
//     return starHTML;
//   }

pathToProduct(selectedProduct)
displayProductsInfo(selectedProduct)

//Display related products
const relatedItems = products.filter((product) => product.category===selectedProduct.category);
const relatedProductContainer = document.getElementById('related-items');
    relatedItems.forEach(product => {
    const relatedProductHTML = `
      <div class="sale-product">
                <div class="product-container">
                    <a href="product.html?id=${product.id}">
                        <img src="${product.img}" alt="sale item">
                    </a>
                    ${displaySale(product)}
                    <button class="add-to-cart">Add To Cart</button>
                    <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
                    <div class="seen-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></div>
                </div>
                <a href="product.html?id=${product.id}" class="product-name">${product.name}</a>
                <div class="product-price">
                    ${displayProductPrice(product)}
                </div>
                <div class="rating">
                    <div class="rating-stars">${renderStars(product.rating)}</div>
                    <p class="rating-numbers">(${product.numberRating})</p>
                </div>
            </div>
    `;
    relatedProductContainer.innerHTML += relatedProductHTML;
  });



