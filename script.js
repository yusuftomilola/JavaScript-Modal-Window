"use strict";

const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

function closeModals() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < showModal.length; i++) {
  console.log(showModal[i]);
  showModal[i].addEventListener("click", openModal);
}

closeModal.addEventListener("click", closeModals);

overlay.addEventListener("click", closeModals);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModals();
  }
});

// for (let eachModal of showModal) {
//   console.log(eachModal);
//   eachModal.addEventListener("click", () => {
//     alert("clicked");
//   });
// }

// let i = 0;
// while (i < showModal.length) {
//   console.log(showModal[i]);
//   showModal[i].addEventListener("click", () => {
//     alert("clicked");
//   });
//   i++;
// }

// showModal.forEach((eachModal) => {
//   console.log(eachModal);
//   eachModal.addEventListener("click", () => {
//     alert("clicked");
//   });
// });
