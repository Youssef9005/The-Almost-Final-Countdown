import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeLeft, onReset },
  ref
) {
  const dialog = useRef();

  const userLost = timeLeft <= 0;
  const formatte = (timeLeft / 1000).toFixed(2);
  const score = Math.round((1 - timeLeft / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal (
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      <h2>{userLost ? "You Lost" : `Your Score : ${score}`}</h2>

      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>

      <p>
        You stopped the timer with <strong>{formatte} seconds left.</strong>
      </p>

      <form action="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,

    document.getElementById("modal")
  );
});

export default ResultModal;
