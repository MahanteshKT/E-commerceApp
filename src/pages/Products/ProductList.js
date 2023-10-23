import React from "react";
import classes from "./ProductList.module.css";

import ProductsItem from "./ProductsItem/ProductsItem";
function ProductList(props) {
  console.log(props.products);
  return (
    <div className={classes.productsList}>
      {props.products.map((product) => {
        return <ProductsItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
