# Event Handling

Berikut adalah ringkasan mengenai Event Handling dalam React, yang mencakup tiga poin: **state**, **handling event**, dan **state learning**.

## 1. State
- **State** dalam React adalah objek yang menyimpan data dan mempengaruhi render komponen. 
- Ketika state diperbarui, komponen akan merender ulang untuk mencerminkan perubahan tersebut. 
- Pengelolaan state dilakukan menggunakan `useState` atau `this.state` dalam komponen kelas.

## 2. Handling Event
- **Event Handling** di React melibatkan penanganan berbagai jenis event (misalnya, klik, input, dll.) menggunakan fungsi yang diikat pada elemen.
- Event handler ditulis dengan cara mirip JavaScript, tetapi dengan penanganan yang lebih terstruktur. 
- Contohnya, menggunakan atribut seperti `onClick`, `onChange`, dan lain-lain untuk menangkap interaksi pengguna.
- Event handler biasanya menggunakan arrow function untuk memastikan `this` mengacu pada komponen saat ini.

## 3. State Learning
- **State Learning** berkaitan dengan bagaimana pengembang dapat belajar untuk mengelola state dalam aplikasi React.
- Dengan mempelajari pola pengelolaan state dan teknik seperti lifting state up, komponen dapat saling berkomunikasi dan berbagi data.
- Pembelajaran ini juga mencakup pemahaman tentang unidirectional data flow, di mana data mengalir dari komponen induk ke komponen anak, yang membantu menjaga konsistensi dan mengurangi kompleksitas.