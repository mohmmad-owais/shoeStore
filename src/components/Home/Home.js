import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Shoes from "../Products/Shoes";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Product</Link>
      </nav>
      <div className="sliderBanner"></div>
      <Grid container item sm={12} justify="center">
        <Shoes />
      </Grid>

      <div className="footer">
        <h2>Project Shoe Store</h2>
      </div>
    </div>
  );
}

export default Home;
