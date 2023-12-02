const filterMenu = document.querySelector(".mobile_filters");

const filterMenuOpenButton = document.querySelector(".open_mobile_filters");
const filterMenuCloseButton = document.querySelector(
  ".mobile_filters__close_button"
);

filterMenuOpenButton.onclick = () => {
  filterMenu.classList.add("mobile_filters--visible");
  document.body.style.overflow = "hidden";
};
filterMenuCloseButton.onclick = () => {
  filterMenu.classList.remove("mobile_filters--visible");
  document.body.style.overflow = "initial";

};
