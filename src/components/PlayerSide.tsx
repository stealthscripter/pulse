import { useGameStore } from "../store/useGameStore";
import PlayerGame from "./game/PlayerGame";
import UserPickSelector from "./pick/UserPickSelector";

function PlayerSide() {
  const isReady = useGameStore((state) => state.isReady);
  

  return (
    <div
      className={`border flex flex-col items-center transition-all duration-700 ease-in-out px-10 space-y-4`}
    >
      {isReady ? <UserPickSelector /> : <PlayerGame />}
    </div>
  );
}

export default PlayerSide;
