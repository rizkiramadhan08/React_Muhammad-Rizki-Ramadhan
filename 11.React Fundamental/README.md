# Summary React Fundamental

## 1. Komponen (Components)
React berbasis komponen, di mana UI dibagi menjadi elemen-elemen kecil yang bisa digunakan kembali. Setiap komponen adalah fungsi JavaScript yang mengembalikan elemen JSX, yang pada dasarnya adalah representasi HTML di dalam JavaScript.

## 2. Props
Props adalah cara untuk mengirim data dari komponen induk (parent) ke komponen anak (child). Mereka bersifat read-only dan tidak bisa diubah oleh komponen penerima, sehingga membantu menjaga unidirectional data flow (aliran data satu arah) dalam aplikasi.

## 3. JSX (JavaScript XML)
JSX adalah ekstensi sintaks JavaScript yang memungkinkan kita menulis kode seperti HTML di dalam JavaScript. JSX memudahkan pembuatan elemen UI secara deklaratif dan lebih mudah dibaca. JSX akan di-*transpile* menjadi kode JavaScript murni yang dapat dijalankan oleh browser.

## 4. Directory Structure
Struktur direktori dalam proyek React penting untuk menjaga keteraturan kode. Sebuah struktur yang umum adalah membagi proyek menjadi folder seperti `src` untuk kode sumber, `components` untuk menyimpan semua komponen React, `assets` untuk gambar dan file statis, serta `styles` untuk file CSS. Struktur ini membantu pengorganisasian dan pemeliharaan kode saat proyek bertambah besar.
