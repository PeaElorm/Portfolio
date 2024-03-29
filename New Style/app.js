// for the toggel button
const toggle = document.getElementById("toggle")
//for the close button
const close = document.getElementById("close")
//for the open button
const open = document.getElementById("open")
//for the modal
const modal = document.getElementById("modal")

//for the toggle navigation
toggle.addEventListener("click", () =>
    document.body.classList.toggle("show-nav")
);

//for the show model
open.addEventListener("click", () => modal.classList.add
    ("show-modal"));

    //for the close button to hide the modal
close.addEventListener("click", () => modal.classList.remove
    ("show-modal"));

    //to close the form by cliking anywhere outside the form
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);