
// =====================
// BRANDS RENDER
// =====================

const DealBrandContainer = document.getElementById("brandDeals");

if (DealBrandContainer) {
    DealBrandContainer.innerHTML = deals.map(deals => `
        <div class="deal-brands-card" onclick="filterByBrand('${deals.brand}')">
            <img src="${deals.image}" alt="${deals.name}">
            <p><strong>${deals.offer}</strong></p>
            <span>${deals.dealName}</span>
        </div>
    `).join('');
}


//BRANDS SCROLLING

const brandScroller = document.getElementById("brandDeals");

function scrollLeftBrand() {
    brandScroller.scrollBy({
        left: -200,
        behavior: "smooth"
    });
}

function scrollRightBrand() {

    brandScroller.scrollBy({
        left: 200,
        behavior: "smooth"
    });
}

const offerContainer = document.getElementById("offerContainer");


function renderOffers(data) {
    if (!offerContainer) return;
    offerContainer.innerHTML = data.map(offer => `
        <div class="product-card" onclick="openOffer(${offer.id})">

            <div class="product-image">
                <img src="${offer.image}" alt="${offer.name}">
                <span class="offer-badge">${offer.offer}</span>
            </div>
            <div class="product-content">
                <h3>${offer.name}</h3>
                <p>${offer.description}</p>
                <div class="price-section">
                    <span class="actual-price">$${offer.price}</span>
                    <span class="current-price">$${offer.offerPrice}</span>
                </div>
                <div class="sizes">
                    ${offer.sizes.map(size => `<span>${size}</span>`).join("")}
                </div>
                <button class="view-btn">View Product</button>
            </div>
        </div>
    `).join('');
}

// Initial load
renderOffers(offers);


function openOffer(id){
    window.location.href = `product.html?id=${id}`;
}

// =====================
// FILTER BY BRAND
// =====================

window.filterByBrand = function(brands) {
    const filteredOffers = offers.filter(offer =>
        offer.brand.trim() === brands.trim()
    );

    document.getElementById("offerProducts").textContent =
        `Hot Deals from ${brands}`;

    renderOffers(filteredOffers);
};
