import React, { useRef } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Typography } from "@material-ui/core";
import Sky from "react-sky";
import "./styles.css";

import BallBig from "../../assets/ball_big.png";
import BallSmall from "../../assets/ball_small.png";

const TopBar = () => {
  const wrapperRef = useRef();
  const skyRef = useRef();
  const menuRef = useRef();
  const menuList = useRef();

  const handleClick = () => {
    wrapperRef.current.classList.toggle("is-menu-open");
    menuRef.current.classList.toggle("open");
    menuList.current.classList.toggle("open");
    skyRef.current.classList.toggle("open");
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
          <div ref={menuRef} id="nav-icon4">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Grid>
      </div>

      <div className={"centerMenu"} ref={menuList}>
        <p className={"menuItem"}>ABOUT ME</p>
        <p className={"menuItem"}>MY STACK</p>
        <p className={"menuItem"}>PORTFOLIO</p>
        <p className={"menuItem"}>JOB CAREER</p>
      </div>
    </div>
  );
};

export default TopBar;
