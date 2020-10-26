import { Card, Grid } from "@material-ui/core";
import React from "react";
import Player from "../player";
import { Preview, Image } from "./styles/VideoSection";

export default function VideoSection({ videos }) {
  return (
    <Grid container xs={12}>
      <Card style={{ width: "100%" }}>
        <Grid container direction={"row"}>
          {videos.map((v) => {
            return (
              <Grid item xs={12} md={4}>
                <Player>
                  <Preview>
                    <Image src={v.preview} />
                    <Player.Video src={v.uri} />
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
