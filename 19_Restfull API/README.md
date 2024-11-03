## Summary RESTful API React

1. **Pengertian RESTful API**  
   RESTful API adalah antarmuka berbasis HTTP yang mematuhi prinsip-prinsip arsitektur REST (Representational State Transfer). Dalam React, RESTful API digunakan untuk berkomunikasi dengan server guna mendapatkan, mengirim, memperbarui, atau menghapus data dari sumber daya yang tersedia di server.

2. **Menggunakan Fetch API atau Axios**  
   Untuk berinteraksi dengan RESTful API di React, dua alat yang umum digunakan adalah Fetch API dan Axios. Fetch API adalah fitur bawaan JavaScript yang digunakan untuk melakukan permintaan HTTP. Sementara itu, Axios adalah pustaka pihak ketiga yang menyediakan sintaks lebih ringkas dan mendukung fitur tambahan seperti interceptor, timeout, dan penanganan kesalahan yang lebih baik.

3. **Penggunaan `useEffect` untuk Permintaan Asinkron**  
   Hook `useEffect` digunakan untuk mengelola permintaan API secara asinkron. Ini memungkinkan permintaan dilakukan saat komponen dirender atau saat ada perubahan pada dependensi tertentu. Dengan `useEffect`, permintaan dapat dikontrol, misalnya untuk mengambil data hanya sekali atau memperbarui data ketika state berubah.
