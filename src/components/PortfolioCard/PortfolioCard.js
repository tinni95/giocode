import React from "react";
import { Card, Grid } from "@material-ui/core";

export const PortfolioCard = (props) => {
  return (
    <Card style={{ width: 600, margin: 50 }}>
      <Grid container style={{ flexWrap: "nowrap" }} direction={"row"}>
        <Grid item>
          <img src={props.image} style={{ width: 150 }} />
        </Grid>
        <Grid item style={{ margin: 20, textAlign: "left" }} direction={"row"}>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontWeight: 700,
              fontSize: 23,
            }}
          >
            {props.title}
          </p>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: 12,
            }}
          >
            {props.where}
          </p>
          <p
            style={{
              fontFamily: "Open Sans, sans-serif",
              fontSize: 16,
            }}
          >
            {props.body}
          </p>
        </Grid>
      </Grid>
    </Card>
  );
};
