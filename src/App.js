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
import Product from "./pages/product/Product";
function App() {
  const ctx = useContext(context);
  console.log(ctx);
  return (
    <div className="App">
      {ctx.showCart && <Cart />}
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="products" element={<Products products={products} />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="products/:id" element={<Product />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
