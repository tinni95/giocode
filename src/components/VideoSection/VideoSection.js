import { Card, Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import Player from "../player";
import { Preview, Image, Title, Body } from "./styles/VideoSection";

export default function VideoSection({ videos }) {
  const { t, i18n } = useTranslation();
  return (
    <Grid container xs={12}>
      <Card style={{ width: "100%" }}>
        <Grid container direction={"row"}>
          {videos.map((v) => {
            return (
              <Grid
                item
                xs={12}
                md={videos.length === 1 ? 12 : videos.length === 2 ? 6 : 4}
              >
                <Player>
                  <Preview>
                    <Title>{v.title}</Title>
                    <Image src={v.preview} />
                    <Player.Video src={v.uri} />
                    <Body>{t(v.body)}</Body>
                  </Preview>
                </Player>
              </Grid>
            );
          })}
        </Grid>
      </Card>
    </Grid>
  );
}
