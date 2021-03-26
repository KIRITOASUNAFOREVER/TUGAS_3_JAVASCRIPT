luasSegitiga = (alas,tinggi) => {
  //Nilai Sebelum Diubah dan Tampilkan
  console.log("Sebelum Nilai Parameter Diubah");
  console.log("Alas : "+ alas.toString() + "\n" + "Tinggi : " + tinggi.toString() + "\n");

  //Ubah Nilai dari parameternya
  console.log("Setelah Nilai Parameter Diubah");
  alas = 6;
  tinggi = 10;
  //Nilai Setelah Diubah Dan Tampilkan
  console.log("Alas : "+ alas.toString() + "\n" + "Tinggi : " + tinggi.toString() + "\n");
  let luas = (alas * tinggi)/2;
  //ubah nilai dari variabel yang dikirim lalu kembalikan dengan return
  return luas;
};

let alas = 4;
let tinggi = 8;

console.log("Luas Segitiga : " + luasSegitiga(alas,tinggi));
