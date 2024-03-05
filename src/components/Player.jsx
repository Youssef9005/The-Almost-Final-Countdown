import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [enterPlayerName, setPlayerName] = useState("unknown entity");

  function handelClick() {
    setPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enterPlayerName !== "" ? enterPlayerName : "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
