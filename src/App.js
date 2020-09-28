import React from "react";
import "./App.css";
import TopBar from "./components/TopBar/TopBar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import classNames from "classnames";
import Career from "./pages/Career/Career";
import Stack from "./pages/Stack/Stack";
import MenuContext from "./refContext";
import Portfolio from "./pages/Portfolio/Portfolio";

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

function App() {
  const [title, setTitle] = React.useState("");
  return (
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
      <div className="App">
        <TopBar />
        <Cursor />
        <Switch>
          <Route component={Home} path={"/"} exact />
          <Route component={Career} path={"/career"} exact />
          <Route component={Portfolio} path={"/portfolio"} exact />
          <Route component={Stack} path={"/stack"} exact />
        </Switch>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
