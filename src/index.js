import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector("#open");
  const modal = document.querySelector("[data-modal]");

  openBtn.addEventListener("click", () => {
    modal.showModal();
  });

  modal.addEventListener("click", (e) => {
    const dialogDimentions = modal.getBoundingClientRect();

    if (
      e.clientX < dialogDimentions.left ||
      e.clientX > dialogDimentions.right ||
      e.clientY < dialogDimentions.top ||
      e.clientY > dialogDimentions.bottom
    ) {
      modal.close();
    }
  });
});
