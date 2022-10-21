const button = document.querySelector("#button");

button.addEventListener("click", () => {
  const background = document.querySelector("#background");

  if (background.classList.contains("color-1")) {
    background.classList.add("color-2");
    background.classList.remove("color-1");
  } else if (background.classList.contains("color-2")) {
    background.classList.remove("color-2");
  } else {
    background.classList.add("color-1");
  }
});
