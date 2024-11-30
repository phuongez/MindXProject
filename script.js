const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad", 
        rating: 5,
        numberRating: 88,
        stock: 99,
        price: 160,
        discountPrice: 120,
        discountRate: 40/160*100,
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
        discountRate: Math.floor(20000/1160),
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
        discountRate: 30/400*100,
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
        discountRate: Math.floor(2500/400),
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
        discountRate: Math.floor(10000/360),
        description: "Winter North Coat High-quality insulation with water-resistant exterior. Features multiple pockets, adjustable hood, and thermal lining for ultimate warmth & protection in cold climates.",
        color: [],
        size: [],
        img: "./images/products/Frame 605.png"
    },
    {
        id: 6,
        name: "Gucci Duffle Bag", 
        rating: 4.5,
        numberRating: 65,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: Math.floor(20000/1160),
        description: "Durable Duffle Bag High-quality fabric with reinforced stitching for heavy-duty use. Spacious compartments and multiple pockets for organized storage & easy access to essentials.",
        color: [],
        size: [],
        img: "./images/products/Frame 606.png"
    },
    {
        id: 7,
        name: "RGB liquid CPU Cooler", 
        rating: 4.5,
        numberRating: 65,
        stock: 99,
        price: 170,
        discountPrice: 160,
        discountRate: Math.floor(1000/170),
        description: "High-Performance CPU Cooler Efficient thermal design with multiple heat pipes and high airflow fan. Ensures optimal cooling & quiet operation for high-performance computing.",
        color: [],
        size: [],
        img: "./images/products/Frame 610.png"
    },
    {
        id: 8,
        name: "Small BookSelf", 
        rating: 5,
        numberRating: 65,
        stock: 99,
        price: 360,
        discountPrice: 360,
        discountRate: Math.floor(0/360),
        description: "Compact Small Bookshelf Sturdy wood construction with adjustable shelves. Perfect for organizing books, decor, and small items in limited spaces. Sleek design fits any room decor.",
        color: [],
        size: [],
        img: "./images/products/Frame 612.png"
    },
    {
        id: 9,
        name: "Breed Dry Dog Food", 
        rating: 3,
        numberRating: 35,
        stock: 99,
        price: 100,
        discountPrice: 100,
        discountRate: Math.floor(0/100),
        description: "Premium Dog Food High-quality ingredients with balanced nutrition for dogs of all sizes. Rich in essential vitamins and minerals to support overall health & vitality.",
        color: [],
        size: [],
        img: "./images/products/Frame 604.png"
    },
    {
        id: 10,
        name: "CANON EOS DSLR Camera", 
        rating: 4,
        numberRating: 95,
        stock: 99,
        price: 360,
        discountPrice: 360,
        discountRate: Math.floor(0/360),
        description: "Canon DSLR Camera High-resolution sensor with advanced image processing for stunning photos and videos. Features fast autofocus and a versatile lens for creative photography.",
        color: [],
        size: [],
        img: "./images/products/Frame 604 (1).png"
    },
    {
        id: 11,
        name: "ASUS FHD Gaming Laptop", 
        rating: 5,
        numberRating: 325,
        stock: 99,
        price: 700,
        discountPrice: 700,
        discountRate: Math.floor(0/700),
        description: "High-Performance Gaming Laptop Powerful processor with advanced graphics card and high-refresh-rate display. Designed for immersive gaming and multitasking with customizable RGB keyboard.",
        color: [],
        size: [],
        img: "./images/products/Frame 604 (2).png"
    },
    {
        id: 12,
        name: "Curology Product Set", 
        rating: 4.5,
        numberRating: 145,
        stock: 99,
        price: 500,
        discountPrice: 500,
        discountRate: Math.floor(0/500),
        description: "Curology Skincare Set Personalized skincare regimen with high-quality ingredients. Includes cleanser, custom formula, and moisturizer to address specific skin concerns & improve complexion.",
        color: [],
        size: [],
        img: "./images/products/Frame 604 (3).png"
    },
    {
        id: 13,
        name: "Kids Electric Car", 
        rating: 5,
        numberRating: 65,
        stock: 99,
        price: 960,
        discountPrice: 960,
        discountRate: Math.floor(0/960),
        description: "Electric Ride-On Car for Kids High-quality materials with realistic design and safety features. Features rechargeable battery, working lights, and sounds for hours of fun driving.",
        color: [],
        size: [],
        img: "./images/products/Frame 608.png"
    },
    {
        id: 14,
        name: "Jr. Zoom Soccer Cleats", 
        rating: 5,
        numberRating: 35,
        stock: 99,
        price: 1160,
        discountPrice: 1160,
        discountRate: Math.floor(0/1160),
        description: "Professional Soccer Cleats Durable synthetic upper with advanced traction sole. Provides excellent grip, control, and comfort on the field for enhanced performance.",
        color: [],
        size: [],
        img: "./images/products/Frame 608 (1).png"
    },
    {
        id: 15,
        name: "GP11 Shooter USB Gamepad", 
        rating: 4.5,
        numberRating: 55,
        stock: 99,
        price: 660,
        discountPrice: 660,
        discountRate: Math.floor(0/660),
        description: "USB Wired Gamepad Controller High-quality buttons and responsive analog sticks. Compatible with PC and gaming consoles for precise control and comfortable gaming experience.",
        color: [],
        size: [],
        img: "./images/products/Frame 608 (2).png"
    },
    {
        id: 16,
        name: "Quilted Satin Jacket", 
        rating: 4.5,
        numberRating: 55,
        stock: 99,
        price: 660,
        discountPrice: 660,
        discountRate: Math.floor(0/660),
        description: "Quilted Satin Jacket Luxurious satin exterior with quilted design and lightweight insulation. Features ribbed cuffs, collar, and hem for stylish warmth and comfort.",
        color: [],
        size: [],
        img: "./images/products/Frame 608 (3).png"
    }
];

function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    products.forEach(product => {
    const productHTML = `
      <div class="sale-product">
                <div class="product-container">
                    <img src="${product.img}" alt="sale item">
                    <div class="sale-percentage">${product.discountRate}%</div>
                    <button class="add-to-cart">Add To Cart</button>
                    <div class="favorite-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>heart-outline</title><path d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" /></svg></div>
                    <div class="seen-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>eye-outline</title><path d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" /></svg></div>
                </div>
                <p class="product-name">${product.name}</p>
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

let allProductView = false;
const viewAllProducts1 = document.querySelector(".view-all-product-button");
viewAllProducts1.addEventListener('click',() =>{
    const allProductsView = document.querySelector("#product-list");
    if(!allProductView) {
        allProductsView.style.display = 'grid';
        allProductsView.style.gridTemplateColumns = 'repeat(4,270px)';
        allProductView = !allProductView;
    } else {
        allProductsView.style.display = 'flex';
        allProductView = !allProductView;
    }   
})