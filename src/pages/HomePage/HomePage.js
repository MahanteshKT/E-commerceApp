import React from "react";
import Banner from "./Banner/Banner";
import classes from "./HomePage.module.css";
import Products from "../Products/Products";
import { products as DUMMY_PRODUCTS } from "./../../data";
function HomePage() {
  return (
    <div className={classes.home}>
      <Banner />
      <div className={classes.productsContainer}>
        <div className={classes.offerDescription}>
          20% off on Your first Order.
        </div>
        <Products products={DUMMY_PRODUCTS.slice(0, 9)} />
      </div>
    </div>
  );
}

export default HomePage;
