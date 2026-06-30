const offers = [
    {
        id: 11,
        name: "New York Hoodie",
        category: "Hoodie",
        gender: "Men",
        price: 110,
        offerPrice: 66,
        offer: "40% OFF",
        image: "images/Offer/h&m-hoodie.jfif",
        description: "Premium & soft Hoodie designed for comfortable and modern stylish look.",
        about: "Designed with premium fabrics and precise tailoring, this formal coat suit delivers exceptional comfort and elegance. Perfect for business meetings, weddings, and formal occasions, it offers a sophisticated appearance while ensuring all-day confidence and style.",
        sizes: ["S", "M", "L", "XL"],
        brand: "H&M"
    },

    {
        id: 12,
        name: "Boost Running Shoes",
        category: "Shoes",
        gender: "Unisex",
        price: 120,
        offerPrice: 108,
        offer: "10% OFF",
        image: "images/Offer/running-shoes.jpg",
        description: "High-performance running shoes with responsive cushioning.",
        about: "Engineered for athletes and everyday runners, these shoes provide superior comfort, lightweight support, and excellent energy return. Their modern design makes them suitable for both training sessions and casual wear.",
        sizes: ["7", "8", "9", "10", "11"],
        brand: "Adidas"
    },

    {
        id: 13,
        name: "Relaxed T-Shirt",
        category: "Hoodies",
        gender: "Unisex",
        price: 75,
        offerPrice: 45,
        offer: "40% OFF",
        image: "images/Offer/h&m-tshirt.avif",
        description: "Soft cotton T-Shirt crafted for everyday comfort.",
        about: "Made from breathable cotton fabric, this relaxed fit hoodie provides warmth and style for casual outings. Its minimalist design pairs easily with jeans, joggers, or shorts.",
        sizes: ["S", "M", "L", "XL"],
        brand: "H&M"
    },

    {
        id: 14,
        name: "GG Marmont Handbag",
        category: "Bags",
        gender: "Women",
        price: 200,
        offerPrice: 80,
        offer: "60% OFF",
        image: "images/Offer/gucci-bag.webp",
        description: "Elegant designer handbag with iconic Gucci styling.",
        about: "Crafted from premium leather with signature detailing, this handbag combines luxury and practicality. It is ideal for elevating both formal and casual outfits with timeless sophistication.",
        sizes: ["Free Size"],
        brand: "GUCCI"
    },

    {
        id: 15,
        name: "Max Lifestyle Sneakers",
        category: "Shoes",
        gender: "Unisex",
        price: 160,
        offerPrice: 80,
        offer: "50% OFF",
        image: "images/Offer/nike-airmax.webp",
        description: "Stylish sneakers offering exceptional comfort and support.",
        about: "Featuring Nike Air cushioning technology, these sneakers deliver a smooth walking experience while maintaining a trendy streetwear appearance suitable for everyday activities.",
        sizes: ["7", "8", "9", "10", "11"],
        brand: "Nike"
    },

    {
        id: 16,
        name: "Floral Summer Dress",
        category: "Dresses",
        gender: "Women",
        price: 90,
        offerPrice: 85,
        offer: "Buy 1 Get 1",
        image: "images/Offer/zara-dress.jpg",
        description: "Lightweight floral dress designed for summer occasions.",
        about: "This elegant Zara dress features breathable fabric and a flattering silhouette. It is perfect for vacations, brunch dates, and outdoor gatherings during warmer seasons.",
        sizes: ["S", "M", "L", "XL"],
        brand: "Zara"
    },

    {
        id: 17,
        name: "Essentials Track Jacket",
        category: "Jackets",
        gender: "Men",
        price: 95,
        offerPrice: 62,
        offer: "35% OFF",
        image: "images/Offer/puma-jacket.jpg",
        description: "Sport-inspired jacket combining functionality with style.",
        about: "Designed for active lifestyles, this lightweight track jacket offers flexibility and comfort. Its modern fit makes it suitable for workouts and casual streetwear.",
        sizes: ["S", "M", "L", "XL"],
        brand: "Puma"
    },

    {
        id: 18,
        name: "Monogram Wallet",
        category: "Accessories",
        gender: "Men",
        price: 650,
        offerPrice: 488,
        offer: "25% OFF",
        image: "images/Offer/lv-wallet.webp",
        description: "Luxury wallet featuring classic Louis Vuitton craftsmanship.",
        about: "Made from premium materials with iconic monogram styling, this wallet provides practical organization while delivering a sophisticated and timeless luxury appeal.",
        sizes: ["Free Size"],
        brand: "Louis Vuitton"
    },

    {
        id: 19,
        name: "Modern Jeans",
        category: "Jeans",
        gender: "Men",
        price: 110,
        offerPrice: 77,
        offer: "30% OFF",
        image: "images/Offer/ck-jeans.webp",
        description: "Premium slim fit jeans offering everyday versatility.",
        about: "Designed with stretch denim fabric, these jeans provide lasting comfort and a contemporary silhouette suitable for both casual and smart-casual occasions.",
        sizes: ["30", "32", "34", "36"],
        brand: "Calvin Klein"
    },

    {
        id: 20,
        name: "Classic Polo Shirt",
        category: "T-Shirts",
        gender: "Men",
        price: 85,
        offerPrice: 47,
        offer: "45% OFF",
        image: "images/Offer/tommy-polo.webp",
        description: "Signature polo shirt with timeless Tommy Hilfiger style.",
        about: "Crafted from soft cotton fabric, this polo shirt offers comfort and sophistication. Its classic design makes it an essential piece for everyday wardrobes.",
        sizes: ["S", "M", "L", "XL"],
        brand: "H&M"
    },
    {
        id: 21,
        name: "Essentials Hoodie",
        category: "Hoodies",
        gender: "Unisex",
        price: 90,
        offerPrice: 54,
        offer: "40% OFF",
        image: "images/Offer/adidas-hoodie.webp",
        description: "Comfortable everyday hoodie with iconic Adidas styling.",
        about: "Made from soft fleece fabric, this hoodie offers warmth and comfort for daily wear. Its sporty design and relaxed fit make it perfect for workouts, travel, and casual outings.",
        sizes: ["S", "M", "L", "XL"],
        brand: "Adidas"
    },

    {
        id: 22,
        name: "H&M Oversized T-Shirt",
        category: "T-Shirts",
        gender: "Men",
        price: 35,
        offerPrice: 21,
        offer: "40% OFF",
        image: "images/Offer/hm-tshirt2.avif",
        description: "Trendy oversized t-shirt designed for everyday comfort.",
        about: "Crafted from breathable cotton fabric, this oversized t-shirt provides a relaxed fit and modern streetwear appeal, making it a versatile wardrobe essential.",
        sizes: ["S", "M", "L", "XL"],
        brand: "H&M"
    },

    {
        id: 23,
        name: "Gucci Sneakers",
        category: "Shoes",
        gender: "Unisex",
        price: 850,
        offerPrice: 510,
        offer: "40% OFF",
        image: "images/Offer/gucci-sneakers.jfif",
        description: "Luxury sneakers featuring signature Gucci detailing.",
        about: "These premium leather sneakers combine comfort with timeless luxury design. Perfect for elevating casual outfits while maintaining all-day wearability.",
        sizes: ["7", "8", "9", "10"],
        brand: "GUCCI"
    },

    {
        id: 24,
        name: "Nike Dri-FIT Shorts",
        category: "Shorts",
        gender: "Men",
        price: 60,
        offerPrice: 30,
        offer: "50% OFF",
        image: "images/Offer/nike-shorts.jpg",
        description: "Lightweight training shorts designed for active lifestyles.",
        about: "Built with moisture-wicking technology, these shorts keep you cool and comfortable during workouts, running sessions, and outdoor activities.",
        sizes: ["S", "M", "L", "XL"],
        brand: "Nike"
    },

    {
        id: 25,
        name: "Zara Structured Blazer",
        category: "Blazers",
        gender: "Women",
        price: 120,
        offerPrice: 60,
        offer: "Buy 1 Get 1",
        image: "images/Offer/zara-blazer.jfif",
        description: "Elegant blazer designed for professional and formal looks.",
        about: "Featuring a tailored silhouette and premium construction, this blazer effortlessly enhances both office attire and evening outfits.",
        sizes: ["S", "M", "L", "XL"],
        brand: "Zara"
    }
];