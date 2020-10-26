import React, { useState, useContext, createContext } from "react";
import ReactDOM from "react-dom";

import { Container, Button, Overlay, Inner, Close } from "./styles/player";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false);

  React.useEffect(() => {
    console.log(showPlayer);
  }, [showPlayer]);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container
        onClick={() => {
          setShowPlayer(!showPlayer);
          console.log("close");
        }}
        {...restProps}
      >
        {children}
      </Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)}>
          <Inner>
            <iframe
              src={src + "?autoplay=1&loop=1&autopause=0"}
              width="800"
              height="800"
              frameborder="0"
              allow="autoplay;fullscreen"
            ></iframe>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      Play
    </Button>
  );
};

Player.OverlayButton = function PlayerButton({ children, ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <div onClick={() => setShowPlayer((showPlayer) => !showPlayer)}>
      {children}
    </div>
  );
};
