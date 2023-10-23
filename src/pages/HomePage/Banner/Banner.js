import React from "react";
import BannerImg from "./../../../assets/banner.png";
import Button from "../../../components/UI/Button/Button";
import classes from "./Banner.module.css";
import { NavLink } from "react-router-dom";
function Banner() {
  return (
    <div className={classes.banner}>
      <img src={BannerImg} alt="bannerImage" className={classes.bannerImg} />
      <div className={classes.bannerContent}>
        <h6>Huge Collection</h6>
        <h2>New Bages</h2>

        <div className={classes.subtitle}>
          the greate bags collection are going on select your special one get it
          your home in one are 2 days.
        </div>

        <Button className={classes.bannerBtn}>
          <NavLink
            to="products"
            style={{ textDecoration: "none", color: "white" }}
          >
            SHOP NOW
          </NavLink>
        </Button>
      </div>
    </div>
  );
}

export default Banner;
