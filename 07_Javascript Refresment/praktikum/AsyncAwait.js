async function fetchData() {
    // Mengembalikan promise yang akan diselesaikan setelah 2 detik
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulasi data yang diambil dari API
            const data = {
                id: 1,
                name: "M.Rizki Ramadhan",
                univ: "Mercu Buana",
            };
            resolve(data);
        }, 2000); // Penundaan selama 2 detik
    });
}

// Contoh penggunaan
async function main() {
    console.log("Mengambil data...");
    const result = await fetchData(); // Menunggu hingga fetchData selesai
    console.log("Data berhasil diambil:", result);
}

main();
