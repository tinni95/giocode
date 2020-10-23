import React, { useContext, useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { Switch, Route, useHistory } from "react-router-dom";
import Home from "./pages/Home/Home";
import classNames from "classnames";
import Career from "./pages/Career/Career";
import Stack from "./pages/Stack/Stack";
import MenuContext from "./refContext";
import Portfolio from "./pages/Portfolio/Portfolio";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import Education from "./pages/Education/Education";
import { isMobile } from "react-device-detect";
import PortfolioItem from "./pages/PortfolioItem/PortfolioItem";
import refContext from "./refContext";

const Cursor = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [hidden, setHidden] = React.useState(false);
  const [clicked, setClicked] = React.useState(false);
  React.useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseenter", onMouseEnter);
    document.removeEventListener("mouseleave", onMouseLeave);
    document.removeEventListener("mousedown", onMouseDown);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onMouseLeave = () => {
    setHidden(true);
  };

  const onMouseEnter = () => {
    setHidden(false);
  };

  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const onMouseDown = () => {
    setClicked(true);
  };

  const onMouseUp = () => {
    setClicked(false);
  };

  const cursorClasses = classNames("cursor", {
    "cursor--hidden": hidden,
    "cursor--clicked": clicked,
  });
  return (
    <div
      className={cursorClasses}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};

function Inner() {
  const [locationKeys, setLocationKeys] = useState([]);
  const history = useHistory();
  const refs = useContext(refContext);

  React.useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);
          console.log("POP");
          if (refs.menuRef.current.classList.contains("open"))
            refs.menuRef.current.classList.toggle("open");
          refs.busy = null;
          // Handle forward event
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);
          console.log("POP");
          if (refs.menuRef.current.classList.contains("open"))
            refs.menuRef.current.classList.toggle("open");
          refs.busy = null;
          // Handle back event
        }
      }
    });
  }, [locationKeys]);

  return (
    <div className="App">
      <TopBar />
      {!isMobile && <Cursor />}
      <Switch>
        <Route component={Home} path={"/"} exact />
        <Route component={Career} path={"/career"} exact />
        <Route component={Education} path={"/education"} exact />
        <Route component={Portfolio} path={"/portfolio"} exact />
        <Route component={PortfolioItem} path={"/portfolio-item/:id"} exact />
        <Route component={Stack} path={"/stack"} exact />
      </Switch>
    </div>
  );
}

function App() {
  const [title, setTitle] = React.useState("");

  return (
    <I18nextProvider i18n={i18n}>
      <MenuContext.Provider
        value={{
          title,
          setTitle: (val) => setTitle(val),
          backEndRef: null,
          designRef: null,
          containerRef: null,
          frontEndRef: null,
          menuRef: null,
          busy: false,
        }}
      >
        <Inner />
      </MenuContext.Provider>
    </I18nextProvider>
  );
}

export default App;
