import { Card, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import RefContext from "../../refContext";
import { PortfolioCard } from "../../components/PortfolioCard/PortfolioCard";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { Items } from "../../constants/PortfolioItems";
import { useHistory } from "react-router-dom";
import refContext from "../../refContext";

const Portfolio = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("PORTFOLIO");
  }, []);
  const history = useHistory();
  const { t, i18n } = useTranslation();
  return (
    <Grid container justify={"center"} style={{ backgroundColor: "#FBFBFB" }}>
      <Grid className={"PortfolioContainer"} container xs={12}>
        {Items.map(({ image, title, subtitle, bodyShort, id }) => (
          <PortfolioCard
            image={image}
            title={title}
            where={subtitle}
            body={t(bodyShort)}
            onClick={() => {
              history.push("portfolio-item/" + id);
              refs.menuRef.current.classList.toggle("open");
              refs.busy = "portfolio";
            }}
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
