import { Card, Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";
import github from "../../assets/portfolio/github.png";
import internet from "../../assets/portfolio/internet.png";

const extractAndRemoveLinks = (text) => {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  // Find all matches
  const matches = text.match(urlRegex) || [];

  // Remove links from the original text
  const cleanedText = text.replace(urlRegex, "").replace(/\s+/g, " ").trim();

  // Create an array of anchor elements with line breaks
  const links = matches.map((url, index) => (
    <React.Fragment key={index}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "blue", display: "block", marginBottom: "5px" }}
      >
        {url}
      </a>
      {index < matches.length - 1 && <br />}
    </React.Fragment>
  ));

  return { cleanedText, links };
};

export default function PortfolioItemHeader({ item }) {
  const { t, i18n } = useTranslation();
  const bodyContent = t(item.bodyLong);
  const { cleanedText, links } = extractAndRemoveLinks(bodyContent);
  return (
    <Grid container xs={12} className={"PortfolioItemHeaderContainer"}>
      <Card style={{ width: "100%" }}>
        <Grid container style={{ alignItems: " center" }} direction="row">
          <Grid item>
            <img src={item.image} />
          </Grid>
          <Grid item>
            <h1 className={"PortfolioItemTitle"}>{item.title}</h1>
          </Grid>
          <Grid item className={"PortfolioItemCompleted"}>
            <i>completed {item.completed}</i>
          </Grid>
        </Grid>
        <Grid item className={"PortfolioItemSubtitle"}>
          <i>{item.subtitle}</i>
        </Grid>
        <Grid
          container
          style={{ padding: 25, paddingBottom: 50, flexDirection: "row" }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            className="PortfolioSummarySectionContainer"
          >
            <p className="PortfolioSectionTitle">Summary</p>
            <p className="PortfolioSectionBody">{cleanedText}</p>
            {links && (
              <div className="ExtractedLinks">
                <h4>Links:</h4>
                {links}
              </div>
            )}
          </Grid>
          <Grid item xs={12} sm={6} className="PortfolioStackSectionContainer">
            <p className="PortfolioSectionTitle">Stack</p>
            <Grid container direction="row" className="PortfolioStackContainer">
              {item.stackItems.map((s) => {
                return (
                  <Grid
                    container
                    xs={12}
                    sm={6}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <img src={s.img} />
                    <p>{s.text}</p>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <div
            style={{
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "flex-end",
              padding: 5,
              flexDirection: "row",
            }}
          >
            {item.github && (
              <a href={item.github} target="_blank">
                <Grid direction="row" className={"linkDemo"} container>
                  <img src={github} style={{ padding: 5 }} height="20px" />
                  <p>github</p>
                </Grid>
              </a>
            )}
            {item.demo && (
              <a href={item.demo} target="_blank">
                <Grid direction="row" className={"linkDemo"} container>
                  <img src={internet} style={{ padding: 5 }} height="20px" />
                  <p>live demo</p>
                </Grid>
              </a>
            )}
          </div>
        </Grid>
      </Card>
    </Grid>
  );
}
