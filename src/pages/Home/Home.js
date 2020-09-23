import React from "react";
import { Grid } from "@material-ui/core";

import Giovanni from "../../assets/giovanni.png";
import lin from "../../assets/lin.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
const Home = () => {
  return (
    <Grid
      container
      className={"homeContainer"}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid
        container
        alignItems="flex-end"
        style={{
          position: "absolute",
          top: 20,
          justifyContent: "flex-end",
          marginRight: 100,
        }}
      >
        <Grid direction="column" style={{ textAlign: "left" }} item>
          <Grid direction="row" style={{ marginTop: 10 }} container>
            <img src={lin} className={"icon"} />
            <p className={"contact"}> linkedin.com/in/gdamico241095</p>
          </Grid>
          <Grid direction="row" style={{ marginTop: 10 }} container>
            <img src={phone} className={"icon"} />
            <p className={"contact"}>+39 3516620601</p>
          </Grid>
          <Grid direction="row" style={{ marginTop: 10 }} container>
            <img src={mail} className={"icon"} />
            <p className={"contact"}>g.damico241095@gmail.com</p>
          </Grid>
        </Grid>
      </Grid>
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
