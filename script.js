// nunggu seluruh html  selesai di muat bbaru jalankan fungsi dibawah ni
document.addEventListener("DOMContentLoaded", () => {

  const absen = document.getElementById("absen");

// template awal html
//disimpem dalem string biar rapi
  let html = `
    <table id="tabelAbsen">
      <thead>
        <tr>
          <th>No</th>
          <th>Nama</th>
          <th>NPM</th>
          <th>JK</th>
          <th>Keterangan</th>
        </tr>
      </thead>
      <tbody>
  `;

  //nggeloppin datasiswa untuk membbuat baris tabel
  //i = index (dipakai untuk nomor urut)
  dataSiswa.forEach((siswa, i) => {
    html += `
      <tr>
        <td>${i + 1}</td>
        <td>${siswa.nama}</td>
        <td>${siswa.npm}</td>
        <td>${siswa.jk}</td>
        <td>
          <select class="ket">
            <option value="Masuk">Masuk</option>
            <option value="Izin">Izin</option>
            <option value="Sakit">Sakit</option>
            <option value="Alpa">Alpa</option>
          </select>
        </td>
      </tr>
    `;
  });


   //Penutup tabel + tombol absen
  html += `
      </tbody>
    </table>
    <button id="batenabsen">Absen</button>
  `;


  // Masukkan seluruh HTML tabel ke dalam elemen #absen
  absen.innerHTML = html;


 // ktika use klik tombbol aben maka fungsi y didalamnya akan berjaaln
  document.getElementById("batenabsen").addEventListener("click", () => {


    //panajn array data siwa
    let total = dataSiswa.length;

    //menghitung tiap keteerangan
    let masuk = 0, izin = 0, sakit = 0, alpa = 0;

    document.querySelectorAll("#tabelAbsen tbody tr").forEach(row => {

      // Ambil nilai select (Masuk / Izin / Sakit / Alpa)
      const ket = row.querySelector(".ket").value;



       // Tambah hitungan sesuai pilihan
      if (ket === "Masuk") masuk++;
      else if (ket === "Izin") izin++;
      else if (ket === "Sakit") sakit++;
      else if (ket === "Alpa") alpa++;
    });

    // Tampilkan hasil rekap ke elemen HTML
    document.getElementById("total").innerHTML = `Jumlah Siswa<br>${total}`;
    document.getElementById("hadir").innerHTML = `Masuk<br>${masuk}`;
    document.getElementById("izin").innerHTML = `Izin<br>${izin}`;
    document.getElementById("sakit").innerHTML = `Sakit<br>${sakit}`;
    document.getElementById("alpa").innerHTML = `Alpa<br>${alpa}`;

    alert("Absen berhasil disimpan 👍");
  });

}); 
