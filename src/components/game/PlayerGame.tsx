import { useGameStore } from "../../store/useGameStore";
import { useUserSelectionStore } from "../../store/useUserSelectionStore";

function PlayerGame() {
  const { userPick } = useUserSelectionStore();
  const setPlayerFinger = useGameStore((state) => state.setPlayerFinger);
  const playerFinger = useGameStore((state) => state.playerFinger);
  const fingers = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="space-y-2">
        <h2 className="font-bold">Choose Your Finger</h2>
        <p>{userPick}</p>
        <div className="flex gap-x-4">
          {fingers.map((finger) => (
            <label
              key={finger}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={playerFinger === finger}
                onChange={() =>
                  setPlayerFinger(playerFinger === finger ? null : finger)
                }
              />
              <span>{finger}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayerGame;
