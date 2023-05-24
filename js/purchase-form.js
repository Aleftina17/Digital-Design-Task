let buyBtns = document.querySelectorAll(".btn--card");
let closeBtn = document.querySelector(".btn--close");
let overlay = document.querySelector(".overlay");
let form = document.getElementById("purchaseForm");
let imageInput = document.querySelector("#card-img");
let titleInput = document.querySelector("#card-title");
let header = document.querySelector(".header");

//Buy Now (Card) Btns
buyBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let card = this.parentNode.parentNode.parentNode; // получаем родительский элемент кнопки - карточку
    let image = card.querySelector(".card__img img").getAttribute("src"); // получаем путь к изображению
    let title = card.querySelector(".card__info--title").textContent; // получаем название товара

    imageInput.src = image; // обновляем путь к изображению
    titleInput.textContent = title; // обновляем название товара
    overlay.style.display = "block"; // отображаем форму
    header.classList.add("hidden-y");
    document.body.classList.add("no-scroll");
  });
});

//Click on Overlay
overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    clearFormFields();
    hideOverlay();
  }
});

//Close Btn
closeBtn.addEventListener("click", function () {
  clearFormFields();
  hideOverlay();
});

//Number Btns
let minusBtn = document.querySelector(".btn__number-minus");
let plusBtn = document.querySelector(".btn__number-plus");
let quantityInput = document.getElementById("quantityInput");

minusBtn.addEventListener("click", function () {
  quantityInput.stepDown();
  quantityInput.onchange();
});

plusBtn.addEventListener("click", function () {
  quantityInput.stepUp();
  quantityInput.onchange();
});

//Modal
let overlayModal = document.querySelector(".overlay-modal");
let closeBtnModal = document.querySelector(".btn--close--modal");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  overlayModal.style.display = "block";
});

closeBtnModal.addEventListener("click", function () {
  overlayModal.style.display = "none";
  hideOverlay();
  clearFormFields();
});


//Clear Form fields
function clearFormFields() {
  document.getElementById("commentInput").value = "";
  document.getElementById("colorWhite").checked = true;
  document.getElementById("quantityInput").value = "1";
}

//Close form overlay
function hideOverlay() {
  overlay.style.display = "none";
  header.classList.remove("hidden-y");
  document.body.classList.remove("no-scroll");
}

