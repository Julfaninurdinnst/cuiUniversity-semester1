const nama = "nurdin";
let usia = 60;
// memakai konsep +
console.log(
  "nama saya " + nama + " dan usia saya " + usia + " pake metode plus"
);
// memakai konsep dolar
console.log(
  `nama saya ${nama} dan sekarang usia saya ${usia} memakai konsep dolar`
);
// memakai konsep koma
console.log("nama saya ", nama, "dan umur saya", usia, "memakai konsep koma");
// memakai konsep function
function cetakNama(name, usia) {
  return console.log(
    "nama saya ",
    name,
    "dan umur saya",
    usia,
    "memakai konsep function"
  );
}
cetakNama("nas", 24);

// penerapan argement dan perbandingan

function tebakGenerasi(usia) {
  if (usia > 10 && usia < 18) {
    return console.log("anda sudah remaja");
  } else if (usia > 18 && usia < 30) {
    return console.log("anda sudah dewasa");
  } else if (usia > 30) {
    return console.log("cucu dah berapa bos, :V");
  } else if (usia > 2 && usia < 10) {
    return console.log("anda masih anak anak");
  } else {
    return console.log("anda masih bayi");
  }
}
tebakGenerasi(15);

biodata = document.getElementById("biodata");
biodata.innerHTML = tebakGenerasi(15);
