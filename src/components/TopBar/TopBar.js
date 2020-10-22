import React, { useEffect, useRef } from "react";

import { Grid } from "@material-ui/core";
import Sky from "react-sky";
import "./styles.css";
import BallSmall from "../../assets/ball_small.png";
import { useHistory } from "react-router-dom";
import RefContext from "../../refContext";

const TopBar = ({ refs }) => {
  const wrapperRef = useRef();
  const skyRef = useRef();
  refs.menuRef = useRef();
  const menuList = useRef();
  const history = useHistory();

  const handleClick = () => {
    if (refs.busy) {
      if (refs.busy == "portfolio") {
        history.push("/portfolio");
      } else if (refs.busy == "blue") {
        refs.containerRef.current.classList.toggle("visible");
        refs.frontEndRef.current.classList.toggle("blue");
        refs.designRef.current.classList.toggle("invisible");
        refs.backEndRef.current.classList.toggle("invisible");
      } else if (refs.busy == "ocean") {
        refs.containerRef.current.classList.toggle("visible");
        refs.backEndRef.current.classList.toggle("ocean");
        refs.designRef.current.classList.toggle("invisible");
        refs.frontEndRef.current.classList.toggle("invisible");
      } else {
        refs.containerRef.current.classList.toggle("visible");
        refs.designRef.current.classList.toggle("red");
        refs.frontEndRef.current.classList.toggle("invisible");
        refs.backEndRef.current.classList.toggle("invisible");
      }
      refs.busy = null;
    } else {
      wrapperRef.current.classList.toggle("is-menu-open");
      menuList.current.classList.toggle("open");
      skyRef.current.classList.toggle("open");
    }
    refs.menuRef.current.classList.toggle("open");
  };

  return (
    <div>
      <div ref={skyRef} className={"sky"}>
        <Sky
          images={{
            0: BallSmall,
          }}
          how={12}
          time={40}
          size={40}
        />
      </div>
      <div ref={wrapperRef} className={"wrapper"}>
        <Grid
          onClick={() => handleClick()}
          container
          justify="flex-start"
          alignItems="flex-start"
        >
          <div ref={refs.menuRef} id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Grid>
      </div>

      <div className={"centerMenu"} ref={menuList}>
        <p
          className={"menuItem"}
          onClick={() => {
            handleClick();
            history.push("/");
          }}
        >
          CONTACTS
        </p>
        <p
          className={"menuItem"}
          onClick={() => {
            handleClick();
            history.push("/stack");
          }}
        >
          MY STACK
        </p>
        <p
          className={"menuItem"}
          onClick={() => {
            handleClick();
            history.push("/portfolio");
          }}
        >
          PORTFOLIO
        </p>
        <p
          className={"menuItem"}
          onClick={() => {
            handleClick();
            history.push("/career");
          }}
        >
          JOB CAREER
        </p>
        <p
          className={"menuItem"}
          onClick={() => {
            handleClick();
            history.push("/education");
          }}
        >
          EDUCATION
        </p>
      </div>
      <p
        className="subTitle"
        style={{ position: "absolute", left: 110, top: 30 }}
      >
        {refs.title}
      </p>
    </div>
  );
};

const TopBarWC = (props) => {
  return (
    <RefContext.Consumer>
      {(con) => <TopBar {...props} refs={con} />}
    </RefContext.Consumer>
  );
};

export default TopBarWC;
