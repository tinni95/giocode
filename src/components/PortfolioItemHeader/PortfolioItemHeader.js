import { Card, Grid } from "@material-ui/core";

export default function PortfolioItemHeader({ item }) {
  return (
    <Grid container xs={12}>
      <Card>
        <Grid container direction="row">
          <Grid item>
            <img src={item.image} style={{ width: 100, padding: 35 }} />
            <h1>{item.title}</h1>
          </Grid>
          <Grid item>{item.completed}</Grid>
        </Grid>
        <Grid item>
          <p>{item.subtitle}</p>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <h3>STACK</h3>
            <p>{item.summary}</p>
          </Grid>
          <Grid item>
            <h3>STACK</h3>
            <p>AEH</p>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
