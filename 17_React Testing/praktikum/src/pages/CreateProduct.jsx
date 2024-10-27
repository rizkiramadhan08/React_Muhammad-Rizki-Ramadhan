import React, { useState } from "react";
import useProductStore from "../useProductStore";
import { v4 as uuidv4 } from "uuid";

const CreateProduct = () => {
  const { productList, addProduct, updateProduct, deleteProduct } = useProductStore();
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
    productCategory: "",
    productImage: "",
    productFreshness: "",
    price: "",
  });
  const [isEditing, setIsEditing] = useState(null);

  // Regular expressions for validation
  const regexProductName = /^[a-zA-Z0-9 ]{1,25}$/; // Alphanumeric, max 25 characters
  const regexProductFreshness = /^(Brand New|Second Hand|Refurbished)$/; // Specific options
  const regexPrice = /^\d+(\.\d{1,2})?$/; // Numeric with optional two decimal places

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData({ ...formData, [id]: value });

    // Reset error for the specific field on input change
    if (error[id]) {
      setError({ ...error, [id]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, productImage: file });

    // Reset image error on file change
    if (error.productImage) {
      setError({ ...error, productImage: "" });
    }
  };

  const handleFreshnessChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, productFreshness: value });

    // Reset error for product freshness on selection
    if (error.productFreshness) {
      setError({ ...error, productFreshness: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newError = { ...error };

    // Validate fields with regex
    if (!regexProductName.test(formData.productName)) {
      newError.productName = "Product Name must be 1-25 characters long and alphanumeric.";
    }
    if (!formData.productCategory) {
      newError.productCategory = "Product Category must be selected.";
    }
    if (!formData.productImage) {
      newError.productImage = "Product Image must be uploaded.";
    } else if (!formData.productImage.type.startsWith("image/")) {
      newError.productImage = "Uploaded file must be an image.";
    }
    if (!formData.productFreshness) {  // Ensure one radio button is selected
      newError.productFreshness = "Please select a Product Freshness option.";
    }
    if (!regexPrice.test(formData.price) || parseFloat(formData.price) < 1) {
      newError.price = "Product Price must be a valid number greater than or equal to 1.";
    }

    setError(newError);

    // If no errors, add the product to the list
    if (!Object.values(newError).some((err) => err)) {
      addProduct(formData); // Use Zustand to add the product

      // Reset form after submission
      setFormData({
        productName: "",
        productCategory: "",
        productImage: null,
        productFreshness: "",
        description: "",
        price: "",
      });
      setError({}); // Clear errors after submission
    }
  };

  const handleSearch = () => {
    const filtered = productList.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return filtered;
  };

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus produk ini?")) {
      deleteProduct(id); // Use Zustand to delete the product
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(product.id);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateProduct(isEditing, formData); // Use Zustand to update the product

    // Reset form after update
    setFormData({
      productName: "",
      productCategory: "",
      productImage: null,
      productFreshness: "",
      description: "",
      price: "",
    });
    setIsEditing(null);
    setError({}); // Clear errors after update
  };

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

      <div className="container mt-5 pt-5">
        <form
          id="productForm"
          className="needs-validation"
          onSubmit={isEditing ? handleUpdate : handleSubmit}
        >
        <div className="col-lg-7 mx-auto">
          <h3>{isEditing ? "Edit Product" : "Detail Product"}</h3>
          <div className="mt-3 mb-4 col-md-6 col-7">
            <label htmlFor="productName" className="form-label">Product Name</label>
            <input
              type="text"
              className={`form-control ${error.productName ? "is-invalid" : ""}`}
              id="productName"
              value={formData.productName}
              onChange={handleInputChange}
            />
            {error.productName && (
              <div className="text-danger">{error.productName}</div>
            )}
          </div>
            <div className="mb-3 col-md-5 col-7">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <select
                className={`form-select ${error.productCategory ? "is-invalid" : ""}`}
                id="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
              >
                <option value="" disabled>Choose...</option>
                <option value="Electronic">Electronic</option>
                <option value="Clothes">Clothes</option>
                <option value="Footwear">Footwear</option>
              </select>
              {error.productCategory && (
                <div className="text-danger">{error.productCategory}</div>
              )}
            </div>
            <div className="mb-3 col-md-5 col-7">
              <label htmlFor="imgProduct" className="form-label">Product Image</label>
              <input
                type="file"
                className={`form-control ${error.productImage ? "is-invalid" : ""}`}
                id="imgProduct"
                onChange={handleFileChange}
              />
              {error.productImage && (
                <div className="text-danger">{error.productImage}</div>
              )}
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
                checked={formData.productFreshness === "Brand New"}
                onChange={handleFreshnessChange}
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
                checked={formData.productFreshness === "Second Hand"}
                onChange={handleFreshnessChange}
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
                checked={formData.productFreshness === "Refurbished"}
                onChange={handleFreshnessChange}
              />
              <label className="form-check-label" htmlFor="refurbished">
                Refurbished
              </label>
            </div>
            {error.productFreshness && (
              <div className="text-danger">{error.productFreshness}</div>
            )}
          </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Additional Description</label>
              <textarea
                className="form-control"
                id="description"
                rows="3"
                value={formData.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="mb-lg-5">
              <label htmlFor="price" className="form-label">Product Price</label>
              <input
                type="number"
                className={`form-control ${error.price ? "is-invalid" : ""}`}
                id="price"
                placeholder="$1"
                value={formData.price}
                onChange={handleInputChange}
              />
              {error.price && (
                <div className="text-danger">{error.price}</div>
              )}
            </div>
            <div className="d-grid px-4 gap-2 mt-lg-5 mb-3">
              <button className="btn btn-primary" type="submit">
                {isEditing ? "Update" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </div>

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
          <button id="searchButton" className="btn btn-primary" onClick={handleSearch}>
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
              <th>Product Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody id="productTableBody">
            {filteredProducts.map((product, index) => (
              <tr key={product.id}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productFreshness}</td>
                <td>{product.price}</td>
                <td>
                  {product.imageUrl && (
                    <img src={product.imageUrl} alt="Product" style={{ width: "50px", height: "50px" }} />
                  )}
                </td>
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
