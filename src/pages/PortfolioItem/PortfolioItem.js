import { Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import PortfolioItemHeader from "../../components/PortfolioItemHeader/PortfolioItemHeader";
import { Items } from "../../constants/PortfolioItems";

export default function PortfolioItem() {
  const { id } = useParams();
  const item = Items.find((it) => it.id == id);
  console.log(item);
  return (
    <Grid style={{ background: "#FBFBFB", height: "100vh" }}>
      <PortfolioItemHeader item={item} />
    </Grid>
  );
}
