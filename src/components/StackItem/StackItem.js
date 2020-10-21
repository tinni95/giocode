import React from "react";
import { Grid } from "@material-ui/core";

export const StackItem = (props) => {
  return (
    <Grid
      className={"flip-card"}
      style={{
        margin: 25,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        borderRadius: 15,
      }}
      item
      xs={12}
      sm={4}
      lg={2}
    >
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img
            src={props.img}
            width={150}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div class="flip-card-back">
          <ul style={{ listStyle: "none" }}>
            <li>
              <p>{props.text}</p>
            </li>
          </ul>
        </div>
      </div>
    </Grid>
  );
};
