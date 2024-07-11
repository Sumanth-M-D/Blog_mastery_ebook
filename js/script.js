// Add custom JavaScript here
function userScroll() {
  const navbar = document.body.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 60) {
      navbar.classList.add("nav-bg-dark");
    } else {
      navbar.classList.remove("nav-bg-dark");
    }
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
