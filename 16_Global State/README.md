# Summary Global State

1. **Definisi Global State**  
   Global state mengacu pada data atau status aplikasi yang perlu diakses oleh berbagai komponen di seluruh aplikasi. Alih-alih mengelola state di setiap komponen secara terpisah, global state memungkinkan untuk menyimpan dan mengelola state di satu tempat yang dapat diakses oleh semua komponen yang membutuhkannya.

2. **Manfaat Global State**  
   Penggunaan global state memudahkan manajemen data dan koordinasi antar komponen. Ini mengurangi kompleksitas pengelolaan prop drilling (menyampaikan props dari komponen induk ke anak) dan memastikan konsistensi data di seluruh aplikasi.

3. **Implementasi**  
   Beberapa pustaka yang umum digunakan untuk mengelola global state di React termasuk Redux, Zustand, dan React Context API. Setiap pustaka memiliki pendekatan dan API yang berbeda, tetapi pada dasarnya mereka memungkinkan pengembang untuk mendefinisikan store yang menyimpan state global dan memberikan cara untuk memperbarui state tersebut melalui tindakan atau reducer.

4. **Kapan Menggunakan Global State**  
   Global state paling bermanfaat dalam aplikasi besar di mana banyak komponen perlu berbagi data yang sama, seperti autentikasi pengguna, pengaturan aplikasi, atau data yang berasal dari API. Namun, untuk aplikasi yang lebih kecil, penggunaan state lokal di dalam komponen mungkin sudah cukup dan lebih sederhana.
