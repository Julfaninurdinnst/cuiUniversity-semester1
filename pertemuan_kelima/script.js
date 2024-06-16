// Mendapatkan elemen-elemen yang diperlukan
const elements = {
  root: document.getElementById("root"),
  userNameInput: document.getElementById("username"),
  userPassword: document.getElementById("password"),
  tombolLogin: document.getElementById("tombolLogin"),
  tombolLogout: document.getElementById("tombolLogout"),
  admin: document.getElementById("adminView"),
  user: document.getElementById("userView"),
  navbar: document.getElementById("navbar"),
  registerLink: document.getElementById("registerLink"),
  userfullname: document.getElementById("fullname"),
  userEmail: document.getElementById("email"),
  textIklan: document.getElementById("text-p"),
};

// Menyembunyikan elemen-elemen tertentu pada awal
const hideElements = () => {
  elements.admin.style.display = "none";
  elements.user.style.display = "none";
  elements.userfullname.style.display = "none";
  elements.userEmail.style.display = "none";
  elements.tombolLogout.style.display = "none";
};

// Fungsi untuk login
const onLogin = () => {
  localStorage.setItem("username", elements.userNameInput.value);
  elements.tombolLogout.style.display = "initial";
  if (
    elements.userNameInput.value == "admin" &&
    elements.userPassword.value == "admin"
  ) {
    localStorage.setItem("role", "admin");
    elements.user.style.display = "none";
    elements.admin.style.display = "block";
  } else {
    localStorage.setItem("role", "user");
    elements.admin.style.display = "none";
    elements.user.style.display = "block";
  }
  elements.userNameInput.style.display = "none";
  elements.userPassword.style.display = "none";
  elements.tombolLogin.style.display = "none";
  elements.textIklan.style.display = "none";
  elements.registerLink.style.display = "none";
  elements.navbar.textContent = "navbar";
};

// Fungsi untuk logout
const onLogout = () => {
  localStorage.clear();
  location.reload();
};

// Fungsi untuk form registrasi
const registerForm = () => {
  elements.navbar.textContent = "register";
  elements.tombolLogin.textContent = "register";
  elements.textIklan.textContent = "anda sudah punya akun?";
  elements.registerLink.textContent = "login";
  elements.userfullname.style.display = "initial";
  elements.userEmail.style.display = "initial";
  elements.registerLink.addEventListener("click", function (e) {
    location.reload();
  });
  elements.tombolLogin.addEventListener("click", function (e) {
    let fullname = elements.userfullname.value;
    let email = elements.userEmail.value;
    let name = elements.userNameInput.value;
    if (
      confirm(
        "tolong di periksa data anda kembali. username : " +
          name +
          " fullname : " +
          fullname +
          " email : " +
          email
      ) == true
    ) {
      localStorage.setItem("username", elements.userNameInput.value);
      elements.tombolLogout.style.display = "initial";
      localStorage.setItem("role", "user");
      elements.admin.style.display = "none";
      elements.user.style.display = "block";
      elements.userNameInput.style.display = "none";
      elements.userPassword.style.display = "none";
      elements.tombolLogin.style.display = "none";
      elements.navbar.textContent = "navbar";
      elements.userNameInput.style.display = "none";
      elements.userPassword.style.display = "none";
      elements.tombolLogin.style.display = "none";
      elements.textIklan.style.display = "none";
      elements.registerLink.style.display = "none";
    } else {
      return registerForm();
    }
  });
};

// Memanggil fungsi untuk menyembunyikan elemen
hideElements();

// Memeriksa apakah pengguna sudah login
if (localStorage.getItem("username")) {
  onLogin();
}
