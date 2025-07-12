document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown) return;
  const menu = dropdown.querySelector(".dropdown-menu");
  const link = dropdown.querySelector("a");

  menu.style.display = "none";

  link.addEventListener("click", function (e) {
    e.preventDefault();
    menu.style.display = menu.style.display === "block" ? "none" : "block";
  });

  document.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target)) {
      menu.style.display = "none";
    }
  });
});
