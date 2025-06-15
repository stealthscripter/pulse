import { useState } from "react";
import "./HandWave.css";

function HandWave() {
  const [animate, setAnimate] = useState(false);
  const [fingerImage, setFingerImage] = useState("/src/assets/imgs/0-finger.png");

  const handleClick = () => {
    setFingerImage("/src/assets/imgs/0-finger.png"); // reset if needed
    setAnimate(true);

    // ⏱️ Change image exactly at 60% of 2.5s => 1500ms
    setTimeout(() => {
      setFingerImage("/src/assets/imgs/2-finger.png");
    }, 1500);
  };

  const handleAnimationEnd = () => {
    setAnimate(false); // cleanup animation class
  };

  return (
    <div className="border border-red-400 ">
      <div
        className={`hand -rotate-270 ${animate ? "waving" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <img
          src={fingerImage}
          alt=""
          style={{ transition: "opacity 0.5s ease-in-out" }}
        />
      </div>
      <button onClick={handleClick} className="mt-4 border px-4 bg-red-600 text-white hover:opacity-50 cursor-pointer">Wave!</button>
    </div>
  );
}

export default HandWave;
