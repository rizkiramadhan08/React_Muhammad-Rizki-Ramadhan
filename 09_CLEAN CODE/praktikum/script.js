document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const productTableBody = document.getElementById('productTableBody');
    const deleteButton = document.getElementById('deleteButton');
    const searchButton = document.getElementById('searchButton');
    let productCounter = 1;

    // Fungsi untuk menambahkan baris produk baru ke tabel
    const addProductRow = (productData) => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${productCounter}</td>
            <td>${productData.name}</td>
            <td>${productData.category}</td>
            <td>${productData.image}</td>
            <td>${productData.freshness}</td>
            <td>${productData.description}</td>
            <td>${productData.price}</td>
        `;
        productTableBody.appendChild(newRow);
        productCounter++;
    };

    // Fungsi untuk mereset form dan status validasi
    const resetForm = () => {
        form.reset();
        form.classList.remove('was-validated');
    };

    // Menangani pengiriman form untuk menambahkan produk baru
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        const productData = {
            name: document.getElementById('productName').value,
            category: document.getElementById('productCategory').value,
            freshness: document.querySelector('input[name="productFreshness"]:checked').value,
            description: document.getElementById('description').value,
            price: document.getElementById('price').value,
            image: document.getElementById('imgProduct').files[0]?.name || 'No Image'
        };

        addProductRow(productData);
        resetForm();
    });

    // Menangani tombol hapus untuk menghapus baris produk terakhir
    deleteButton.addEventListener('click', () => {
        const lastRow = productTableBody.lastElementChild;
        if (lastRow) {
            productTableBody.removeChild(lastRow);
            productCounter--;
        }
    });

    // Menangani fungsi pencarian untuk menemukan produk berdasarkan nama
    searchButton.addEventListener('click', () => {
        const searchValue = document.getElementById('searchInput').value.toLowerCase();
        const rows = productTableBody.getElementsByTagName('tr');
        let found = false;

        for (const row of rows) {
            const productNameCell = row.getElementsByTagName('td')[1];

            if (productNameCell && productNameCell.textContent.toLowerCase() === searchValue) {
                const productDetails = {
                    category: row.getElementsByTagName('td')[2].textContent,
                    image: row.getElementsByTagName('td')[3].textContent,
                    freshness: row.getElementsByTagName('td')[4].textContent,
                    description: row.getElementsByTagName('td')[5].textContent,
                    price: row.getElementsByTagName('td')[6].textContent
                };

                alert(`Produk Ditemukan:
                Nama: ${searchValue}
                Kategori: ${productDetails.category}
                Gambar: ${productDetails.image}
                Kondisi: ${productDetails.freshness}
                Deskripsi: ${productDetails.description}
                Harga: $${productDetails.price}`);
                
                found = true;
                break;
            }
        }

        if (!found) {
            alert("Produk tidak ditemukan!");
        }
    });
});
