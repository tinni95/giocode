import { Card, Grid } from "@material-ui/core";
import React from "react";
import { CareerItem } from "../../components/CareerItem/CareerItem";
import RefContext from "../../refContext";
const Career = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("JOB CAREER");
  }, []);
  return (
    <Grid container justify={"center"} style={{ backgroundColor: "#FBFBFB" }}>
      <Grid style={{ paddingTop: 125, paddingBottom: 40 }} item xs={12} sm={8}>
        <Card item style={{ padding: 10, paddingRight: 20 }}>
          <CareerItem
            marginTop={20}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end Developer"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
          />
          <CareerItem
            marginTop={0}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end gianni"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
          />
          <CareerItem
            marginTop={0}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end gianni"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
          />
          <CareerItem
            marginTop={0}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end gianni"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
          />
          <CareerItem
            marginTop={0}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end gianni"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
          />
          <CareerItem
            marginTop={0}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end gianni"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
          />
          <CareerItem
            marginTop={0}
            date={"Giu 2019/ Current"}
            title={"Lead Front-end gianni"}
            subtitle={"Alfonsino srl, Caserta, Italy"}
            body={
              "Created the app infrastructure, entailing a back-end written in NodeJs and a front-end in React-Native. Addressed problems such as GDPR and data security, storing and showing HQ images and real-time communication."
            }
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
