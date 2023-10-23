import "./App.css";
import Header from "./components/Layout/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Layout/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import { products } from "./data";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
// import Model from "./components/UI/Model/Model";
import context from "./store/Context";
import { useContext } from "react";
import Cart from "./components/Cart/Cart";
function App() {
  const ctx = useContext(context);
  console.log(ctx);
  return (
    <div className="App">
      {ctx.showCart && <Cart />}
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* <Route path="/" element={<HomePage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
