import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenges({ level, time}) {


  const [timeRemaining , setTimeRemaining] = useState(time * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < time * 1000;


  if(timeRemaining <= 0) {
    dialog.current.open();
    clearInterval(timer.current);
  }


  function handleReset() {
    setTimeRemaining(time * 1000);

  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeReamining => prevTimeReamining - 10);
    },10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={time} timeLeft={timeRemaining} onReset={handleReset}/>

      <div className="challenge">
        <h2>{level}</h2>

        <span className="challenge-time">
          {time} second{time >= 2 && "s"}
        </span>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timer is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
}
