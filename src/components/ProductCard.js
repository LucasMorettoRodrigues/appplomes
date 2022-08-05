import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
`;
const Card = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 15px;
  border: 1px solid lightgray;
  margin-bottom: 15px;
`;
const Left = styled.div``;
const Middle = styled.div`
  flex: 1;
  padding: 10px;
`;
const Right = styled.div`
  display: flex;
  align-items: center;
`;
const Price = styled.div`
  display: flex;
`;
const Name = styled.p`
  margin: 0;
  font-size: 26px;
`;
const RetailPrice = styled.p`
  margin-left: 10px;
  font-size: 14px;
`;
const Button = styled.button`
  align-item: center;
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const ProductsCard = ({ products }) => {
  const navigate = useNavigate();

  const handleOnClick = (product) => {
    navigate(`/product/${product.ProductID}`, { state: { product } });
  };

  return (
    <Container>
      {products.map((product) => (
        <Card key={product.ProductID}>
          <Left>
            <img src={product.ThumbnailURL} />
          </Left>
          <Middle>
            <Name>{product.Name}</Name>
            <Price>
              <p>{product.Price}</p>
              <RetailPrice>{product["Retail Price"]}</RetailPrice>
            </Price>
          </Middle>
          <Right>
            <Button onClick={() => handleOnClick(product)}>View Details</Button>
          </Right>
        </Card>
      ))}
    </Container>
  );
};
