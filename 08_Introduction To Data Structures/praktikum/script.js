document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('productForm');
    let productTableBody = document.getElementById('productTableBody');
    let productCounter = 1;

    // Form submit logic to add new rows
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate form fields
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        // Collect form data
        let productName = document.getElementById('productName').value;
        let productCategory = document.getElementById('productCategory').value;
        let productFreshness = document.querySelector('input[name="productFreshness"]:checked').value;
        let productDescription = document.getElementById('description').value;
        let productPrice = document.getElementById('price').value;

        // Get image file name
        let productImage = document.getElementById('imgProduct').files[0]?.name || 'No Image';

        // Add data to table
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${productCounter}</td>
            <td>${productName}</td>
            <td>${productCategory}</td>
            <td>${productImage}</td>
            <td>${productFreshness}</td>
            <td>${productDescription}</td>
            <td>${productPrice}</td>
        `;
        
        // Append the new row to the table body
        productTableBody.appendChild(newRow);
        productCounter++;

        // Reset the form
        form.reset();
        form.classList.remove('was-validated');
    });

    // Delete button logic to remove the last row
    let deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', function() {
        let lastRow = productTableBody.lastElementChild;
        if (lastRow) {
            productTableBody.removeChild(lastRow);
            productCounter--;  // Decrease the counter after deletion
        }
    });

    // Search button logic to find the product by name
    let searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', function() {
        let searchValue = document.getElementById('searchInput').value.toLowerCase();  // Get the search input
        let rows = productTableBody.getElementsByTagName('tr');  // Get all rows from the table
        let found = false;  // Flag to track if a product is found

        // Iterate through the rows and search for the product name
        for (let i = 0; i < rows.length; i++) {
            let productNameCell = rows[i].getElementsByTagName('td')[1];  // Get the product name column

            if (productNameCell && productNameCell.textContent.toLowerCase() === searchValue) {
                let productCategory = rows[i].getElementsByTagName('td')[2].textContent;
                let productImage = rows[i].getElementsByTagName('td')[3].textContent;
                let productFreshness = rows[i].getElementsByTagName('td')[4].textContent;
                let productDescription = rows[i].getElementsByTagName('td')[5].textContent;
                let productPrice = rows[i].getElementsByTagName('td')[6].textContent;

                // Display the found product details in an alert
                alert(`Product Found:\nName: ${searchValue}\nCategory: ${productCategory}\nImage: ${productImage}\nFreshness: ${productFreshness}\nDescription: ${productDescription}\nPrice: $${productPrice}`);
                found = true;  // Set the flag to true when a match is found
                break;
            }
        }

        if (!found) {
            alert("Product not found!");  // Show alert if no product matches the search
        }
    });
});
