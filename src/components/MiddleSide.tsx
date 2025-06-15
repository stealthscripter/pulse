import { useComputerSelectionStore } from "../store/useComputerSelectionStore";
import { useGameStore } from "../store/useGameStore";
import { useUserSelectionStore } from "../store/useUserSelectionStore";

function MiddleSide() {
  const {
    playerFinger,
    computerFinger,
    history,
    isReady,
    computerWin,
    playerWin
  } = useGameStore();

  const { userPick } = useUserSelectionStore();
  const { computerPick } = useComputerSelectionStore();
  const setReady = useGameStore((state) => state.setReady);
  const playRound = useGameStore((state) => state.playRound);

  function handlePlay(){  
      playRound(userPick ?? "" , computerPick ?? "")
  }
  return (
    <div className="w-full flex justify-center items-center">
      {isReady ? (
        <div className="mx-auto">
          <button
            className={`w-full h-full border py-4 px-10 text-lg ${
              !userPick || !computerPick
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer"
            }`}
            disabled={!userPick || !computerPick}
            onClick={setReady}
          >
            Ready To Battle
          </button>
        </div>
      ) : (
        <div>
          <p>{playerWin} vs {computerWin}</p>
          <button
            className={`w-full h-full border py-4 text-lg px-3`}
            onClick={handlePlay}
          >
            {history.length > 0 ? "Play again" : "start the game"}
          </button>
          <div className="mt-3">  
            <p>Player Finger - {playerFinger}</p>
            <p>Computer Finger - {computerFinger}</p>
          </div>
          <ul>
            {history.length &&
              history.map((histor) => (
                <li className="flex flex-col space-y-2">
                  <span>---------------</span>
                  <span>ROUND {}</span>
                  <span>{histor.winnerCategory}</span>
                  <span>total == {histor.total}</span>
                  <span>winner = {histor.winnerCategory}</span>{" "}
                  <span>winner = {histor.winner}</span>{" "}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MiddleSide;
