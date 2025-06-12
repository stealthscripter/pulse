import UserPickSelector from "./UserPickSelector";

function PlayerSide() {
  return (
    <div
      className={`w-full h-full flex flex-col items-center md:py-10 transition-all duration-700 ease-in-out`}
    >
      <h1 className="md:text-2xl text-center">Player Pick</h1>
      <p className="my-2 text-zinc-700 text-center md:text-base text-[0.7rem]">
        You have to choose a pick to start the game
      </p>
      <div className="mt-10 space-y-4 md:px-10">
        <UserPickSelector />
      </div>
    </div>
  );
}

export default PlayerSide;
