// components/GameScreen.tsx
import React from 'react';
import { useGameStore } from '../store/useGameStore';

const GameScreen: React.FC = () => {
  const {
    userPick,
    computerPick,
    winner,
    winnerCategory,
    isPlaying,
    history,
    setUserPick,
    playRound,
    resetGame,
  } = useGameStore();

  const options = [1, 2, 3, 4, 5];

  return (
    <div className="max-w-md mx-auto p-6 border rounded shadow mt-10">
      <h1 className="text-xl font-bold mb-4">Finger Game</h1>

      {!isPlaying ? (
        <>
          <p>Select a number of fingers (1–5)</p>
          <div className="flex gap-2 justify-center my-4">
            {options.map((num) => (
              <button
                key={num}
                onClick={() => setUserPick(num)}
                className={`w-10 h-10 flex items-center justify-center border rounded ${
                  userPick === num ? 'bg-blue-500 text-white' : ''
                }`}
              >
                {num}
              </button>
            ))}
          </div>
          {userPick && (
            <button
              onClick={playRound}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Play
            </button>
          )}
        </>
      ) : (
        <>
          <div className="space-y-2">
            <p>User picked: {userPick}</p>
            <p>Computer picked: {computerPick}</p>
            <p>Total: {userPick! + computerPick!}</p>
            <p>Winner Category: {winnerCategory}</p>

            {winner === 'user' && (
              <p className="text-green-600 font-bold">🎉 You Win!</p>
            )}
            {winner === 'computer' && (
              <p className="text-red-600 font-bold">🤖 Computer Wins!</p>
            )}
            {winner === 'draw' && (
              <p className="text-yellow-600 font-bold">🤝 It's a Draw!</p>
            )}

            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
            >
              Play Again
            </button>
          </div>
        </>
      )}

      {/* History */}
      {history.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">History</h2>
          <ul className="space-y-2">
            {history.map((round) => (
              <li key={round.id} className="border p-2 rounded text-sm">
                <p>User: {round.userPick}</p>
                <p>Computer: {round.computerPick}</p>
                <p>Total: {round.total}</p>
                <p>Result: {round.winnerCategory}</p>
                <p
                  className={
                    round.winner === 'user'
                      ? 'text-green-600'
                      : round.winner === 'computer'
                      ? 'text-red-600'
                      : 'text-yellow-600'
                  }
                >
                  Winner: {round.winner ?? 'N/A'}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <p>User Wins: {history.filter((g) => g.winner === 'user').length}</p>
            <p>
              Computer Wins:{' '}
              {history.filter((g) => g.winner === 'computer').length}
            </p>
            <p>Draws: {history.filter((g) => g.winner === 'draw').length}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;