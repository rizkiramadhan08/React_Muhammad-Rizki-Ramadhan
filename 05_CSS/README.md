# Summary CSS


## 1. Definisi CSS:

    CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk mendesain tampilan elemen-elemen dalam halaman web. CSS memisahkan konten (HTML) dari presentasi, sehingga HTML menangani struktur, dan CSS menangani gaya tampilan.

## 2. Cara Menyisipkan CSS:

    Inline CSS: CSS ditulis langsung dalam atribut elemen HTML menggunakan tag style. Contoh: <p style="color: blue;">
    Internal CSS: Ditulis di dalam tag <style> pada bagian <head> HTML.
    External CSS: File CSS terpisah dengan ekstensi .css, dihubungkan ke HTML menggunakan tag <link>. Contoh: <link rel="stylesheet" href="styles.css">

## 3. Selektor CSS:

    Selektor Elemen: Memilih elemen berdasarkan nama tag, misalnya p { color: red; }
    Selektor ID: Memilih elemen berdasarkan atribut id, misalnya #header { background-color: gray; }
    Selektor Kelas: Memilih elemen berdasarkan atribut class, misalnya .card { padding: 20px; }
    Selektor Atribut, Pseudo-elemen, dan Pseudo-class: Misalnya input[type="text"] { ... }, ::before, :hover.

## 4. Properti CSS:

    Warna dan Latar Belakang: color, background-color, background-image
    Teks: font-size, font-family, text-align, line-height
    Margin dan Padding: margin mengatur jarak luar elemen, sedangkan padding mengatur jarak dalam elemen.
    Border: border-width, border-style, border-color
    Box Model: Menggabungkan width, height, padding, border, dan margin untuk menentukan dimensi elemen.

## 5. Layout dan Positioning:

    Positioning: Mengatur posisi elemen menggunakan static, relative, absolute, fixed, dan sticky.
    Flexbox: Layout modern yang memudahkan pengaturan tata letak responsif dengan properti seperti display: flex, justify-content, align-items.
    Grid Layout: Sistem layout dua dimensi yang memungkinkan pengaturan baris dan kolom dengan display: grid.
