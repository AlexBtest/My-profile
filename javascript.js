

const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");


// Initialize Responsive Navbar Menu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");

  if (navbarMenu.classList.contains("active")) {
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
  } else {
    navbarMenu.removeAttribute("style");
  }
});

const linkMenu = document.querySelectorAll(".menu-link");
const linkMenuLength = linkMenu.length;


linkMenu.forEach(element => element.addEventListener("click", (e) => {
  linkMenu.forEach(element => element.classList.remove("active"));
  e.target.classList.add("active");
}));


console.log(linkMenu)
