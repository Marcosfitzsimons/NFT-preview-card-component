let imgContainer = document.querySelector(".img-container");
let iconView = document.querySelector(".icon-view");
let hoverColorEffect = document.querySelector(".cyan-color");

imgContainer.addEventListener("mouseover", showIcon);
imgContainer.addEventListener("mouseout", removeIcon);

function showIcon() {
  iconView.classList.remove("hidden");
  hoverColorEffect.classList.remove("hidden");
}
function removeIcon() {
  iconView.classList.add("hidden");
  hoverColorEffect.classList.add("hidden");
}
