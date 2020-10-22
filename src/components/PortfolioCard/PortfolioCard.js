import React from "react";
import { Card, Grid } from "@material-ui/core";
import "./Portfolio.css";

export const PortfolioCard = (props) => {
  return (
    <Grid onClick={props.onClick} container sm={12} md={6}>
      <Card className={"PortfolioCard"}>
        <Grid container style={{ flexWrap: "nowrap" }} direction={"row"}>
          <Grid item>
            <img src={props.image} style={{ width: 100, padding: 35 }} />
          </Grid>
          <Grid
            item
            style={{ margin: 20, textAlign: "left" }}
            direction={"row"}
          >
            <p className={"PortfolioTitle"}>{props.title}</p>
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: 12,
                marginTop: 5,
              }}
            >
              {props.where}
            </p>
            <p
              style={{
                fontFamily: "Open Sans, sans-serif",
                fontSize: 14,
                marginTop: 2.5,
              }}
            >
              {props.body}
            </p>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};
