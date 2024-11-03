import { useState } from 'react';
import Login from './pages/Login';
import CreateProduct from './pages/CreateProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/create-product" element={<CreateProduct />} />

      </Routes>

    </Router>
    </>
  )
}

export default App
