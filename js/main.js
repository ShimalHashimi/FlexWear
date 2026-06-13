//CATEGORIES SCROLLING

const container = document.getElementById("categoryGrid");

function scrollLeft1() {
    container.scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function scrollRight1() {

    container.scrollBy({
        left: 200,
        behavior: "smooth"
    });
}

//BRANDS SCROLLING

const brandContainer = document.getElementById("brandGrid");

function scrollLeftBrand() {
    brandContainer.scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function scrollRightBrand() {

    brandContainer.scrollBy({
        left: 200,
        behavior: "smooth"
    });
}


// =====================
// GET PRODUCTS (POPULAR)
// =====================

const popularContainer = document.getElementById("popularContainer");

function renderProducts(data) {

    if (!popularContainer) return;

    popularContainer.innerHTML = data.map(product => `
        <div class="product-card" onclick="openProduct(${product.id})">

            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <span class="offer-badge">${product.offer}</span>
            </div>

            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>

                <div class="price-section">
                    <span class="actual-price">$${product.price}</span>
                    <span class="current-price">$${product.offerPrice}</span>
                </div>

                <div class="sizes">
                    ${product.sizes.map(size => `<span>${size}</span>`).join("")}
                </div>

                <button class="view-btn">View Product</button>
            </div>

        </div>
    `).join('');
}


// Initial load
renderProducts(products);


// =====================
// OPEN PRODUCT PAGE
// =====================

function openProduct(id){
    window.location.href = `product.html?id=${id}`;
}


// =====================
// CATEGORY RENDER
// =====================

const categoryContainer = document.getElementById("categoryGrid");

if (categoryContainer) {
    categoryContainer.innerHTML = categories.map(category => `
        <div class="category-card" onclick="filterByCategory('${category.name}')">
            <img src="${category.image}" alt="${category.name}">
            <h3>${category.name}</h3>
        </div>
    `).join('');
}


// =====================
// FILTER BY CATEGORY
// =====================

window.filterByCategory = function(categoryName) {

    const filteredProducts = products.filter(product =>
        product.category.trim() === categoryName.trim()
    );

    document.getElementById("indexProduct").textContent =
        `${categoryName}`;

    renderProducts(filteredProducts);
};

