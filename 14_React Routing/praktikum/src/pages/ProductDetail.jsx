import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ productList }) => {
  const { id } = useParams(); // Mengambil ID dari URL

  // Mencari produk berdasarkan ID
  const product = productList.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>; // Menampilkan pesan jika produk tidak ditemukan
  }

  return (
    <div>
      <h1>{product.productName}</h1>
      <p>Category: {product.productCategory}</p>
      <p>Freshness: {product.productFreshness}</p>
      <p>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
