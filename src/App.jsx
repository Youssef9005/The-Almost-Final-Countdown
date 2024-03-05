import Player from "./components/Player.jsx";
import TimerChallenges from "./components/TimerChallenges.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenges level={"easy"} time={1} />
        <TimerChallenges level={"not easy"} time={5} />
        <TimerChallenges level={"Hard"} time={10} />
        <TimerChallenges level={"Very Hard"} time={15} />
        <TimerChallenges level={"Expert"} time={25} />
      </div>
    </>
  );
}

export default App;
