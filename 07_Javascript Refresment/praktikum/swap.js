function swapValues(a, b) {
    console.log('Before swap:', 'a =', a, ', b =', b);
    
    // Gunakan let karena nilai ini akan diubah
    let temp = a;
    a = b;
    b = temp;

    console.log('After swap:', 'a =', a, ', b =', b);
}

swapValues(5, 10);

// let:
//     Digunakan untuk variabel yang nilainya akan berubah. Dalam contoh di atas, variabel temp dipakai untuk menyimpan nilai 
//     sementara a saat menukar nilai a dan b. Karena temp akan diubah, kita menggunakan let.
//     digunakan saat membutuhkan variabel yang nilainya akan diubah di sepanjang proses fungsi.