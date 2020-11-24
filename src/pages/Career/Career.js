import { Card, Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { CareerItem } from "../../components/CareerItem/CareerItem";
import RefContext from "../../refContext";
const Career = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("JOB CAREER");
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <Grid container justify={"center"} style={{ backgroundColor: "#FBFBFB" }}>
      <Grid
        style={{ paddingTop: 125, paddingBottom: 40 }}
        item
        xs={12}
        sm={10}
        md={6}
      >
        <Card item style={{ padding: 10, paddingRight: 20 }}>
          <CareerItem
            marginTop={20}
            date={"Jun 2020/ Current"}
            title={"Lead Front-end Developer"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={t("AlfonsinoJob")}
          />
          <CareerItem
            marginTop={0}
            date={"Oct 2019/ May 2020"}
            title={"Full stack developer"}
            subtitle={"Tendit srl, Salerno, Italy"}
            body={t("tendit")}
          />
          <CareerItem
            marginTop={0}
            date={"Aug 2019/ Oct 2019"}
            title={"Software Engineer"}
            subtitle={"PurpleSquid ltd, Glasgow, UK"}
            body={t("purpleSquid")}
          />
          <CareerItem
            marginTop={0}
            date={"May 2019/ Aug 2019"}
            title={"App/ Web developer"}
            subtitle={"Vuxe ltd, Glasgow, UK"}
            body={t("Vuxe")}
          />
          <CareerItem
            marginTop={0}
            date={"Sep 2018/ May 2019"}
            title={"Full Stack Developer"}
            subtitle={"Heriot-Watt, Edinburgh, Scotland"}
            body={t("heriot")}
          />
          <CareerItem
            marginTop={0}
            date={"Jan 2018/ May 2018"}
            title={"Annual Fund Caller"}
            subtitle={"Heriot-Watt, Edinburgh, Scotland"}
            body={t("annual")}
          />
          <CareerItem
            marginTop={0}
            date={"Jun 2017/18 - Aug 2017/18"}
            title={"Activity Leader"}
            subtitle={"EF Clare College, Cambridge, UK"}
            body={t("activity")}
          />
          <CareerItem
            marginTop={0}
            date={"Jun 2016 - Feb 2018"}
            title={"Freelance Web Designer"}
            subtitle={"Freelance, Worldwide"}
            body={t("wordpress")}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

const CareerWC = (props) => {
  return (
    <RefContext.Consumer>
      {(con) => <Career {...props} refs={con} />}
    </RefContext.Consumer>
  );
};

export default CareerWC;
