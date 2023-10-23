import { useReducer } from "react";

const intialStates = {
  showCart: false,
  TotalAmount: 0,
  products: [],
};

const ReducerFunc = (state, action) => {
  if (action.type === "ADD") {
    const product = action.payload;
    const existingCartproductIndex = state.products.findIndex(
      (Product) => Product.id === product.id
    );
    const existingCartproduct = state.products[existingCartproductIndex];
    let updatedCartproduct;
    if (existingCartproduct) {
      const updatExistingCartproduct = {
        ...existingCartproduct,
        amount: existingCartproduct.amount + product.amount,
      };
      updatedCartproduct = [...state.products];
      updatedCartproduct[existingCartproductIndex] = updatExistingCartproduct;
    } else {
      updatedCartproduct = state.products.concat(product);
    }

    const TotalCartAmount = state.TotalAmount + product.amount * product.price;
    console.log(TotalCartAmount, updatedCartproduct);
    return {
      showCart: state.showCart,
      products: updatedCartproduct,
      TotalAmount: TotalCartAmount,
    };
  }
  if (action.type === "REMOVE") {
    let FilteredCartproductIndex = state.products.findIndex(
      (product) => product.id === action.id
    );
    let FilteredCartproduct = state.products[FilteredCartproductIndex];
    let UpdatedTotalAmount = state.TotalAmount - FilteredCartproduct.price;
    let updatedCartproducts;

    if (FilteredCartproduct.amount > 1) {
      FilteredCartproduct = {
        ...FilteredCartproduct,
        amount: FilteredCartproduct.amount - 1,
      };
      let products = [...state.products];
      products[FilteredCartproductIndex] = FilteredCartproduct;
      updatedCartproducts = products;
    } else {
      updatedCartproducts = state.products.filter((product) => {
        return product.id !== action.id;
      });
    }

    return {
      showCart: state.showCart,
      products: updatedCartproducts,
      TotalAmount: UpdatedTotalAmount,
    };
  }
  if (action.type === "MODEL_TOGGLE") {
    return {
      showCart: !state.showCart,
      products: state.products,
      TotalAmount: state.TotalAmount,
    };
  }
  return state;
};

function Reducer() {
  const [ReducerStates, dispatch] = useReducer(ReducerFunc, intialStates);

  return {
    ReducerStates,
    dispatch,
  };
}

export default Reducer;
