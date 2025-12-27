// Typing animation for role
const roles = ["Frontend Developer", "Designer", "Full Stack Developer"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  currentRole = roles[i];
  if (isDeleting) {
    document.getElementById("role").textContent = currentRole.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 100);
    }
  } else {
    document.getElementById("role").textContent = currentRole.substring(0, j++);
    if (j > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else {
      setTimeout(type, 150);
    }
  }
}
document.addEventListener("DOMContentLoaded", type);
