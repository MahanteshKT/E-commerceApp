import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.footer}>
      <h4 style={{ alignContent: "center", paddingTop: "10px" }}>
        © 2023 My Bags. All Rights Reserved.
      </h4>
    </div>
  );
}

export default Footer;
