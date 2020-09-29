import React from "react";
import { Grid } from "@material-ui/core";

export const CareerItem = (props) => {
  return (
    <Grid container direction={"row"} style={{ marginLeft: 5, marginRight: 5 }}>
      <Grid item style={{ flex: 2, paddingTop: 15 }}>
        <p style={{ fontFamily: "Open Sans, sans-serif", fontSize: 12 }}>
          {props.date}
        </p>
      </Grid>
      <Grid
        item
        style={{
          flex: 0.01,
          backgroundColor: "lightgrey",
          marginTop: 22,
          marginBottom: -40,
        }}
      >
        <div
          style={{
            height: 8,
            width: 8,
            borderRadius: 4,
            marginLeft: -3,
            position: "absolute",
            background: "black",
          }}
        ></div>
      </Grid>
      <Grid
        item
        direction={"column"}
        style={{ textAlign: "left", flex: 6, padding: 15 }}
      >
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#353535",
          }}
        >
          {props.title}
        </p>
        <p
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: 12,
            fontWeight: 700,
            color: "#353434",
          }}
        >
          {props.subtitle}
        </p>
        <p
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: 14,
            marginTop: 5,
          }}
        >
          {props.body}
        </p>
      </Grid>
    </Grid>
  );
};
