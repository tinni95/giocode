import { Card, Grid } from "@material-ui/core";
import { TramRounded } from "@material-ui/icons";
import React from "react";
import { FrontEndStack } from "../../components/FrontEndStack/FrontEndStack";
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

  const frontEndToggle = () => {
    refs.frontEndRef.current.classList.toggle("blue");
    refs.containerRef.current.classList.toggle("visible");
    refs.designRef.current.classList.toggle("invisible");
    refs.backEndRef.current.classList.toggle("invisible");
    refs.menuRef.current.classList.toggle("open");
    refs.busy = "blue";
  };

  const designToggle = () => {
    refs.designRef.current.classList.toggle("red");
    refs.frontEndRef.current.classList.toggle("invisible");
    refs.backEndRef.current.classList.toggle("invisible");
    refs.containerRef.current.classList.toggle("visible");
    refs.menuRef.current.classList.toggle("open");
    refs.busy = "red";
  };

  const backEndToggle = () => {
    refs.backEndRef.current.classList.toggle("ocean");
    refs.containerRef.current.classList.toggle("visible");
    refs.frontEndRef.current.classList.toggle("invisible");
    refs.designRef.current.classList.toggle("invisible");
    refs.menuRef.current.classList.toggle("open");
    refs.busy = "ocean";
  };

  return (
    <Grid
      className={"vennContainer"}
      container
      justify={"center"}
      style={{ backgroundColor: "#FBFBFB" }}
    >
      <div class={"frontEndDoc"} ref={refs.containerRef}>
        <FrontEndStack />
      </div>
      <div ref={refs.backEndRef} onClick={backEndToggle} className={"backEnd"}>
        <p className={"heading"}>BACK-END</p>
      </div>
      <div ref={refs.designRef} onClick={designToggle} className={"design"}>
        <p className={"heading"}>DESIGN</p>
      </div>
      <div
        r
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
