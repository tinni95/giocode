import React from "react";
import { Card, Grid } from "@material-ui/core";
import "./Portfolio.css";
import github from "../../assets/portfolio/github.png";
import internet from "../../assets/portfolio/internet.png";
import { isMobile } from "react-device-detect";

export const PortfolioCard = (props) => {
  if (isMobile) {
    return (
      <Grid onClick={props.onClick} container sm={12} md={6}>
        <Card className={"PortfolioCard"}>
          <Grid container>
            <Grid item direction="row">
              <Grid item>
                <img src={props.image} style={{ width: 100, margin: 20 }} />
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
            <div
              style={{
                justifyContent: "flex-end",
                display: "flex",
                alignItems: "flex-end",
                padding: 5,
                flexDirection: "row",
              }}
            >
              {props.github && (
                <img src={github} style={{ padding: 5 }} height="20px" />
              )}
              {props.demo && (
                <img src={internet} style={{ padding: 5 }} height="20px" />
              )}
            </div>
          </Grid>
        </Card>
      </Grid>
    );
  }
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
          <div
            style={{
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "flex-end",
              padding: 5,
              flexDirection: "row",
            }}
          >
            {props.github && (
              <img src={github} style={{ padding: 5 }} height="20px" />
            )}
            {props.demo && (
              <img src={internet} style={{ padding: 5 }} height="20px" />
            )}
          </div>
        </Grid>
      </Card>
    </Grid>
  );
};
