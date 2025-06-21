
# 📚 Dokumentasi Proyek Soal Ujian Programming

Repositori ini berisi penyelesaian dari soal-soal ujian yang dibagi menjadi beberapa bagian berdasarkan folder dan file. Kode ditulis menggunakan JavaScript (browser dan Node.js) serta Express untuk API.

---

## 📁 FirstTest
📌 **Untuk Soal Utama No. 1 - 6**

Berisi:
1. **JSON Array Object** – Struktur data informasi (bisa nama produk, user, dll).
2. **Label & Tombol** – Mengubah value dari label berdasarkan data JSON.
3. **HTTP Request** – Mengambil data dari `jsonplaceholder.typicode.com/posts`.
4. **Tabel HTML** – Menampilkan maksimal 10 data dari response ke dalam tabel.
5. **Fungsi Hapus Data** – Menghapus satu data dari tampilan atau array.
6. **Hapus Key JSON** – Menghapus salah satu key dari response JSON.

---

## 📁 LoginText
📌 **Untuk Soal Utama No. 9**

Berisi implementasi halaman login:
- Input username & password.
- Tombol login & logout.
- Label “Selamat Datang”.
- Menyimpan data ke `localStorage`.
- Menyembunyikan dan menampilkan elemen sesuai status login/logout.

---

## 📁 services
📌 **Untuk Soal Utama No. 10 dan 11**

### Fitur:
- Menggunakan **Node.js + Express**.
- Dua endpoint API:
  - `GET /data`
  - `POST /data`
- Validasi header:
  - `User-id: ifabula`
  - `Scope: user`
- Jika header tidak sesuai:
```json
{
  "responseCode": 401,
  "responseMessage": "UNAUTHORIZED"
}
```

---

## 📄 HSA256.js
📌 **Untuk Soal Utama No. 7**

Fungsi hashing string menggunakan **SHA-256** dengan format:
```
[tanggalhariini] + [namadepananda] + pria + ifabula
```
Contoh string: `01112018kenpriaifabula`  
Output dicetak di console dalam bentuk hash string.

---

## 📄 testdebug.html
📌 **Untuk Soal Utama No. 8**

File HTML yang diperbaiki dari versi aslinya.  
Tugas:
- Debug file HTML dan JavaScript.
- Menyebutkan letak error berdasarkan nomor baris.
- Penjelasan setiap kesalahan dan solusinya ditulis secara terstruktur.
- berikut daftar error nya : 
# 🐞 Daftar Error & Bug pada File JavaScript + JSON

File ini berisi data JSON besar dan fungsi JavaScript untuk melakukan sort berdasarkan field `attribute`. Berikut adalah daftar error yang ditemukan, lengkap dengan penjelasan dan solusinya.

---

## ❗ Daftar Error (Ringkasan)

| No. | Baris (±) | Jenis Error        | Penjelasan                                                                 |
|-----|-----------|--------------------|----------------------------------------------------------------------------|
| 1   | 23        | SyntaxError        | Kurang tanda koma (`,`) setelah elemen array `CountryOfContract`.         |
| 2   | 3160      | SyntaxError        | Tanda kutip (`"`) tidak ditutup pada `benefit[10].amount`.                |
| 3   | 3162      | SyntaxError        | `valueAsString` kosong (tanpa nilai) pada `benefit[12].amount`.           |
| 4   | 1400–1600 | Logic/Syntax       | Duplikasi attribute `benefit[x]` menyebabkan konflik struktur.            |
| 5   | ~2500     | TypeError          | Penulisan salah: `b.attributes` → seharusnya `b.attribute`.               |
| 6   | ~2510     | ReferenceError     | Salah penulisan: `cleanA[]` → seharusnya `cleanA[i]`.                     |

---

## 🧩 Detail Error & Solusi

### 1. ❌ **Missing Comma**
**Baris:** ±23  
```json
{
  "attribute": "case.CountryOfContract",
  "valueAsString": "..."
}
{
  "attribute": "case.ClientPresent",
}
---

## 📁 pseudocode
📌 **Untuk Soal PseudoCode (Soal Tes Kemampuan Programming)**

Berisi:
1. **Kelipatan 5 dengan Label**: Menampilkan angka 50-100 dan label “KURANG”, “CUKUP”, “BAIK”, atau “LUAR BIASA”.
2. **Fibonacci**: Menampilkan 20 angka pertama dari deret Fibonacci.
3. **Pola Bintang**: Menampilkan pola * berdasarkan input `x`.
4. **Terbilang Angka 4 Digit**: Konversi angka menjadi teks, contoh:
   - `2234` → "Dua Ribu Dua Ratus Tiga Puluh Empat"
   - `7001` → "Tujuh Ribu Satu"

---

## 🛠 Cara Menjalankan

### Untuk file HTML/JavaScript (Browser):
1. Buka file `.html` di browser.
2. Buka Developer Tools (F12) untuk melihat output console jika diperlukan.

### Untuk file JavaScript Node.js:
```bash
node namaFile.js
```

### Untuk folder `services` (Express API):
```bash
cd services
npm install
node app.js
```

Gunakan Postman atau curl untuk mengirim request ke endpoint API dengan header yang sesuai.

---