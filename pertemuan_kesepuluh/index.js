const myName = "nurdin";
let age = 24;
let i = 0;
console.log(
  `dari console log => nama saya adalah ${myName} dan usia saya ${age}`
);
//ini merupakan pembuatan function secara tradisional
function getFunctionStandar(age, job) {
  //age disini berfungsi sebagai parameter bukan variabel lagi
  i++;
  if (i >= 10) {
    console.log("limit pemanggilan function anda telah habis");
    return;
  }
  console.log(
    `dari function tradisional getDetail => nama saya ${myName} dan usia saya ${age} dan sekarang saya berkerja sebagai freelancer di ${job}`
  );
  console.log(`function telah dipanggil sebanyak ${i} kali`);
}

//ini merupakan pembuatan function dengan memakai arrow function

const getArrowFunction = (age, job) => {
  i++;
  i > 10
    ? console.log("limit pemanggilan function anda telah habis")
    : console.log(
        `dari arrow function getDetail => nama saya ${myName} dan usia saya ${age} dan sekarang saya berkerja sebagai freelancer di ${job}`
      );
};

const datas = [
  {
    name: "nurdin",
    age: 24,
    status: "freelancer",
    mySkill: [" php", "javacript", "html", "css"],
  },
  {
    name: "dimas",
    age: 20,
    status: "mahasiswa",
    mySkill: [" php", "html", "css"],
  },
  {
    name: "rudi",
    age: 21,
    status: "freelancer",
    mySkill: ["javacript", "html", "css"],
  },
];
const showObjectDatas = () => {
  datas.map(function (result, i) {
    console.table(result);
    console.info("hasil tabel diatas berasal dari method mapping");
  });

  datas.forEach((result) => {
    console.table(result);
    console.log("hasil tabel diatas berasal dari method foreach");
  });
};

//oop pada javascript

class Hewan {
  jenis;
  warna;
  keahlian;
  constructor(nama) {
    this.nama = nama;
  }
  set newspecies(species) {
    this.jenis = species;
  }
  set newColor(color) {
    this.warna = color;
  }
  set newSkill(skill) {
    this.keahlian = skill;
  }
  get detailClass() {
    return `contoh penggunaan object => hai saya punya ${this.jenis} bernama ${this.nama} dan ia berwarna ${this.warna}, dia punya kemampuan untuk ${this.keahlian}`;
  }
}

const kucing = new Hewan("strandent burdent hardent burt");
kucing.newspecies = "kucing";
kucing.newColor = "oren";
kucing.newSkill = "mencakar apa saja yang diihatnya";
console.log(kucing.detailClass);
