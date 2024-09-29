function findLargest(arr) {
    // Inisialisasi nilai terbesar dengan nilai pertama array
    let largest = arr[0];

    // Iterasi melalui setiap elemen array
    for (let i = 1; i < arr.length; i++) {
        // Perbandingan setiap elemen dengan nilai terbesar saat ini
        if (arr[i] > largest) {
            // Update nilai terbesar jika ditemukan elemen yang lebih besar
            largest = arr[i];
        }
    }

    // Mengembalikan nilai terbesar
    return largest;
}

// Contoh penggunaan:
const array = [3, 5, 1, 9, 2];
const result = findLargest(array);
console.log(result); // Output: 9