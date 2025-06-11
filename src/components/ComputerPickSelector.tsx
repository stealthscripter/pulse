import { useEffect } from "react";
import { useComputerStore } from "../store/useComputerSelectionStore";
import { useUserSelectionStore } from "../store/useUserSelectionStore";

function ComputerPickSelector() {
  const userPick = useUserSelectionStore((state) => state.userPick);
  const {
    computerPick,
    isAnimating,
    tempPick,
    setComputerPick,
    setIsAnimating,
    setTempPick,
    resetComputerPicks,
  } = useComputerStore();

  useEffect(() => {
    if (!userPick) {
      resetComputerPicks();
      return;
    }

    const allOptions = ["Desto", "Finger", "Caw", "Cawter", "Oli"];
    const availableOptions = allOptions.filter((opt) => opt !== userPick);

    let animationInterval;

    // Start animation
    resetComputerPicks();
    setIsAnimating(true);
    let animationCount = 0;

    animationInterval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableOptions.length);
      setTempPick(availableOptions[randomIndex]);
      animationCount += 200;

      if (animationCount >= 2000) {
        clearInterval(animationInterval!);
        setComputerPick(availableOptions[randomIndex]);
        setIsAnimating(false);
      }
    }, 200);

    return () => {
      if (animationInterval) clearInterval(animationInterval);
    };
  }, [userPick]);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold">Computer Pick</h2>

      {isAnimating && (
        <div className="border p-3 mt-2 bg-yellow-100 animate-pulse text-center">
          {tempPick || "Thinking..."}
        </div>
      )}

      {!isAnimating && computerPick && (
        <div className="border p-3 mt-2 bg-green-100 text-center">
          {computerPick}
        </div>
      )}
    </div>
  );
}

export default ComputerPickSelector;
