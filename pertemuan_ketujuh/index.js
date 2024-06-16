const http = require("http");
const RpFormat = require("rupiah-format");
const fs = require("fs");
const host = "127.0.0.1";
const port = 3020;
const server = http.createServer(function (request, response) {
  const nama = "nurdin";
  let uang = 200000;
  let jajan = 50000;
  let sisa = uang - jajan;
  uang = RpFormat.convert(uang);
  jajan = RpFormat.convert(jajan);
  sisa = RpFormat.convert(sisa);
  fs.appendFile("sisaUang.txt", sisa, () => {
    console.log("data uang berhasil disimpan");
  });

  const hasil = `
  <h1 
  style=
  'background-color: black; 
   color: white; 
   padding: 20px;
   text-align: center;
   display: inline-block;
   width : 100%;
   height: 20vh;

  '>
  web server side rendering sederhana</h1>
  <div style= 'text-align: center'>
  <p>
  halo nama saya ${nama}. 
  </p><br>
  <p>
  jumlah uang saya tadi adalah 
  ${uang} </p><br>
  <p>
  karna saya jajan sebanyak ${jajan} </p><br>
  <p>
  maka uang saya sekarang tinggal ${sisa} </p><br>
  </div>
  `;

  response.statusCode = 200;
  response.end(hasil);
});
server.listen(port, host, function () {
  console.log("server sedang berjalan di port " + port);
});
