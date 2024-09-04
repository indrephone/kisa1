import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import ProductsContext, { ProductsContextTypes } from "../../contexts/ProductsContext";

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px 20px 20px; /* Push content down to avoid fixed header */
  max-width: 800px;
  margin: 0 auto;
`;

const ProductImage = styled.img`
  max-width: 100%; /* Make the image fit within the container */
  height: auto;
  max-height: 500px; /* Set a maximum height for large images */
  object-fit: contain; /* Ensure image fits without distortion */
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => (props.color === "edit" ? "#007bff" : "#ff4d4f")};

  &:hover {
    background-color: ${(props) => (props.color === "edit" ? "#0056b3" : "#d32f2f")};
  }
`;

const SpecProduct = () => {
  const { id } = useParams(); // Get the id from the URL
  const { getSpecificProduct, removeProduct } = useContext(ProductsContext) as ProductsContextTypes;
  const navigate = useNavigate(); // Use for navigation after delete or edit
  const product = id ? getSpecificProduct(id) : null;

  const handleDelete = () => {
    if (id) {
      removeProduct(id); // Call the removeProduct action from context
      navigate("/shop"); // Navigate back to the shop page after deletion
    }
  };

  const handleEdit = () => {
    if (id) {
      navigate(`/shop/${id}/edit`); // Navigate to the edit page for this product
    }
  };

  return (
    <ProductContainer>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <ProductImage src={product.image} alt={product.name} />
          <p>Price: {product.price}€</p>
          <p>{product.description}</p>

          {/* Buttons for edit and delete */}
          <ButtonContainer>
            <Button color="edit" onClick={handleEdit}>
              Edit Product
            </Button>
            <Button color="delete" onClick={handleDelete}>
              Delete Product
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </ProductContainer>
  );
};

export default SpecProduct;
