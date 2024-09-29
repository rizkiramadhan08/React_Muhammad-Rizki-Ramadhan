const calculator = {
    // Metode untuk menjumlahkan dua angka
    add: function(a, b) {
        return a + b;
    },

    // Metode untuk mengurangi dua angka
    subtract: function(a, b) {
        return a - b;
    },

    // Metode untuk mengalikan dua angka
    multiply: function(a, b) {
        return a * b;
    },

    // Metode untuk membagi dua angka
    divide: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Error: Division by zero";
        }
    }
};

// Contoh penggunaan
console.log(calculator.add(5, 3));       // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
console.log(calculator.multiply(6, 7));  // Output: 42
console.log(calculator.divide(20, 5));   // Output: 4
console.log(calculator.divide(10, 0));   // Output: Error: Division by zero
