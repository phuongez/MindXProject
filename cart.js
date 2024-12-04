  
function displayItemInCart() {
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartData = localStorage.getItem('cart');
    const cart = JSON.parse(cartData);
    const itemContainer = document.getElementById('cart-product');
    itemContainer.innerHTML = ''; // Xóa nội dung cũ
  
    cart.forEach(item => {
      const itemHTML = `
      <div class="cart-product">
        <div class="cart-product-image">
          <img src="${item.image}" alt="Product Image">
          <div class="cart-product-delete">
            <img src="./images/Delete white.svg" alt="delete icon" id="delete-item">
          </div>
        </div>
        <div class="cart-product-name">
          <p>${item.name}</p>
        </div>
        <div class="cart-product-price">
          <p>$${item.price}</p>
        </div>
        <div class="cart-product-quantity-container" data-id=${item.id}>
          <p class="cart-quantity">${item.quantity}</p>
          <div class="cart-increase-decrease">
            <img src="./images/Drop-Up-Small.png" alt="Increase icon" class="increase-button">   
            <img src="./images/Drop-Down-Small.png" alt="Decrease icon" class="decrease-button">
          </div>
        </div>
        <div class="cart-product-subtotal">
          <p>$${item.price * item.quantity}</p>
        </div>
      </div>  
      `;
      itemContainer.innerHTML += itemHTML;
    });
  }
  
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('increase-button')) {
      const productElement = e.target.closest('.cart-product-quantity-container');
      const productId = productElement.dataset.id;
  
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const productInCart = cart.find(item => item.id === productId);
  
      if (productInCart) {
        productInCart.quantity += 1;
  
        const quantityElement = productElement.querySelector('.cart-quantity');
        quantityElement.textContent = productInCart.quantity;
  
        localStorage.setItem('cart', JSON.stringify(cart));
      }
    }
  });
  
  
  
  document.addEventListener("DOMContentLoaded", displayItemInCart);
  