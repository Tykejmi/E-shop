const MODAL_SHOW_BTN = document.querySelector("[modal-show-btn]");
const MODAL_CLOSE_BTN = document.querySelector("[close-modal-btn]");
const MODAL = document.querySelector("[modal]");
const MODAL_BODY = document.querySelector("[modal-body]");

const CART_MODAL = document.querySelector("[cart-modal]");
const CART_MODAL_BODY = document.querySelector("[cart-modal-body]");
const CART_MODAL_SHOW_BTN = document.querySelector("[cart-modal-show-btn]");
const CART_MODAL_CLOSE_BTN = document.querySelectorAll("[cart-modal-btn]");

const DROPDOWN_BTN = document.querySelector("[dropdown-btn]");
const DROPDOWN_MENU = document.querySelector("[dropdown-menu]");
const TRIANGLE = document.querySelector("[triangle]");

const BODY = document.querySelector("body");

MODAL_SHOW_BTN.addEventListener("click", () => {
  MODAL_BODY.classList.add("modal-body-show");
  MODAL.classList.add("modal-show");
  BODY.style.overflowY = "hidden";
});

MODAL_CLOSE_BTN.addEventListener("click", modalremove);

MODAL.addEventListener("click", (e) => {
  if (e.target == MODAL && e.target != MODAL_BODY) {
    modalremove();
  }
});

function modalremove() {
  MODAL.classList.remove("modal-show");
  MODAL_BODY.classList.remove("modal-body-show");
  BODY.style.overflowY = "visible";
}
///// 

CART_MODAL_SHOW_BTN.addEventListener("click", () => {
  CART_MODAL.classList.add("cart-modal-show");
  CART_MODAL_BODY.classList.add("cart-modal-body-show");
  BODY.style.overflowY = "hidden";
});


CART_MODAL_CLOSE_BTN.forEach((btn) => {
  btn.addEventListener("click", cartModalremove);
});

CART_MODAL.addEventListener("click", (e) => {
  if (e.target == CART_MODAL && e.target != CART_MODAL_BODY) {
    cartModalremove();
  }
});

function cartModalremove() {
  CART_MODAL.classList.remove("cart-modal-show");
  CART_MODAL_BODY.classList.remove("cart-modal-body-show");
  BODY.style.overflowY = "visible";
}

///////
DROPDOWN_BTN.addEventListener("click", () => {
  DROPDOWN_MENU.classList.toggle("dropdown-menu-show");
  TRIANGLE.classList.toggle("triangle-active");
});
