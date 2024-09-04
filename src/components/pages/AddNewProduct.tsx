import React, { useState, useContext } from 'react';
import InputField from '../UI/molecules/InputField';
import Heading from '../UI/atoms/Heading';
import ProductsContext, { ProductCardType, ProductsContextTypes } from '../../contexts/ProductsContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Style for the form container to account for the fixed header
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 120px 20px 20px 20px; /* Push content below fixed header (80px) */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9; /* Light background for visibility */
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

// Style for the form itself
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px; /* Add spacing between form elements */
`;

// Style for the button
const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Style for error messages
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const AddNewProduct: React.FC = () => {
  const { addNewProduct } = useContext(ProductsContext) as ProductsContextTypes;
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    price: '',
    image: '',
    description: ''
  });

  // Validation logic
  const validate = () => {
    const newErrors: typeof errors = { name: '', price: '', image: '', description: '' };
    if (!formValues.name) newErrors.name = 'Product name is required.';
    if (!formValues.price || isNaN(Number(formValues.price))) newErrors.price = 'Valid price is required.';
    if (!formValues.image) newErrors.image = 'Product image URL is required.';
    if (!formValues.description) newErrors.description = 'Product description is required.';

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const newProduct: ProductCardType = {
        id: Math.random().toString(36).substring(2, 9), // Generate a random ID for the new product
        name: formValues.name,
        price: Number(formValues.price),
        image: formValues.image,
        description: formValues.description
      };
      addNewProduct(newProduct); // Add the new product through context
      navigate('/shop'); // Redirect to the shop page after submission
    }
  };

  return (
    <FormContainer>
      <Heading text="Add New Product" size={1} />

      <StyledForm onSubmit={handleSubmit}>
        {/* Product Name Field */}
        <InputField
          text="Product Name"
          type="text"
          name="name"
          id="name"
          placeholderText="Enter product name"
          value={formValues.name}
          onChangeF={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

        {/* Product Price Field */}
        <InputField
          text="Product Price"
          type="text"
          name="price"
          id="price"
          placeholderText="Enter product price"
          value={formValues.price}
          onChangeF={handleChange}
        />
        {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}

        {/* Product Image URL Field */}
        <InputField
          text="Product Image URL"
          type="text"
          name="image"
          id="image"
          placeholderText="Enter product image URL"
          value={formValues.image}
          onChangeF={handleChange}
        />
        {errors.image && <ErrorMessage>{errors.image}</ErrorMessage>}

        {/* Product Description Field */}
        <InputField
          text="Product Description"
          type="text"
          name="description"
          id="description"
          placeholderText="Enter product description"
          value={formValues.description}
          onChangeF={handleChange}
        />
        {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}

        {/* Submit Button */}
        <SubmitButton type="submit">Add Product</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default AddNewProduct;
