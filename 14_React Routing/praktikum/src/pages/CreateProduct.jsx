import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const CreateProduct = ({ productList, setProductList }) => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productImage: null,
    productFreshness: "",
    description: "",
    price: "",
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState({
    productName: "",
  });
  const [isValid, setIsValid] = useState({
    productName: true,
  });
  const [isEditing, setIsEditing] = useState(null); 

  const handleInputChange = (e) => {
    const { id, value, name } = e.target;

    if (name === "productFreshness") {
      setFormData({ ...formData, productFreshness: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }

    if (id === "productName") {
      if (value.length > 25) {
        setError({ ...error, productName: "Product Name must not exceed 25 characters." });
        setIsValid({ ...isValid, productName: false });
      } else if (value.length === 0) {
        setError({ ...error, productName: "Please enter a valid product name." });
        setIsValid({ ...isValid, productName: false });
      } else {
        setError({ ...error, productName: "" });
        setIsValid({ ...isValid, productName: true });
      }
    }
  };

  // Handle perubahan file
  const handleFileChange = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid.productName) {
      const newProduct = { id: uuidv4(), ...formData };
      setProductList([...productList, newProduct]);
      setFormData({
        productName: "",
        productCategory: "",
        productImage: null,
        productFreshness: "",
        description: "",
        price: "",
      });
    }
  };

  // Handle pencarian
  const handleSearch = () => {
    const filtered = productList.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  };

  // Handle delete
  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      const updatedProductList = productList.filter((product) => product.id !== id);
      setProductList(updatedProductList);
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(product.id); // Set ID produk yang sedang diedit
  };

  // Handle update
  const handleUpdate = (e) => {
    e.preventDefault();
    if (isValid.productName) {
      const updatedProductList = productList.map((product) =>
        product.id === isEditing ? { ...product, ...formData } : product
      );
      setProductList(updatedProductList);
      setFormData({
        productName: "",
        productCategory: "",
        productImage: null,
        productFreshness: "",
        description: "",
        price: "",
      });
      setIsEditing(null); // Reset state editing
    }
  };

  // Ambil produk yang difilter untuk ditampilkan
  const filteredProducts = handleSearch();

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Simple header</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="btn btn-primary mx-2" href="#" role="button">Home</a>
              <a className="nav-link text-primary mx-2" href="#">Pricing</a>
              <a className="nav-link text-primary mx-2" href="#">FAQs</a>
              <a className="nav-link text-primary mx-2" href="#">Features</a>
              <a className="nav-link text-primary mx-2" href="#">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="row pt-5">
        <div className="col-lg-9 py-5 text-center mx-auto">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap logo"
            className="bootstrap img"
            width="71.53"
          />
          <h2 className="mt-4 mb-2">Create Product</h2>
          <p>
            Below is an example form built entirely with Bootraps form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
      </div>

      <div className="container mt-3 pt-3">
        <form
          id="productForm"
          className="needs-validation"
          onSubmit={isEditing ? handleUpdate : handleSubmit}
        >
          <div className="col-lg-7 mx-auto">
            <h3>Detail Product</h3>
            <div className="mt-3 mb-4 col-md-6 col-7">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className={`form-control ${!isValid.productName ? "is-invalid" : ""}`}
                id="productName"
                value={formData.productName}
                onChange={handleInputChange}
                required
              />
              {error.productName && (
                <div className="text-danger">{error.productName}</div>
              )}
            </div>
            <div className="mb-3 col-md-5 col-7">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <select
                className="form-select"
                id="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Choose...</option>
                <option value="Electronic">Electronic</option>
                <option value="Clothes">Clothes</option>
                <option value="Footwear">Footwear</option>
              </select>
            </div>
            <div className="mb-3 col-md-5 col-7">
              <label htmlFor="imgProduct" className="form-label">Product Image</label>
              <input
                type="file"
                className="form-control"
                id="imgProduct"
                onChange={handleFileChange}
                required
              />
            </div>
            <div className="col-6">
              <label className="form-label">Product Freshness</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="brandNew"
                  value="Brand New"
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="brandNew">
                  Brand New
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="secondHand"
                  value="Second Hand"
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="secondHand">
                  Second Hand
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="productFreshness"
                  id="refurbished"
                  value="Refurbished"
                  onChange={handleInputChange}
                  required
                />
                <label className="form-check-label" htmlFor="refurbished">
                  Refurbished
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Additional Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>
            <div className="mb-lg-5">
              <label htmlFor="price" className="form-label">Product Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="$1"
                value={formData.price}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="d-grid px-4 gap-2 mt-lg-5 mb-3">
              <button className="btn btn-primary" type="submit">
                {isEditing ? "Update Product" : "Create Product"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Tabel Produk */}
      <div className="container mt-5">
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
          <button className="btn btn-primary" onClick={() => handleSearch()}>
            Search
          </button>
        </div>
        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Product Freshness</th>
              <th>Product Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="productTableBody">
            {filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>
                  <Link to={`/product/${product.id}`} className="text-decoration-none">
                    {product.productName}
                  </Link>
                </td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() => handleEdit(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
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
  );
};

export default CreateProduct;
