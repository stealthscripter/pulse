import ComputerSide from "../components/ComputerSide";
import PlayerSide from "../components/PlayerSide";
import { useComputerSelectionStore } from "../store/useComputerSelectionStore";
import { useUserSelectionStore } from "../store/useUserSelectionStore";
import "./play.css";

function Play() {
  const { userPick } = useUserSelectionStore();
  const { computerPick } = useComputerSelectionStore();

  return (
    <div className="relative min-h-dvh w-full max-w-[2000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-10 p-4 md:p-5 font-gruppe items-start px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="col-span-full flex flex-col items-center mb-8 md:mb-0">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Ultimate Battle</h1>
        {!userPick || !computerPick ? (
          <p className="text-sm md:text-base lg:text-lg">Waiting for selections...</p>
        ) : (
          <p className="text-sm md:text-base lg:text-lg">Ready to Battle</p>
        )}
      </div>
      {/* Left - User Pick */}
      <div className="w-full">
        <PlayerSide />
      </div>
      {/* Center - Ready Button / Battle View */}

      <div className="w-full flex justify-center items-center border min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        <div className="w-full max-w-[400px] mx-auto">
          <button className="w-full h-full border py-4 text-lg">Ready To Battle</button>
        </div>
      </div>
      {/* Right - Computer Pick */}
      <div className="w-full">
        <ComputerSide />
      </div>
    </div>
  );
}

export default Play;
