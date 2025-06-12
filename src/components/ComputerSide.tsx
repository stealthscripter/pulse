import ComputerPickSelector from "./ComputerPickSelector";

function ComputerSide() {
  return (
    <div
      className={`w-full h-full py-10 flex flex-col items-center transition-all duration-700 ease-in-out`}
    >
      <h1 className="text-2xl">Computer Pick</h1>
      <p className="my-2 text-zinc-700">Computer knows everything</p>
      <div className="mt-10 space-y-4 px-10">
        <ComputerPickSelector />
      </div>
    </div>
  );
}

export default ComputerSide;
