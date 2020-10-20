import { Card, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { CareerItem } from "../../components/CareerItem/CareerItem";
import refContext from "../../refContext";

const Education = () => {
  const refs = useContext(refContext);
  React.useEffect(() => {
    refs.setTitle("EDUCATION");
  }, []);

  const { t, i18n } = useTranslation();
  return (
    <Grid container justify={"center"} style={{ backgroundColor: "#FBFBFB" }}>
      <Grid
        style={{ paddingTop: 125, paddingBottom: 40 }}
        item
        xs={12}
        sm={10}
        md={6}
      >
        <Card item style={{ padding: 10, paddingRight: 20 }}>
          <CareerItem
            marginTop={20}
            date={"Jun 2019/ Present"}
            title={"Udemy"}
            subtitle={"udemy.com"}
            body={t("Udemy")}
          />
          <CareerItem
            marginTop={0}
            date={"Sep 2014/ Jun 2019"}
            title={"Bachelor of Science in Computer Science"}
            subtitle={"Heriot-Watt University; Edinburgh, Scotland"}
            body={t("Degree")}
          />
          <CareerItem
            marginTop={0}
            date={"Sep 2013/ Aug 2014"}
            title={"EF University Foundation Year"}
            subtitle={"PurpleSquid ltd, Glasgow, UK"}
            body={t("ef")}
          />
          <CareerItem
            marginTop={0}
            date={"May 2008/ Jun 2013"}
            title={"State High School of Accounting"}
            subtitle={"ITC Leonardo Da Vinci; Santa Maria C.V., Italy"}
            body={t("Vinci")}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default Education;
