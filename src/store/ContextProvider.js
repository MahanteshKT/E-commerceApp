import React from "react";
import context from "./Context";
import Reducer from "./Reducer";
function ContextProvider(props) {
  const { ReducerStates: state, dispatch } = Reducer();
  const AddItemCartHandler = (product) => {
    console.log(product);
    dispatch({ type: "ADD", payload: product });
  };

  const DeleteCartItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const ModelHandler = () => {
    dispatch({ type: "MODEL_TOGGLE" });
  };
  const Context = {
    showCart: state.showCart,
    TotalAmount: state.TotalAmount,
    products: state.products,
    onAddCart: AddItemCartHandler,
    onDeleteCart: DeleteCartItemHandler,
    onshowCart: ModelHandler,
  };

  return <context.Provider value={Context}>{props.children}</context.Provider>;
}

export default ContextProvider;
