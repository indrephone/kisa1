import { useContext } from "react";
import styled from "styled-components";

import ProductsContext, { ProductsContextTypes } from "../../contexts/ProductsContext";
import ProductCard from "../UI/organisms/ProductCard";

// Define a styled component without expecting props for the background URL
const StyledAllProducts = styled.section`
   > h1{
       text-align: center;
   }
   > div{
    display: flex;
    justify-content: space-around;
    gap: 10px;
    flex-wrap: wrap;
   }
`;

const Shop: React.FC = () => {

  const { products } = useContext(ProductsContext) as ProductsContextTypes;
    return (
      <StyledAllProducts>
        <h1>Products</h1>
        <div>
           {
            products.map(product =>
              <ProductCard
                key={product.id}
                data={product}
              />
            )
           }
        </div>
      </StyledAllProducts>
    );
};

export default Shop;