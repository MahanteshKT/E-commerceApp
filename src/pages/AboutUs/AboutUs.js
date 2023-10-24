import React from "react";
import classes from "./AboutUs.module.css";
// import BackImage from "./abc.webp";
function AboutUs() {
  return (
    <div className={classes.aboutPage}>
      <h2>About US</h2>

      <p style={{ paddingTop: "10px" }}>
        My Bags is the first choice for millions of Indians who like to make a
        fashion statement wherever they go. We offer quality travel and
        lifestyle accessories tailored for the young, adventurous, and trendy
        people who want to go the extra mile. Our collection includes trolleys,
        backpacks, laptop bags, and more all designed to elevate your style like
        never before. All of this is with the legacy of VIP Industries, the
        market leader for over 50 Years.
      </p>
    </div>
  );
}

export default AboutUs;
