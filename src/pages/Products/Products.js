import React from "react";
import classes from "./Products.module.css";
import ProductList from "./ProductList";
import { useLocation } from "react-router-dom";
// import { products } from "../../data";

function Products(props) {
  const location = useLocation();
  console.log(location.state, props.products);
  return (
    <div className={classes.products}>
      <h2 className={classes.title}>Our Products</h2>

      {location.state?.products.length === 0 && (
        <h2 style={{ margin: "10rem 0" }}> "No Products Found"</h2>
      )}

      {!props.products && <h2> "No product Found"</h2>}
      <ProductList products={location.state?.products || props.products} />
    </div>
  );
}

export default Products;
