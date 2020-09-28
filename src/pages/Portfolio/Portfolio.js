import { Card, Grid } from "@material-ui/core";
import React from "react";
import RefContext from "../../refContext";
import alf from "../../assets/Alfonsino-2.gif";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";

const Portfolio = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("PORTFOLIO");
  }, []);
  return (
    <Grid container justify={"center"} style={{ backgroundColor: "#FBFBFB" }}>
      <Grid
        style={{
          paddingTop: 125,
          paddingBottom: 40,
          justifyContent: "space-between",
        }}
        container
        xs={12}
      >
        <PortfolioCard
          image={alf}
          title={"Alfonsino Partner"}
          where={"Alfonsino srl, Caserta, Italy"}
          body={
            "Re-written a new version of the old food-delivery app used from restaurants, partner of the delivery start up."
          }
        />
        <PortfolioCard
          image={alf}
          title={"Alfonsino Partner"}
          where={"Alfonsino srl, Caserta, Italy"}
          body={
            "Re-written a new version of the old food-delivery app used from restaurants, partner of the delivery start up."
          }
        />
        <PortfolioCard
          image={alf}
          title={"Alfonsino Partner"}
          where={"Alfonsino srl, Caserta, Italy"}
          body={
            "Re-written a new version of the old food-delivery app used from restaurants, partner of the delivery start up."
          }
        />
        <PortfolioCard
          image={alf}
          title={"Alfonsino Partner"}
          where={"Alfonsino srl, Caserta, Italy"}
          body={
            "Re-written a new version of the old food-delivery app used from restaurants, partner of the delivery start up."
          }
        />
        <PortfolioCard
          image={alf}
          title={"Alfonsino Partner"}
          where={"Alfonsino srl, Caserta, Italy"}
          body={
            "Re-written a new version of the old food-delivery app used from restaurants, partner of the delivery start up."
          }
        />
        <PortfolioCard
          image={alf}
          title={"Alfonsino Partner"}
          where={"Alfonsino srl, Caserta, Italy"}
          body={
            "Re-written a new version of the old food-delivery app used from restaurants, partner of the delivery start up."
          }
        />
      </Grid>
    </Grid>
  );
};

const PortfolioWC = (props) => {
  return (
    <RefContext.Consumer>
      {(con) => <Portfolio {...props} refs={con} />}
    </RefContext.Consumer>
  );
};

export default PortfolioWC;
