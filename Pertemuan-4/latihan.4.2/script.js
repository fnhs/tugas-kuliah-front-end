document.addEventListener("DOMContentLoaded", function () {
  const formNilai = document.getElementById("formRegistrasiNilai");
  formNilai.addEventListener("submit", function (e) {
    e.preventDefault();
    const namaDepan = formNilai.elements["firtsname"].value;
    const namaBelakang = formNilai.elements["lastname"].value;
    const nilaiAngka = formNilai.elements["nilaiangka"].value;
    const namaLengkap = namaDepan + " " + namaBelakang;
    console.log("Nama Lengkap : " + namaLengkap);
    console.log("Nilai Angka : " + nilaiAngka);
    console.log("Nilai Terbilang : " + angkaTerbilang(parseInt(nilaiAngka)));
  });
});

function angkaTerbilang(nilai) {
  const angka = [
    "",
    "Satu",
    "Dua",
    "Tiga",
    "Empat",
    "Lima",
    "Enam",
    "Tujuh",
    "Delapan",
    "Sembilan",
    "Sepuluh",
    "Sebelas",
  ];
  if (nilai < 12) {
    return angka[nilai];
  } else if (nilai < 20) {
    return angkaTerbilang(nilai - 10) + " Belas";
  } else if (nilai < 100) {
    return (
      angkaTerbilang(Math.floor(nilai / 10)) +
      " Puluh " +
      angkaTerbilang(nilai % 10)
    );
  } else if (nilai < 200) {
    return "Seratus " + angkaTerbilang(nilai - 100);
  } else if (nilai < 1000) {
    return (
      angkaTerbilang(Math.floor(nilai / 100)) +
      " Ratus " +
      angkaTerbilang(nilai % 100)
    );
  } else {
    return "Nilai terlalu besar";
  }
}
