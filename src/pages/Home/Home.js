import React from "react";
import { Grid } from "@material-ui/core";
import "./Home.css";
import Giovanni from "../../assets/giovanni.png";
import lin from "../../assets/lin.png";
import phone from "../../assets/phone.png";
import mail from "../../assets/mail.png";
import RefContext from "../../refContext";
import { useTranslation } from "react-i18next";

const Home = ({ refs }) => {
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    refs.setTitle("CONTACTS");
  }, []);

  return (
    <Grid
      container
      className={"homeContainer"}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid container className={"contacts"}>
        <Grid direction="column" style={{ textAlign: "left" }} item>
          <a href="https://www.linkedin.com/in/gdamico241095">
            <Grid
              direction="row"
              className={"lin"}
              style={{ marginTop: 10 }}
              container
            >
              <img src={lin} className={"icon"} />
              <p className={"contact"}> linkedin.com/in/gdamico241095</p>
            </Grid>
          </a>
          <a href="tel:+39 3516620601">
            <Grid
              direction="row"
              className={"num"}
              style={{ marginTop: 10 }}
              container
            >
              <img src={phone} className={"icon"} />
              <p className={"contact"}>+39 3516620601</p>
            </Grid>
          </a>
          <a href="mailto:g.damico241095@gmail.com">
            <Grid
              direction="row"
              className={"email"}
              style={{ marginTop: 10 }}
              container
            >
              <img src={mail} className={"icon"} />
              <p className={"contact"}>g.damico241095@gmail.com</p>
            </Grid>
          </a>
        </Grid>
      </Grid>
      <div className={"GiocodeContainer"}>
        <img src={Giovanni} className={"Giocode"} />

        <p className={"Title"}>GIOVANNI D'AMICO</p>

        <p className={"subTitle"}>SENIOR ENGINEER</p>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{
            paddingLeft: 80,
            paddingRight: 80,
            marginBottom: 40,
            marginTop: 10,
          }}
          direction="row"
        >
          <p style={{ fontWeight: 100 }}>24/10/1995</p>
          <p>Italy</p>
        </Grid>
        <i className={"quote"}>{t("Welcome to React")}</i>
      </div>
    </Grid>
  );
};

const HomeWC = (props) => {
  return (
    <RefContext.Consumer>
      {(con) => <Home {...props} refs={con} />}
    </RefContext.Consumer>
  );
};

export default HomeWC;
