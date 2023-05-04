import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector("#open");
  const modal = document.querySelector("[data-modal]");

  openBtn.addEventListener("click", () => {
    modal.showModal();
  });
});
