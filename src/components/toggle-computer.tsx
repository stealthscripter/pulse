// components/ToggleComputer.tsx
import React, { useEffect } from 'react';
import { useSelectionStore } from '../store/useSelectionStore';
import { useComputerStore } from '../store/useComputerStore';

const ToggleComputer: React.FC = () => {
  const options = ['Desto', 'Finger', 'Caw', 'Cawter', 'Oli'];
  const userPicks = useSelectionStore((state) => state.selectedItems);
  const {
    computerPicks,
    isAnimating,
    tempPick,
    setComputerPicks,
    setIsAnimating,
    setTempPick,
    resetComputerPicks,
  } = useComputerStore();

  // When user has picked 2 items → start computer animation
  useEffect(() => {
    if (userPicks.length === 2) {
      const availableOptions = options.filter(
        (opt) => !userPicks.includes(opt)
      );

      if (availableOptions.length < 2) return;

      let animationInterval = null;

      // Start animating
      setIsAnimating(true);
      let animationCount = 0;
      const totalDuration = 2000;
      const intervalTime = 200;

      animationInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * availableOptions.length);
        setTempPick(availableOptions[randomIndex]);
        animationCount += intervalTime;

        if (animationCount >= totalDuration) {
          clearInterval(animationInterval!);

          // Pick final 2 computer picks
          const shuffled = [...availableOptions].sort(() => Math.random() - 0.5);
          const finalPicks = shuffled.slice(0, 2);
          setComputerPicks(finalPicks);
          setTempPick(null);
          setIsAnimating(false);
        }
      }, intervalTime);

      return () => {
        if (animationInterval) clearInterval(animationInterval);
      };
    } else {
      resetComputerPicks();
    }
  }, [userPicks]);

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Computer Picks</h2>
      {isAnimating && <p>Choosing...</p>}
      {!isAnimating && computerPicks.length > 0 ? (
        computerPicks.map((item) => (
          <div
            key={item}
            className="border w-full py-2 px-3 bg-green-500 text-white font-semibold text-center"
          >
            {item}
          </div>
        ))
      ) : (
        <p>No picks yet</p>
      )}
      {isAnimating && (
        <div className="border w-full py-2 px-3 bg-yellow-200 text-center animate-pulse">
          {tempPick || 'Thinking...'}
        </div>
      )}
    </div>
  );
};

export default ToggleComputer;