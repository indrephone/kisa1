import { useParams } from "react-router-dom";
import { useContext } from "react";
import styled from "styled-components";
import ProductsContext, { ProductsContextTypes } from "../../contexts/ProductsContext";

// Adjust container styling to ensure content is not blocked by the header and is scrollable
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 20px 20px 20px; /* Add padding to the top to avoid fixed header overlap */
  margin: 0 auto;
  max-width: 1200px; /* Optional: To limit the width for better readability */
  box-sizing: border-box; /* Ensures padding is included in the container's width */
  overflow-y: auto; /* Enable scrolling if content overflows */
`;

const ProductImage = styled.img`
  max-width: 100%; /* Make sure image does not overflow */
  height: auto;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  max-width: 800px; /* Optional: Limit description width for better readability */
`;

const SpecProduct = () => {
  const { id } = useParams();
  const { getSpecificProduct } = useContext(ProductsContext) as ProductsContextTypes;

  const product = id ? getSpecificProduct(id) : '';

  return (
    <ProductContainer>
      {product ? (
        <>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductImage src={product.image} alt={product.name} />
          <ProductPrice>Price: {product.price}€</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
        </>
      ) : (
        <p>Product not found</p>
      )}
    </ProductContainer>
  );
};

export default SpecProduct;
