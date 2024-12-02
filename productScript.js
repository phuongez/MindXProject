import products from "./product.js";

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

function renderStars(rating) {
    let starHTML = '';
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        // Sao vàng đầy
        starHTML += `
          <div class="star-container">
            <svg class="star-svg">
              <use href="#star-shape"></use>
            </svg>
          </div>`;
      } else if (rating >= i - 0.5) {
        // Sao nửa vàng
        starHTML += `
          <div class="star-container">
            <svg class="star-svg gray">
              <use href="#star-shape"></use>
            </svg>
            <svg class="star-svg yellow">
              <use href="#star-shape"></use>
            </svg>
          </div>`;
      } else {
        // Sao xám
        starHTML += `
          <div class="star-container">
            <svg class="star-svg gray">
              <use href="#star-shape"></use>
            </svg>
          </div>`;
      }
    }
    return starHTML;
  }

pathToProduct(selectedProduct)
displayProductsInfo(selectedProduct)






// <div class="color-choice">
                //     <p>Colours:</p>
                //     <div class="product-color">
                //         <button></button>
                //         <button></button>
                //     </div>
                // </div>
                // <div class="size-choice">
                //     <p>Sizes:</p>
                //     <div class="product-size">
                //         <button>XS</button>
                //         <button>S</button>
                //         <button>M</button>
                //         <button>L</button>
                //         <button>XL</button>
                //     </div>
                // </div>