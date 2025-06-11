import ComputerPickSelector from "../components/ComputerPickSelector";
import GameScreen from "../components/GameScreen";
import UserPickSelector from "../components/UserPickSelector";
import { useComputerStore } from "../store/useComputerSelectionStore";
import { useUserSelectionStore } from "../store/useUserSelectionStore";

import "./play.css";
function Play() {
  const { isAnimating, computerPick } = useComputerStore();
  const { userPick } = useUserSelectionStore();
  return (
    <>
    <div className="relative h-dvh flex gap-x-10 p-5 font-gruppe items-start">
      <div className="space-y-2">
        <h1 className="">User Selection</h1>
        <UserPickSelector />
      </div>
      <div className="space-y-2">
        <h1>Computer Pick</h1>
        <ComputerPickSelector />
      </div>
      <button
        className="border py-4 px-4 cursor-pointer hover:bg-yellow-200"
        disabled={isAnimating}
      >
        Start The Game
      </button>
      
      {userPick && userPick}
      <br/>
      {computerPick && computerPick}
    </div>
    {/* <GameScreen /> */}
    </>
  );
}

export default Play;
