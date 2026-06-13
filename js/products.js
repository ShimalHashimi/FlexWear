
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

document.querySelectorAll(".size-item").forEach(item => {
    item.addEventListener("click", () => {

        document.querySelectorAll(".size-item").forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");
    });
});

