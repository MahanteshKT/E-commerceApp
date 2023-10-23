import { createContext } from "react";

const context = createContext({
  showCart: true,
  TotalAmount: 0,
  products: [],
  onAddCart: (item) => {},
  onDeleteCart: (item) => {},
  onshowCart: () => {},
});

export default context;
