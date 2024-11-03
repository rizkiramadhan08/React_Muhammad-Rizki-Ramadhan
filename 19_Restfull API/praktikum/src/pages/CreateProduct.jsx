import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({
    productName: "",
    productCategory: "",
    productImage: "",
    productFreshness: "",
    price: ""
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  // GET - Fetch all products
  const getProducts = async () => {
    try {
      const response = await axios.get("https://672337eb2108960b9cc732e7.mockapi.io/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // POST - Add new product
  const addProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://672337eb2108960b9cc732e7.mockapi.io/product", product);
      setProduct({
        productName: "",
        productCategory: "",
        productImage: "",
        productFreshness: "",
        price: ""
      });
      getProducts();
      setSuccessMessage("Product has been successfully added!");

      // Reset pesan setelah 3 detik
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  // PUT - Update product
  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://672337eb2108960b9cc732e7.mockapi.io/product/${isEditing}`, product);
      setProduct({
        productName: "",
        productCategory: "",
        productImage: "",
        productFreshness: "",
        price: ""
      });
      setIsEditing(null);
      getProducts();
      setSuccessMessage("Product has been successfully updated!");

      // Reset pesan setelah 3 detik
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  // DELETE - Delete product
  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`https://672337eb2108960b9cc732e7.mockapi.io/product/${id}`);
        getProducts();
        setSuccessMessage("Product has been successfully deleted!");

        // Reset pesan setelah 3 detik
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Handle input change
const handleInputChange = (e) => {
  const { id, name, value } = e.target;
  const key = name || id; // Pilih name jika ada, jika tidak gunakan id
  setProduct({ ...product, [key]: value });
};


  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProduct({ ...product, productImage: file ? file.name : "" });
  };

  // Handle edit mode
  const handleEdit = (item) => {
    setProduct(item);
    setIsEditing(item.id);
  };

  // Handle search
  const handleSearch = () => {
    return products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredProducts = handleSearch();

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Simple header</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav ms-auto">
              <a className="btn btn-primary mx-2" href="#">Home</a>
              <a className="nav-link text-primary mx-2" href="#">Features</a>
              <a className="nav-link text-primary mx-2" href="#">Pricing</a>
              <a className="nav-link text-primary mx-2" href="#">FAQs</a>
              <a className="nav-link text-primary mx-2" href="#">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-5 pt-5">
        <form onSubmit={isEditing ? updateProduct : addProduct}>
          <div className="col-lg-7 mx-auto">
            <h3>{isEditing ? "Edit Product" : "Detail Product"}</h3>
            
            <div className="mt-3 mb-4 col-md-6 col-7">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"  // Input teks menggunakan id
                value={product.productName}
                onChange={handleInputChange}
              />
            </div>

            <div className="mb-3 col-md-5 col-7">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <select
                className="form-select"
                id="productCategory"
                value={product.productCategory}
                onChange={handleInputChange}
              >
                <option value="">Choose...</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothing">Clothing</option>
                <option value="Food">Food</option>
              </select>
            </div>

            <div className="mb-3 col-md-5 col-7">
              <label htmlFor="productImage" className="form-label">Image of Product</label>
              <input
                type="file"
                className="form-control"
                id="productImage"
                onChange={handleFileChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Product Freshness</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="brandNew"
                  name="productFreshness" // Radio button menggunakan name
                  value="Brand New"
                  checked={product.productFreshness === "Brand New"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="brandNew">Brand New</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="secondHand"
                  name="productFreshness" // Radio button menggunakan name
                  value="Second Hand"
                  checked={product.productFreshness === "Second Hand"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="secondHand">Second Hand</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="refurbished"
                  name="productFreshness" // Radio button menggunakan name
                  value="Refurbished"
                  checked={product.productFreshness === "Refurbished"}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="refurbished">Refurbished</label>
              </div>
            </div>

            <div className="mb-3 col-md-6">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={product.price}
                onChange={handleInputChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              {isEditing ? "Update" : "Submit"}
            </button>
          </div>
        </form>

        {successMessage && (
          <div className="alert alert-success" role="alert">
            {successMessage}
          </div>
        )}

        <div className="row my-3">
        <h2 className="text-center">Product List</h2>
        <div className="mt-4 d-flex justify-content-start">
          <input
            type="text"
            className="form-control me-2"
            id="searchInput"
            placeholder="Search by Product Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button id="searchButton" className="btn btn-primary" onClick={handleSearch}>
            Search
          </button>
        </div>
          <div className="col-lg-12 col-md-12 mx-auto">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Freshness</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.productName}</td>
                    <td>{item.productCategory}</td>
                    <td>{item.productImage}</td>
                    <td>{item.productFreshness}</td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        className="btn btn-warning mx-1"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger mx-1"
                        onClick={() => deleteProduct(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
