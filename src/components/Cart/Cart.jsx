import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model/Model";
import context from "../../store/Context";
import CartItems from "./CartItems";

const Cart = (props) => {
  const ctx = useContext(context);

  const AddItemHandler = (products) => {
    products = {
      ...products,
      amount: 1,
    };
    ctx.onAddCart(products);
  };

  const RemoveItemHandler = (id) => {
    ctx.onDeleteCart(id);
  };

  const CartMeals = (
    <ul className={classes["cart-items"]}>
      {ctx.products.map((product) => (
        <CartItems
          key={product.id}
          CartItem={product}
          onAdd={AddItemHandler.bind(null, product)}
          onRemove={RemoveItemHandler.bind(null, product.id)}
        />
      ))}
    </ul>
  );

  const OrderItemsHandler = () => {
    console.log("Ordering......");
    ctx.onshowCart();
  };

  const onHideCart = (e) => {
    e.preventDefault();
    ctx.onshowCart();
  };

  return (
    <Model onClick={onHideCart}>
      <ul className={classes.cartList}>{CartMeals}</ul>

      <div className={classes.total}>
        <h3>Total Amount</h3>
        <span>
          {`\u20B9`}
          {ctx.TotalAmount.toFixed(2)}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={onHideCart}>
          Close
        </button>
        {ctx.products.length >= 0 && (
          <button className={classes["button"]} onClick={OrderItemsHandler}>
            Order
          </button>
        )}
      </div>
    </Model>
  );
};

export default Cart;
