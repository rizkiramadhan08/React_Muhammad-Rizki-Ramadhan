# Summary React Form

1. **Basic Form Handling**:  
   - Form di React digunakan untuk menerima input dari pengguna. Anda dapat membuat form menggunakan elemen HTML standar seperti `<input>`, `<textarea>`, dan `<select>`, lalu menangani data input dengan event handler seperti `onChange` dan `onSubmit`.

2. **Controlled Components**:  
   - Controlled components adalah elemen form yang dikelola oleh state React. Nilai input form disimpan dan diperbarui di dalam state. Ini memberikan kendali penuh atas input, memungkinkan validasi dan pengelolaan data secara efektif.

3. **Uncontrolled Components**:  
   - Uncontrolled components menggunakan referensi DOM untuk mengakses nilai input secara langsung, mirip dengan pendekatan form HTML tradisional. Dengan menggunakan `ref`, Anda dapat mengambil nilai input tanpa melibatkan state React.

4. **Form Validation**:  
   - Validasi form dilakukan dengan memeriksa nilai input dan memastikan data sesuai dengan aturan yang ditetapkan. Regex (Regular Expressions) sering digunakan dalam validasi untuk memeriksa pola tertentu dalam data input, seperti format email, nomor telepon, atau panjang teks. Selain validasi manual, pustaka seperti `Formik` atau `React Hook Form` dapat membantu dalam validasi yang lebih terstruktur dan efisien.
