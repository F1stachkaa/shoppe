const mobileMenu = document.querySelector(".mobile_menu");

const mobileMenuOpenButton = document.querySelector("#openMobileMenu");
const mobileMenuCloseButton = document.querySelector("#closeMobileMenu");

mobileMenuOpenButton.onclick = () => {
  mobileMenu.classList.remove("mobile_menu--hidden");
};
mobileMenuCloseButton.onclick = () => {
  mobileMenu.classList.add("mobile_menu--hidden");
};
