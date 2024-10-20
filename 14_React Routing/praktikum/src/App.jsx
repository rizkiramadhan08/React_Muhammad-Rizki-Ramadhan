import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateProduct from './pages/CreateProduct';
import LandingPage from './pages/LandingPage';
import ProductDetail from './pages/ProductDetail';


const App = () => {
  const [productList, setProductList] = useState([]);
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/createproduct" element={<CreateProduct productList={productList} setProductList={setProductList} />} />
        <Route path="/product/:id" element={<ProductDetail productList={productList} />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
