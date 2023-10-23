import React from "react";
import classes from "./Products.module.css";
import ProductList from "./ProductList";
// import { products } from "../../data";
function Products(props) {
  return (
    <div className={classes.products}>
      <h2 className={classes.title}>Our Products</h2>
      <ProductList products={props.products} />
    </div>
  );
}

export default Products;
