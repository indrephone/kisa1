import { Link } from "react-router-dom";
import styled from "styled-components";
import { ProductCardType } from "../../../contexts/ProductsContext";

type Props = {
    data: ProductCardType;
};

const StyledDiv = styled.div`
   width: 200px;
   border: 1px solid #ccc;
   padding: 5px;
   display: flex;
   flex-direction: column;
   align-items: center;
   > h3 {
       text-align: center;
   }
   > img {
       width: 100%;
       height: 200px;
       object-fit: contain;
   }
`;

const ProductCard = ({ data }: Props) => {
    // Generate URL to match the route in App.tsx
    const url = `/shop/${data.id}`; // Only use the id

    return (
        <StyledDiv>
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            <p>Price: {data.price}&euro;</p>
            <p>{data.description.slice(0, 100)}... <Link to={url}>read more...</Link></p>
        </StyledDiv>
    );
};

export default ProductCard;
