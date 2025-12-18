document.addEventListener("DOMContentLoaded", () => {

  const dataSiswa = [
    { npm: "23001", nama: "Andi Pratama", jk: "L" },
    { npm: "23002", nama: "Siti Aisyah", jk: "P" },
    { npm: "23003", nama: "Rizki Saputra", jk: "L" },
    { npm: "23004", nama: "Dedi Kurniawan", jk: "L" },
    { npm: "23005", nama: "Nurul Hidayah", jk: "P" },
    { npm: "23006", nama: "Agus Setiawan", jk: "L" },
    { npm: "23007", nama: "Putri Amelia", jk: "P" },
    { npm: "23008", nama: "Fajar Ramadhan", jk: "L" },
    { npm: "23009", nama: "Budi Santoso", jk: "L" },
    { npm: "23010", nama: "Dewi Lestari", jk: "P" },
    { npm: "23011", nama: "Rian Maulana", jk: "L" },
    { npm: "23012", nama: "Aulia Rahma", jk: "P" },
    { npm: "23013", nama: "Iqbal Fahri", jk: "L" },
    { npm: "23014", nama: "Hendra Wijaya", jk: "L" },
    { npm: "23015", nama: "Fitri Handayani", jk: "P" },
    { npm: "23016", nama: "Ardiansyah", jk: "L" },
    { npm: "23017", nama: "Nabila Zahra", jk: "P" },
    { npm: "23018", nama: "Robby Firmansyah", jk: "L" },
    { npm: "23019", nama: "Ilham Sapri", jk: "L" },
    { npm: "23020", nama: "Salsa Putri", jk: "P" },
    { npm: "23021", nama: "Yoga Pradana", jk: "L" },
    { npm: "23022", nama: "Maya Sari", jk: "P" },
    { npm: "23023", nama: "Eko Nugroho", jk: "L" },
    { npm: "23024", nama: "Bayu Prakoso", jk: "L" },
    { npm: "23025", nama: "Indah Permata", jk: "P" },
    { npm: "23026", nama: "Dimas Anggara", jk: "L" },
    { npm: "23027", nama: "Citra Lestari", jk: "P" },
    { npm: "23028", nama: "Ari Wibowo", jk: "L" },
    { npm: "23029", nama: "Rina Oktaviani", jk: "P" }
  ];

  const absen = document.getElementById("absen");

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
            <option value="Alpa">Alpa</option>
            <option value="Izin">Izin</option>
          </select>
        </td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>

    <div style="margin-top:15px; text-align:right;">
      <button id="batenabsen">Absena</button>
    </div>
  `;

  absen.innerHTML = html;

// ne kek tombol absen e
// ne nyari id btn absen terus men di kli addenevenlistener ya nmbh gawi,gawi e apa?jalanin kode
// yang di dalam ne {}
  document.getElementById("batenabsen").addEventListener("click", () => {
    // ne kek aray men di tnya kek nampung hasil pas udh absen e hasil absen semuen e
    const hasil = [];

    // ne sama la kek yang perulangan y nya ngambil siwa dari table sikok sikok sama la mulai e dari 0,1,2 nak y
    document.querySelectorAll("#tabelAbsen tbody tr").forEach((row, i) => {

        // ne kek ambil nilai select e yang alpa masuk izin
      const ket = row.querySelector(".ket").value;
      hasil.push({

        // ne kek ambil nama npm kek keterangan e  masuk ke aray hasil tadi e baris 85
        npm: dataSiswa[i].npm,
        nama: dataSiswa[i].nama,
        keterangan: ket
      });
    });


    // ne kek nampil ekan
    console.log("Data Absen:", hasil);
    alert("Absen berhasil disimpan 👍");
  });

});
