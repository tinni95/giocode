import React, { useRef } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Grid, Typography } from "@material-ui/core";

import "./styles.css";

const TopBar = () => {
  const wrapperRef = useRef();
  const menuRef = useRef();
  const menuList = useRef();
  const handleClick = () => {
    wrapperRef.current.classList.toggle("is-menu-open");
    menuRef.current.classList.toggle("open");
    menuList.current.classList.toggle("open");
  };
  return (
    <div>
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
