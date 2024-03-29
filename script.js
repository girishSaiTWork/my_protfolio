function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openGoogleDrive() {
  window.open('https://drive.google.com/file/d/1DY9AxVmX7doJAXrcPqqL7Y97U124w9tf/view?usp=drive_link');
}
