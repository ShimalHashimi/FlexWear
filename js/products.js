
const id = new URLSearchParams(window.location.search).get("id");


const product = products.find(p => p.id == id);

if (product) {

  document.getElementById("productImage").src = product.image;
  document.getElementById("productTitle").innerText = product.name;
  document.getElementById("productDesc").innerText = product.about;
  document.getElementById("oldPrice").innerText = "$" + product.price;
  document.getElementById("newPrice").innerText = "$" + product.offerPrice;

  const sizeContainer = document.getElementById("sizeContainer");

  product.sizes.forEach(size => {
    sizeContainer.innerHTML += `<span class="size-item">${size}</span>`;
  });
}
if (!product){
    if (!product) {

      const offerProduct = offers.find(p => p.id == id);

      if (offerProduct) {

          document.getElementById("productImage").src = offerProduct.image;
          document.getElementById("productTitle").innerText = offerProduct.name;
          document.getElementById("productDesc").innerText = offerProduct.about;
          document.getElementById("oldPrice").innerText = "$" + offerProduct.price;
          document.getElementById("newPrice").innerText = "$" + offerProduct.offerPrice;

          const sizeContainer = document.getElementById("sizeContainer");

          offerProduct.sizes.forEach(size => {
              sizeContainer.innerHTML += `<span class="size-item">${size}</span>`;
          });

      }
  }
}

let isSizeSelected = false;
let selectedSize = "";

document.querySelectorAll(".size-item").forEach(item => {
    item.addEventListener("click", () => {

        document.querySelectorAll(".size-item").forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");

        isSizeSelected = true;

        selectedSize = item.textContent.trim();
    });
});


// ADD TO CART

function btnAdd(){
  if(isSizeSelected){
       const cart = JSON.parse(localStorage.getItem("cart")) || [];

        cart.push({
            productId: Number(id),
            name: document.getElementById("productTitle").innerText,
            desc: document.getElementById("productDesc").innerText,
            oldPrice: document.getElementById("oldPrice").innerText,
            price: document.getElementById("newPrice").innerText,
            image: document.getElementById("productImage").src,
            size: selectedSize,
            qty: 1
        });

        localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Product Added To Cart", "success");

    window.location.href = "cart.html";

  }else{
    showToast("Size should be selected", "error");
  }
}


function showToast(message, type = "error") {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.className = "";

    toast.classList.add("show", type);

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}
