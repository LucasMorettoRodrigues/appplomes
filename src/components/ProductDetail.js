import { useParams } from "react-router-dom";
import { productsData } from "../data/productList";

export const ProductDetail = () => {
  const { id } = useParams();

  const product = productsData.find((product) => id === product.ProductID);

  console.log(product);

  return <div>Product Detail</div>;
};
