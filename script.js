const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad", 
        rating: 5,
        numberRating: 88,
        stock: 99,
        price: 160,
        discountPrice: 120,
        discountRate: "-40%",
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        color: ["grey", "red"],
        size: [],
        img: "./images/products/Frame 611.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor", 
        rating: 5,
        numberRating: 99,
        stock: 99,
        price: 400,
        discountPrice: 370,
        discountRate: "-30%",
        description: "Ultra-Wide Gaming Monitor High-resolution display with ultra-wide aspect ratio. Features rapid refresh rate and adaptive sync technology for smooth, immersive gameplay without motion blur.",
        color: [],
        size: [],
        img: "./images/products/Frame 613.png"
    },
    {
        id: 4,
        name: "S-Series Comfort Chair", 
        rating: 4.5,
        numberRating: 99,
        stock: 99,
        price: 400,
        discountPrice: 375,
        discountRate: "-25%",
        description: "Ergonomic Comfort Chair Premium quality materials with adjustable lumbar support and recline features. Provides maximum comfort for long hours of sitting with breathable mesh fabric.",
        color: [],
        size: [],
        img: "./images/products/Frame 614.png"
    },
    {
        id: 5,
        name: "The North Coat", 
        rating: 5,
        numberRating: 65,
        stock: 99,
        price: 360,
        discountPrice: 260,
        discountRate: "-40%",
        description: "Winter North Coat High-quality insulation with water-resistant exterior. Features multiple pockets, adjustable hood, and thermal lining for ultimate warmth & protection in cold climates.",
        color: [],
        size: [],
        img: "./images/products/Frame 605.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad", 
        rating: 5,
        numberRating: 88,
        stock: 99,
        price: 160,
        discountPrice: 120,
        discountRate: "-40%",
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        color: [],
        size: [],
        img: "./images/products/Frame 611.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad", 
        rating: 5,
        numberRating: 88,
        stock: 99,
        price: 160,
        discountPrice: 120,
        discountRate: "-40%",
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        color: [],
        size: [],
        img: "./images/products/Frame 611.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: "-35%",
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 612 copy.png"
    }
];

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
    const productHTML = `
      <div class="sale-product">
                <div class="product-container">
                    <img src="${product.img}" alt="sale item">
                    <div class="sale-percentage">${product.discountRate}</div>
                    <button class="add-to-cart">Add To Cart</button>
                    <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
                    <div class="seen-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></div>
                </div>
                <p class="product-name">${product.name}</p>
                <div class="product-price">
                    <p class="sale-price">${product.discountPrice}</p>
                    <p class="original-price">${product.price}</p>
                </div>
                <div class="rating">
                    <div class="rating-stars">
                        <img src="./images/star.svg" alt="rating">
                        <img src="./images/star.svg" alt="rating">
                        <img src="./images/star.svg" alt="rating">
                        <img src="./images/star.svg" alt="rating">
                        <img src="./images/star.svg" alt="rating">
                    </div>
                    <p class="rating-numbers">(${product.numberRating})</p>
                </div>
            </div>
    `;
    productContainer.innerHTML += productHTML;
  });
}

displayProducts(products);


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