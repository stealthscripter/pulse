import ComputerSide from "../components/ComputerSide";
import HeaderSide from "../components/HeaderSide";
import MiddleSide from "../components/MiddleSide";
import PlayerSide from "../components/PlayerSide";
import "./play.css";

function Play() {
  return (
    <div className="relative min-h-dvh w-full border border-gray-600 bg-yellow-900 mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-4 md:gap-x-10 p-4 md:p-5 font-gruppe items-start px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="col-span-full">
          <HeaderSide />
      </div>
      {/* Left - User Pick */}
      <div className="w-full">
        <PlayerSide />
      </div>
      {/* Center - Ready Button / Battle View */}
      <div className="w-full">
        <MiddleSide />
      </div>
      {/* Right - Computer Pick */}
      <div className="w-full">
        <ComputerSide />
      </div>
    </div>
  );
}

export default Play;
