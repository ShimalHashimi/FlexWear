const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.querySelector(".cart-items");

function renderCart() {

    const emptyCart = document.querySelector(".empty-cart");
    const cartAvailable = document.querySelector(".cart-available");

    if (cart.length > 0) {

        emptyCart.style.display = "none";
        cartAvailable.style.display = "grid"; // or "block" depending on your layout

    } else {

        emptyCart.style.display = "flex"; // or "block"
        cartAvailable.style.display = "none";

    }
    
    cartContainer.innerHTML = "";

    cart.forEach((item, index) => {

        cartContainer.innerHTML += `
            <div class="cart-item-card">

                <button class="delete-item" onclick="removeItem(${index})">
                    <i class="fa-solid fa-trash"></i>
                </button>

                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>

                <div class="cart-item-content">

                    <h3>${item.name}</h3>

                    <p>${item.description || ""}</p>

                    <div class="price-section">
                        <span class="actual-price">${item.oldPrice}</span>
                        <span class="current-price">${item.price}</span>
                    </div>

                    <div class="cart-details">
                        <span class="size-badge">Size ${item.size}</span>
                        <span class="qty-badge">Qty ${item.qty}</span>
                    </div>

                </div>

            </div>
        `;
    });

    const totalProducts = cart.reduce((sum, item) => {
        return sum + item.qty;
    }, 0);


    const subTotal = cart.reduce((sum, item) => {

    const price = Number(item.price.replace("$", ""));

    return sum + (price * item.qty);

    }, 0);

    const shipping = 15;
    const discount = subTotal*15/100 ;
    const totalPrice = subTotal + shipping - discount;

    document.getElementById("subtotalPrice").innerText =
        "$" + subTotal.toFixed(2);

    document.getElementById("shippingPrice").innerText =
        "$" + shipping.toFixed(2);

    document.getElementById("discountPrice").innerText =
        "-$" + discount.toFixed(2);

    document.getElementById("totalPrice").innerText =
        "$" + totalPrice.toFixed(2);


}

function removeItem(index){

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    renderCart();
}

renderCart();