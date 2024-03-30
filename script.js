function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openGoogleDrive() {
  window.open('https://drive.google.com/file/d/1fMD9YDZIEHV3BO4aAvtKn__dUoc6et9E/view?usp=sharing');
}
