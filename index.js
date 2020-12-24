"use strict";

require("./form-sound-icon.js");

window.addEventListener("load", () => {
  let container = document.querySelector(".container");
  let formSoundIcon = document.createElement("form-sound-icon");
  formSoundIcon.style.justifySelf = "center";
  container.appendChild(formSoundIcon);
});
