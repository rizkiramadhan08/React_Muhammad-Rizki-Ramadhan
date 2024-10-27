import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct'; 

describe('CreateProduct Component', () => {
  test('renders CreateProduct form', () => {
    render(<CreateProduct />);
    expect(screen.getByLabelText(/Product Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Category/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Image/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Brand New/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Second Hand/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Refurbished/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Product Price/i)).toBeInTheDocument();
  });

  test('validates required fields', () => {
    render(<CreateProduct />);
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(screen.getByText(/Product Name must be 1-25 characters long and alphanumeric./i)).toBeInTheDocument();
    expect(screen.getByText(/Product Category must be selected./i)).toBeInTheDocument();
    expect(screen.getByText(/Product Image must be uploaded./i)).toBeInTheDocument();
    expect(screen.getByText(/Please select a Product Freshness option./i)).toBeInTheDocument();
    expect(screen.getByText(/Product Price must be a valid number greater than or equal to 1./i)).toBeInTheDocument();
  });

  test('allows input in Product Name field and displays it', () => {
    render(<CreateProduct />);

    // Mendapatkan input field untuk Product Name
    const productNameInput = screen.getByLabelText(/Product Name/i);
    
    // Simulasi input teks
    fireEvent.change(productNameInput, { target: { value: 'Test Product' } });

    // Memastikan bahwa input field memiliki nilai yang benar
    expect(productNameInput.value).toBe('Test Product');

  });

});