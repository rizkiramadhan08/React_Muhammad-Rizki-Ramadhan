import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productCategory: "",
    productImage: null,
    productFreshness: "",
    description: "",
    price: "",
  });

  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { id, value, name } = e.target;

    // If the input is a radio button, use the name as the key
    if (name === "productFreshness") {
      setFormData({ ...formData, productFreshness: value });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProductList([...productList, { ...formData }]);
    // Reset the form
    setFormData({
      productName: "",
      productCategory: "",
      productImage: null,
      productFreshness: "",
      description: "",
      price: "",
    });
  };

  const handleSearch = () => {
    const filteredProducts = productList.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductList(filteredProducts);
  };

  const handleDeleteLastEntry = () => {
    setProductList(productList.slice(0, -1));
  };

  return (
    <div className="container">
      <form id="productForm" className="needs-validation" onSubmit={handleSubmit}>
        <div className="col-lg-7 mx-auto">
          <h3>Detail Product</h3>
          <div className="mt-3 mb-4 col-md-6 col-7">
            <label htmlFor="productName" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              id="productName"
              value={formData.productName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-3 col-md-5 col-7">
            <label htmlFor="productCategory" className="form-label">
              Product Category
            </label>
            <select
              className="form-select"
              id="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Choose...
              </option>
              <option value="Electronic">Electronic</option>
              <option value="clothes">Clothes</option>
              <option value="Footwear">Footwear</option>
            </select>
          </div>
          <div className="mb-3 col-md-5 col-7">
            <label htmlFor="imgProduct" className="form-label">
              Product Image
            </label>
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
            <label htmlFor="description" className="form-label">
              Additional Description
            </label>
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
            <label htmlFor="price" className="form-label">
              Product Price
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="$1"
              required
            />
          </div>

          <div className="d-grid px-4 gap-2 mt-lg-5 mb-3">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>

      {/* Product List Table */}
      <div className="container mt-5">
        <h2 className="text-center">List Product</h2>
        <table className="table table-bordered mt-4">
          <thead className="table-dark">
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Product Category</th>
              <th>Image of Product</th>
              <th>Product Freshness</th>
              <th>Additional Description</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody id="productTableBody">
            {productList.map((product, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{product.productName}</td>
                <td>{product.productCategory}</td>
                <td>{product.productImage ? product.productImage.name : ""}</td>
                <td>{product.productFreshness}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

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

        {/* Delete Button */}
        <div className="d-grid gap-2 col-6 mx-auto">
          <button id="deleteButton" className="btn btn-danger" onClick={handleDeleteLastEntry}>
            Delete Last Entry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductForm;
