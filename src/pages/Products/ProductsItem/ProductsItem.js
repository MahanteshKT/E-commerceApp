import React, { useContext } from "react";
import classes from "./ProductsItem.module.css";
import Button from "../../../components/UI/Button/Button";
import context from "../../../store/Context";
import { BoxArrowDown, HeartFill, ShareFill } from "react-bootstrap-icons";

function ProductsItem(props) {
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
        <img src={props.product.image} alt={props.product.name} />
        <Button className={classes.cartbtn} onClick={AddProdectToCartHandler}>
          Add TO CART
        </Button>
        <div className={classes.iconsList}>
          <label className={classes.icon}>
            <HeartFill />
          </label>
          <label className={classes.icon}>
            <ShareFill />
          </label>
          <label className={classes.icon}>
            <BoxArrowDown />
          </label>
        </div>
      </div>
      <div className={classes.productDetails}>
        <h3>{props.product.name}</h3>
        <h6>{props.product.price}</h6>
      </div>
    </div>
  );
}

export default ProductsItem;
