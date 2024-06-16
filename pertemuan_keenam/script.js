let body = document.body;
const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft = darkLimit;
let infoPromt = document.getElementById("info");
let mode = document.getElementById("mode");
let home = document.getElementById("home");
function darkMode() {
  if (darkRemainingLeft == 1) {
    infoPromt.textContent = "jatah fitur darkmode anda sudah habis";
    mode.style.display = "none";
    home.textContent = "restart";
    return;
  }
  darkCounter++;
  darkRemainingLeft = darkLimit - darkCounter;
  infoPromt.textContent = `darkmode dipakai ${darkCounter} tersisa ${darkRemainingLeft}`;
  body.classList.toggle("dark");
}
function reRender() {
  location.reload();
}
