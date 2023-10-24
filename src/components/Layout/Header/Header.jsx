import ReactDOM from "react-dom";
import React, { useContext, useRef, useState } from "react";
import classes from "./Header.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../UI/Button/Button";
import context from "../../../store/Context";
import Model from "../../UI/Model/Model";
import { products as data } from "../../../data";
import {
  BagFill,
  CartFill,
  CloudSleetFill,
  HeartFill,
  List,
  Search,
  X,
} from "react-bootstrap-icons";
import Input from "../../UI/Input/Input";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const ctx = useContext(context);
  const navRef = useRef();
  const searchRef = useContext(context);
  const navigate = useNavigate();
  const NavLinks = (
    <ul>
      <li>
        <NavLink to="/" end>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="products">Products</NavLink>
      </li>
      <li>
        <NavLink to="about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="contact-us">Contact Us</NavLink>
      </li>
    </ul>
  );

  const TotalProductsInCart = ctx.products.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);
  function CartHandler(e) {
    e.preventDefault();
    ctx.onshowCart();
  }
  let menu;
  function MenuBarHandler(e) {
    e.preventDefault();
    console.log("sd");
    navRef.current.style.display = "flex";
  }
  function SearchBarHandler(e) {
    e.preventDefault();
    setShowSearch(true);
  }
  function SearchHandler(e) {
    e.preventDefault();
    console.log(e.target.elements[0]);
    let searchItem = String(e.target.elements[0].value).toLowerCase();
    console.dir(searchItem);
    let products = data.filter(
      (product) => String(product.name).toLowerCase() === searchItem
    );
    navigate("products", { state: { products } });
  }
  function CloseMenuBarHandler(e) {
    e.preventDefault();
    setShowSearch(false);
    navRef.current.style.display = "none";
  }
  function CloseSearchBarHandler(e) {
    e.preventDefault();
    setShowSearch(false);
  }
  return (
    <>
      {!showSearch && (
        <div id={classes.menu} ref={navRef}>
          {!showSearch && NavLinks}

          <label className={classes.close} onClick={CloseMenuBarHandler}>
            <X />
          </label>
        </div>
      )}
      {showSearch && (
        <div id={classes.searchBar} ref={searchRef}>
          {showSearch && (
            <>
              <form onSubmit={SearchHandler}>
                <Input
                  className={classes.input}
                  name="searchInput"
                  attributes={{
                    type: "search",
                    placeholder: "Search products ....",
                  }}
                />
                <label
                  className={classes.closeSearch}
                  onClick={CloseSearchBarHandler}
                >
                  <X />
                </label>
              </form>
            </>
          )}
        </div>
      )}

      <header className={classes.header}>
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <label id={classes.logo}>
            <BagFill /> My Bags
          </label>
        </NavLink>
        <div className={classes.navLinks}>{NavLinks}</div>
        <div className={classes.iconbtn}>
          <label
            onClick={SearchBarHandler}
            className={`${classes.HeaderIcon} ${classes.SearchIcon}`}
          >
            <Search />
          </label>
          <Button className={classes.cartBtn} onClick={CartHandler}>
            <BagFill />
            <p className={classes.cartText}>Your Cart </p>
            <div className={classes.totalProducts}>
              {TotalProductsInCart || 0}
            </div>
          </Button>

          <label
            onClick={MenuBarHandler}
            className={`${classes.icon} ${classes.HeaderIcon}`}
          >
            <HeartFill />
          </label>

          <label
            onClick={CartHandler}
            className={`${classes.icon} ${classes.HeaderIcon}`}
          >
            <CartFill />
          </label>

          <label onClick={MenuBarHandler} className={classes.menubar}>
            <List />
          </label>
        </div>
      </header>
    </>
  );
}

export default Header;
