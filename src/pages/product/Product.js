import React, { useEffect, useState } from "react";
import classes from "./Product.module.css";
import { useParams } from "react-router-dom";
import { products } from "../../data";
import ProductDetails from "./ProductDetails";
function Product() {
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    amount: "",
  });
  const productId = useParams();
  //   console.log(productId);
  useEffect(() => {
    let productResult = products.find(
      (product) => product.id === +productId.id
    );
    setProduct(productResult);
  }, []);

  return (
    <div className={classes.product}>
      <ProductDetails product={product} />
    </div>
  );
}

export default Product;
