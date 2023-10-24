import React, { useContext } from "react";
import classes from "./ProductDetails.module.css";
import Button from "../../components/UI/Button/Button";
import context from "../../store/Context";
function ProductDetails(props) {
  const ctx = useContext(context);
  const AddProdectToCartHandler = (e) => {
    const product = {
      ...props.product,
      amount: +1,
    };
    ctx.onAddCart(product);
  };
  return (
    <div className={classes.productContainer}>
      <div className={classes.productImg}>
        <img src={props.product.image} alt={`${props.product.name}`} />
      </div>
      <div className={classes.productDetails}>
        <h1>{props.product.name}</h1>
        <p>{props.product.description}</p>
        <p>{props.product.description}</p>
        <h6>
          {`\u20B9`}
          {props.product.price}
        </h6>
        <div className={classes.buttonList}>
          <Button className={classes.cartbtn} onClick={AddProdectToCartHandler}>
            Add TO CART
          </Button>
          <Button className={classes.cartbtn}>Add to Wishlist</Button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
