
// Initialize Responsive Navbar Menu
const burgerMenu = document.getElementById("burger");
const navbarMenu = document.getElementById("menu");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");

  if (navbarMenu.classList.contains("active")) {
    navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
  } else {
    navbarMenu.removeAttribute("style");
  }
});

// Menu Active
const linkMenu = document.querySelectorAll(".menu-link");
const linkMenuLength = linkMenu.length;

linkMenu.forEach(element => element.addEventListener("click", (e) => {
  linkMenu.forEach(element => element.classList.remove("active"));
    e.target.classList.add("active");
    burgerMenu.classList.remove('active');
    navbarMenu.classList.remove('active');
    navbarMenu.removeAttribute("style");
}));

// // Add animation
// const observer = new IntersectionObserver(entries => {
//   // Loop over the entries
//   entries.forEach(entry => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add('appear');
//     }
//   });
// });

// eachEvents = document.querySelectorAll('.each-event');
// eachEvents.forEach(eachEvent => observer.observe(eachEvent));


