import { Card, Grid } from "@material-ui/core";
import React from "react";
import RefContext from "../../refContext";
import alf from "../../assets/portfolio/alfonsino.png";
import inventario from "../../assets/portfolio/inventario.png";
import blog from "../../assets/portfolio/blog.png";
import tendit from "../../assets/portfolio/tendit.png";
import valore24 from "../../assets/portfolio/valore24.png";
import diverse from "../../assets/portfolio/diverse.png";
import diversecommerce from "../../assets/portfolio/diversecommerce.png";
import netflix from "../../assets/portfolio/netflix.png";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";
import { useTranslation } from "react-i18next";

const Portfolio = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("PORTFOLIO");
  }, []);
  const { t, i18n } = useTranslation();
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
          where={"App development"}
          body={t("alfPartnerP")}
        />
        <PortfolioCard
          image={tendit}
          title={"Tendit"}
          where={"App development, UX, back-end, website development"}
          body={t("tenditP")}
        />

        <PortfolioCard
          image={inventario}
          title={"Inventario"}
          where={"App development, UX, Back-end development"}
          body={t("inventarioP")}
        />
        <PortfolioCard
          image={valore24}
          title={"Valore-24"}
          where={"Feature integration, website development"}
          body={t("valore24P")}
        />
        <PortfolioCard
          image={diverse}
          title={"Diverse agency"}
          where={"Website development"}
          body={t("diverseP")}
        />
        <PortfolioCard
          image={blog}
          title={"Blog app"}
          where={"Blogging app, mobile app, back-end, showcase"}
          body={t("blogappP")}
        />
        <PortfolioCard
          image={diversecommerce}
          title={"Diverse e-commerce"}
          where={"E-commerce development, showcase"}
          body={t("diversecommerceP")}
        />
        <PortfolioCard
          image={netflix}
          title={"Netflix"}
          where={"Entertainment app, showcase"}
          body={t("netflixP")}
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
