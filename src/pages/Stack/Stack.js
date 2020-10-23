import { Card, Grid } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { StackContainer } from "../../components/FrontEndStack/FrontEndStack";
import {
  backEndStackItems,
  frontEndStackItems,
  designStackItems,
} from "../../constants/StackItems";
import RefContext from "../../refContext";
import "./styles.css";

const Stack = ({ refs }) => {
  React.useEffect(() => {
    refs.setTitle("MY STACK");
  }, []);

  refs.frontEndRef = React.useRef();
  refs.containerRef = React.useRef();
  refs.designRef = React.useRef();
  refs.backEndRef = React.useRef();

  const [active, setActive] = React.useState();

  const frontEndToggle = () => {
    refs.frontEndRef.current.classList.toggle("blue");
    refs.containerRef.current.classList.toggle("visible");
    refs.designRef.current.classList.toggle("invisible");
    refs.backEndRef.current.classList.toggle("invisible");
    refs.menuRef.current.classList.toggle("open");
    refs.busy = "blue";
    setActive("FRONTEND");
  };

  const designToggle = () => {
    refs.designRef.current.classList.toggle("red");
    refs.frontEndRef.current.classList.toggle("invisible");
    refs.backEndRef.current.classList.toggle("invisible");
    refs.containerRef.current.classList.toggle("visible");
    refs.menuRef.current.classList.toggle("open");
    refs.busy = "red";
    setActive("DESIGN");
  };

  const backEndToggle = () => {
    refs.backEndRef.current.classList.toggle("ocean");
    refs.containerRef.current.classList.toggle("visible");
    refs.frontEndRef.current.classList.toggle("invisible");
    refs.designRef.current.classList.toggle("invisible");
    refs.menuRef.current.classList.toggle("open");
    refs.busy = "ocean";
    setActive("BACKEND");
  };

  return (
    <Grid className={"vennContainer"} container justify={"center"}>
      <div class={"frontEndDoc"} ref={refs.containerRef}>
        {active == "FRONTEND" ? (
          <StackContainer items={frontEndStackItems} />
        ) : active == "BACKEND" ? (
          <StackContainer items={backEndStackItems} />
        ) : (
          <StackContainer items={designStackItems} />
        )}
      </div>
      <div ref={refs.backEndRef} onClick={backEndToggle} className={"backEnd"}>
        <p className={"heading"}>BACK-END</p>
      </div>
      <div ref={refs.designRef} onClick={designToggle} className={"design"}>
        <p className={"heading"}>DESIGN</p>
      </div>
      <div
        onClick={frontEndToggle}
        ref={refs.frontEndRef}
        className={"frontEnd"}
      >
        {" "}
        <p className={"heading"}>FRONT-END</p>
      </div>
    </Grid>
  );
};

const StackWC = (props) => {
  return (
    <RefContext.Consumer>
      {(con) => <Stack {...props} refs={con} />}
    </RefContext.Consumer>
  );
};

export default StackWC;
