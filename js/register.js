const toggleBtn = document.querySelector(".toggle-button");

const navLinks = document.querySelector(".navlinks");
toggleBtn.addEventListener("click", () => {
   navLinks.classList.toggle("active")
})