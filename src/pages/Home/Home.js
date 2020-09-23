import React from "react";
import { Grid } from "@material-ui/core";

import Giovanni from "../../assets/giovanni.png";

const Home = () => {
  return (
    <Grid
      container
      className={"homeContainer"}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <div style={{ width: 400 }}>
        <img src={Giovanni} className={"Giocode"} />

        <p className={"Title"}>GIOVANNI D'AMICO</p>

        <p className={"subTitle"}>FULL STACK DEVELOPER</p>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ paddingLeft: 80, paddingRight: 80, marginBottom: 40 }}
          direction="row"
        >
          <p style={{ fontWeight: 100 }}>24/10/1995</p>
          <p>Italy</p>
        </Grid>
        <i className={"quote"}>
          “Being a creative person, I easily find effective <br />
          ways to solve problems entailing products’ infrastructure”
        </i>
      </div>
    </Grid>
  );
};

export default Home;
