import { useComputerSelectionStore } from "../store/useComputerSelectionStore";
import { useGameStore } from "../store/useGameStore";
import ComputerPickSelector from "./pick/ComputerPickSelector";

function ComputerSide() {
  const isReady = useGameStore((state) => state.isReady);
  const computerPick = useComputerSelectionStore((state) => state.computerPick);

  return (
    <div
      className={`flex border flex-col items-center transition-all duration-700 ease-in-out px-10 space-y-4`}
    >
      {isReady ? <ComputerPickSelector /> : <p>{computerPick}</p>}
    </div>
  );
}

export default ComputerSide;
