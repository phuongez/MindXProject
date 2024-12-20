const products = [
    {
        id: 1,
        name: "HAVIT HV-G92 Gamepad",
        category: "Gaming", 
        rating: 5,
        numberRating: 88,
        stock: 99,
        price: 160,
        discountPrice: 120,
        discountRate: 40/160*100,
        description: "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
        color: ["grey", "red"],
        size: [],
        sell: 100,
        img: "./images/products/image 63.png",
        img2: "./images/products/image 57.png",
        img3: "./images/products/image 58.png",
        img4: "./images/products/image 59.png",
        img5: "./images/products/image 61.png"
    },
    {
        id: 2,
        name: "AK-900 Wired Keyboard",
        category: "Gaming", 
        rating: 4.5,
        numberRating: 75,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: Math.floor(20000/1160),
        description: "LED Backlit Gaming Keyboard High-quality mechanical switches with customizable RGB lighting. Durable design with anti-ghosting keys for precise control & comfortable typing experience.",
        color: [],
        size: [],
        sell: 80,
        img: "./images/products/Frame 612 copy.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 3,
        name: "IPS LCD Gaming Monitor",
        category: "Gaming", 
        rating: 5,
        numberRating: 99,
        stock: 99,
        price: 400,
        discountPrice: 370,
        discountRate: 30/400*100,
        description: "Ultra-Wide Gaming Monitor High-resolution display with ultra-wide aspect ratio. Features rapid refresh rate and adaptive sync technology for smooth, immersive gameplay without motion blur.",
        color: [],
        size: [],
        sell: 50,
        img: "./images/products/Frame 613.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 4,
        name: "S-Series Comfort Chair",
        category: "Homing", 
        rating: 4.5,
        numberRating: 99,
        stock: 99,
        price: 400,
        discountPrice: 375,
        discountRate: Math.floor(2500/400),
        description: "Ergonomic Comfort Chair Premium quality materials with adjustable lumbar support and recline features. Provides maximum comfort for long hours of sitting with breathable mesh fabric.",
        color: [],
        size: [],
        sell: 90,
        img: "./images/products/Frame 614.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 5,
        name: "The North Coat",
        category: "Fashion", 
        rating: 5,
        numberRating: 65,
        stock: 99,
        price: 360,
        discountPrice: 260,
        discountRate: Math.floor(10000/360),
        description: "Winter North Coat High-quality insulation with water-resistant exterior. Features multiple pockets, adjustable hood, and thermal lining for ultimate warmth & protection in cold climates.",
        color: [],
        size: [],
        sell: 50,
        img: "./images/products/Frame 605.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 6,
        name: "Gucci Duffle Bag",
        category: "Fashion", 
        rating: 4.5,
        numberRating: 65,
        stock: 99,
        price: 1160,
        discountPrice: 960,
        discountRate: Math.floor(20000/1160),
        description: "Durable Duffle Bag High-quality fabric with reinforced stitching for heavy-duty use. Spacious compartments and multiple pockets for organized storage & easy access to essentials.",
        color: [],
        size: [],
        sell: 25,
        img: "./images/products/Frame 606.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 7,
        name: "RGB liquid CPU Cooler",
        category: "Gaming", 
        rating: 4.5,
        numberRating: 65,
        stock: 99,
        price: 170,
        discountPrice: 160,
        discountRate: Math.floor(1000/170),
        description: "High-Performance CPU Cooler Efficient thermal design with multiple heat pipes and high airflow fan. Ensures optimal cooling & quiet operation for high-performance computing.",
        color: [],
        size: [],
        sell: 40,
        img: "./images/products/Frame 610.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 8,
        name: "Small BookSelf",
        category: "Homing", 
        rating: 5,
        numberRating: 65,
        stock: 99,
        price: 360,
        discountPrice: 360,
        discountRate: Math.floor(0/360),
        description: "Compact Small Bookshelf Sturdy wood construction with adjustable shelves. Perfect for organizing books, decor, and small items in limited spaces. Sleek design fits any room decor.",
        color: [],
        size: [],
        sell: 10,
        img: "./images/products/Frame 612.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 9,
        name: "Breed Dry Dog Food",
        category: "Groceries", 
        rating: 3,
        numberRating: 35,
        stock: 99,
        price: 100,
        discountPrice: 100,
        discountRate: Math.floor(0/100),
        description: "Premium Dog Food High-quality ingredients with balanced nutrition for dogs of all sizes. Rich in essential vitamins and minerals to support overall health & vitality.",
        color: [],
        size: [],
        sell: 80,
        img: "./images/products/Frame 604.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 10,
        name: "CANON EOS DSLR Camera",
        category: "Camera", 
        rating: 4,
        numberRating: 95,
        stock: 99,
        price: 360,
        discountPrice: 360,
        discountRate: Math.floor(0/360),
        description: "Canon DSLR Camera High-resolution sensor with advanced image processing for stunning photos and videos. Features fast autofocus and a versatile lens for creative photography.",
        color: [],
        size: [],
        sell: 18,
        img: "./images/products/Frame 604 (1).png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 11,
        name: "ASUS FHD Gaming Laptop",
        category: "Gaming", 
        rating: 5,
        numberRating: 325,
        stock: 99,
        price: 700,
        discountPrice: 700,
        discountRate: Math.floor(0/700),
        description: "High-Performance Gaming Laptop Powerful processor with advanced graphics card and high-refresh-rate display. Designed for immersive gaming and multitasking with customizable RGB keyboard.",
        color: [],
        size: [],
        sell: 60,
        img: "./images/products/Frame 604 (2).png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 12,
        name: "Curology Product Set",
        category: "Health", 
        rating: 4.5,
        numberRating: 145,
        stock: 99,
        price: 500,
        discountPrice: 500,
        discountRate: Math.floor(0/500),
        description: "Curology Skincare Set Personalized skincare regimen with high-quality ingredients. Includes cleanser, custom formula, and moisturizer to address specific skin concerns & improve complexion.",
        color: [],
        size: [],
        sell: 30,
        img: "./images/products/Frame 604 (3).png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 13,
        name: "Kids Electric Car",
        category: "Baby", 
        rating: 5,
        numberRating: 65,
        stock: 99,
        price: 960,
        discountPrice: 960,
        discountRate: Math.floor(0/960),
        description: "Electric Ride-On Car for Kids High-quality materials with realistic design and safety features. Features rechargeable battery, working lights, and sounds for hours of fun driving.",
        color: [],
        size: [],
        sell: 10,
        img: "./images/products/Frame 608.png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 14,
        name: "Jr. Zoom Soccer Cleats",
        category: "Sport", 
        rating: 5,
        numberRating: 35,
        stock: 99,
        price: 1160,
        discountPrice: 1160,
        discountRate: Math.floor(0/1160),
        description: "Professional Soccer Cleats Durable synthetic upper with advanced traction sole. Provides excellent grip, control, and comfort on the field for enhanced performance.",
        color: [],
        size: [],
        sell: 10,
        img: "./images/products/Frame 608 (1).png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 15,
        name: "GP11 Shooter USB Gamepad",
        category: "Gaming", 
        rating: 4.5,
        numberRating: 55,
        stock: 99,
        price: 660,
        discountPrice: 660,
        discountRate: Math.floor(0/660),
        description: "USB Wired Gamepad Controller High-quality buttons and responsive analog sticks. Compatible with PC and gaming consoles for precise control and comfortable gaming experience.",
        color: [],
        size: [],
        sell: 50,
        img: "./images/products/Frame 608 (2).png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    },
    {
        id: 16,
        name: "Quilted Satin Jacket",
        category: "Fashion", 
        rating: 4.5,
        numberRating: 55,
        stock: 99,
        price: 660,
        discountPrice: 660,
        discountRate: Math.floor(0/660),
        description: "Quilted Satin Jacket Luxurious satin exterior with quilted design and lightweight insulation. Features ribbed cuffs, collar, and hem for stylish warmth and comfort.",
        color: [],
        size: [],
        sell: 10,
        img: "./images/products/Frame 608 (3).png",
        img2: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img3: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img4: "./images/products/landscape-placeholder-svgrepo-com.svg",
        img5: "./images/products/landscape-placeholder-svgrepo-com.svg"
    }
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(products));
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

  function displaySale(product) {
    let saleHTML = "";
    if(product.discountRate > 0) {
        saleHTML = `<div class="sale-percentage">${product.discountRate}%</div>`;
    }
    return saleHTML; 
  }

  function displayProductPrice(product) {
    let priceHTML ="";
    if (!(product.discountPrice == product.price)) {
        priceHTML = `
        <p class="sale-price">$${product.discountPrice}</p>
        <p class="original-price">$${product.price}</p>
        `
    } else {
        priceHTML =
        `
        <p class="sale-price">$${product.discountPrice}</p>
        `
    }
    return priceHTML;
  }

export default products;
export {renderStars,displaySale,displayProductPrice}