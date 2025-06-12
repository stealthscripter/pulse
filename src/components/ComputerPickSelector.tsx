import { useEffect, useState } from "react";
import { useUserSelectionStore } from "../store/useUserSelectionStore";
import { useComputerSelectionStore } from "../store/useComputerSelectionStore";

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
  } = useComputerSelectionStore();

  const allOptions = ["Desto", "Finger", "Caw", "Cawter", "Oli"];
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!userPick) {
      resetComputerPicks();
      return;
    }

    const availableOptions = allOptions.filter((opt) => opt !== userPick);
    let animationFrameId: number;
    let startTime: number | undefined;
    const animationDuration = 2000; // Total time animation runs
    const frameTime = 150; // Time per step

    resetComputerPicks();
    setIsAnimating(true);
    setHighlightedIndex(0);

    const animate = (timestamp: DOMHighResTimeStamp) => {
      startTime = startTime || timestamp;

      const elapsed = timestamp - startTime;
      const currentIndex = Math.floor(elapsed / frameTime) % availableOptions.length;
      // Map the availableOptions index back to allOptions index
      const currentOption = availableOptions[currentIndex];
      const mappedIndex = allOptions.findIndex(opt => opt === currentOption);
      setHighlightedIndex(mappedIndex);

      if (elapsed < animationDuration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // Final random pick
        const randomIndex = Math.floor(Math.random() * availableOptions.length);
        const finalPick = availableOptions[randomIndex];
        setTempPick(finalPick);
        setComputerPick(finalPick);
        // Find the index in allOptions array to ensure correct highlighting
        const finalIndex = allOptions.findIndex(opt => opt === finalPick);
        setHighlightedIndex(finalIndex);
        setIsAnimating(false);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      setIsAnimating(false);
    };
  }, [userPick]);

  return (
    <div className="mt-6">
      <div className="space-y-2">
        {allOptions.map((option, index) => {
          const isAvailable = option !== userPick;
          const isHighlighted = highlightedIndex === index && isAnimating;
          const isSelected = computerPick === option && !isAnimating;

          return (
            <button
              key={index}
              disabled={!isAvailable}
              className={`
                group relative w-full px-6 py-3 text-lg uppercase tracking-widest cursor-pointer border rounded
                transition-all duration-200 ease-out overflow-hidden
                ${isAvailable ? "opacity-100" : "opacity-40 cursor-not-allowed"}
                ${isHighlighted ? "bg-yellow-200 scale-105 shadow-lg" : ""}
                ${isSelected ? "bg-green-200 -translate-x-3" : ""}
              `}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ComputerPickSelector;