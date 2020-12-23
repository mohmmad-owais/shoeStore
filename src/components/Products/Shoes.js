import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import shoeDetails from "../../shoes.json";
import "./Shoes.css";

function Shoes() {
  return (
    <>
      <Grid container item sm={12} justify="center">
        <div className="container">
          <Grid item md={12}>
            <ul>
              {Object.entries(shoeDetails).map(([id, { name, img }]) => (
                <li key={id}>
                  <Link to={`/products/${id}`}>
                    <h2>{name}</h2>
                    <img src={img} alt={name} />
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        </div>
      </Grid>
    </>
  );
}

export default Shoes;
