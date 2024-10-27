import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

const useProductStore = create((set) => ({
  productList: [],
  addProduct: (product) => set((state) => ({
    productList: [...state.productList, { id: uuidv4(), ...product, imageUrl: URL.createObjectURL(product.productImage) }],
  })),
  updateProduct: (id, updatedProduct) => set((state) => ({
    productList: state.productList.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product)),
  })),
  deleteProduct: (id) => set((state) => ({
    productList: state.productList.filter((product) => product.id !== id),
  })),
}));

export default useProductStore;
