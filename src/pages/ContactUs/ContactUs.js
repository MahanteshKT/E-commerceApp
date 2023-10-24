import React from "react";
import classes from "./ContactUs.module.css";

function ContactUs() {
  return (
    <div className={classes.contactPage}>
      <h5>Get connected with us on social networks:</h5>
      <h3 style={{ color: "rgb(148, 70, 133)" }}>My Bags</h3>
      <h4 className="text-uppercase fw-bold mb-4">Contact Us:</h4>
      <p>Kormangala, Bangalore.</p>
      <p>www.mybags.com</p>
      <p>+ 91 7337739350</p>
      <p>+91 9986654564</p>
    </div>
  );
}

export default ContactUs;
