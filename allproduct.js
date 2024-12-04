import products, {renderStars,displaySale,displayProductPrice} from "./product.js";

function displayAllProducts(products) {
    const productContainer = document.getElementById('all-products-display');
    products.forEach(product => {
    const productHTML = `
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
    productContainer.innerHTML += productHTML;
  });
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

//   function displaySale(product) {
//     let saleHTML = "";
//     if(product.discountRate > 0) {
//         saleHTML = `<div class="sale-percentage">${product.discountRate}%</div>`;
//     }
//     return saleHTML; 
//   }

//   function displayProductPrice(product) {
//     let priceHTML ="";
//     if (!(product.discountPrice == product.price)) {
//         priceHTML = `
//         <p class="sale-price">$${product.discountPrice}</p>
//         <p class="original-price">$${product.price}</p>
//         `
//     } else {
//         priceHTML =
//         `
//         <p class="sale-price">$${product.discountPrice}</p>
//         `
//     }
//     return priceHTML;
//   }

displayAllProducts(products);