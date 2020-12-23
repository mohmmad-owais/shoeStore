import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import shoeDetails from "../../shoes.json";
import "./ShoesDetails.css";

function ShoesDetails() {
  const { id } = useParams();
  const shoe = shoeDetails[id];
  if (!shoeDetails) {
    <h1>No Shoes found</h1>;
  }

  return (
    <>
      <Grid container item md={12} justify="center">
        <div className="bg">
          <Card item md={6} className="root" variant="outlined">
            <CardContent>
              <Typography className="title">{shoe.name}</Typography>
              <img src={shoe.img} className="img-size" alt={shoe.name} />
              <Typography className="abt">About</Typography>
              <Typography className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </Grid>
    </>
  );
}

export default ShoesDetails;
