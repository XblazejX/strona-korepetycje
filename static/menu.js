document.addEventListener("DOMContentLoaded", function () {
  const sidenav = document.getElementById("mySidenav");
  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", function () {
    const isOpen = sidenav.classList.contains("open");

    if (isOpen) {
      sidenav.style.width = "0";
      sidenav.classList.remove("open");
      menuIcon.classList.remove("fa-times");
      menuIcon.classList.add("fa-bars");
    } else {
      sidenav.style.width = "300px";
      sidenav.classList.add("open");
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-times");
    }
  });
});
