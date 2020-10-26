import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import PortfolioItemHeader from "../../components/PortfolioItemHeader/PortfolioItemHeader";
import VideoSection from "../../components/VideoSection/VideoSection";
import { Items } from "../../constants/PortfolioItems";

export default function PortfolioItem() {
  const { id } = useParams();
  const item = Items.find((it) => it.id == id);

  return (
    <Grid style={{ background: "#FBFBFB", height: "100vh" }}>
      <PortfolioItemHeader item={item} />
      {item.videos?.length && <VideoSection videos={item.videos} />}
    </Grid>
  );
}
