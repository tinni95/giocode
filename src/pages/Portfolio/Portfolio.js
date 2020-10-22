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
import "./styles.css";
import { Items } from "../../constants/PortfolioItems";
const Portfolio = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("PORTFOLIO");
  }, []);
  const { t, i18n } = useTranslation();
  return (
    <Grid container justify={"center"} style={{ backgroundColor: "#FBFBFB" }}>
      <Grid className={"PortfolioContainer"} container xs={12}>
        {Items.map(({ image, title, subtitle, bodyShort }) => (
          <PortfolioCard
            image={image}
            title={title}
            where={subtitle}
            body={t(bodyShort)}
          />
        ))}
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
