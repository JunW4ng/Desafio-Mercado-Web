const cartProducts = new Set();

const addCart = (id) => {
  cartProducts.add(id);
};

//? Modal
const cart = document.querySelector("#cartIcon");
cart.addEventListener("click", () => {
  const modal = document.querySelector(".modal-body");
  modal.innerHTML = "";
  cartProducts.forEach((producto) => {
    modal.innerHTML += `<img src="/img/${producto}.png" class="card-img-top" alt="${producto}"/>`;
  });
  console.log(cartProducts); //! BORRAR
});
