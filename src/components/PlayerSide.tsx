import { useGameStore } from "../store/useGameStore";
import PlayerGame from "./game/PlayerGame";
import UserPickSelector from "./pick/UserPickSelector";

function PlayerSide() {
  const isReady = useGameStore((state) => state.isReady);
  

  return (
    <div
      className={`flex flex-col transition-all duration-700 ease-in-out space-y-4 items-start`}
    >
      {isReady ? <UserPickSelector /> : <PlayerGame />}
    </div>
  );
}

export default PlayerSide;
