document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formRegistrasi");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const namaDepan = form.elements["firtsname"].value;
    const namaBelakang = form.elements["lastname"].value;
    const namaLengkap = namaDepan + " " + namaBelakang;
    alert("Pendaftaran berhasil!");
    console.log("Nama Lengkap : " + namaLengkap);
  });

  const formNilai = document.getElementById("formRegistrasiNilai");
  formNilai.addEventListener("submit", function (e) {
    e.preventDefault();
    const namaDepan = formNilai.elements["firtsname"].value;
    const namaBelakang = formNilai.elements["lastname"].value;
    const nilaiAngka = formNilai.elements["nilaiangka"].value;
    const namaLengkap = namaDepan + " " + namaBelakang;
    console.log("Nama Lengkap : " + namaLengkap);
    console.log("Nilai Angka : " + nilaiAngka);
  });
});
