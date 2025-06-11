import ToggleButtons from "../components/toggle-button";
import ToggleComputer from "../components/toggle-computer";
import { useComputerStore } from "../store/useComputerStore";
import { useSelectionStore } from "../store/useSelectionStore";
import "./play.css";
function Play() {
  const { selectedItems } = useSelectionStore();
  const { isAnimating } = useComputerStore();
  return (
    <div className="relative h-dvh flex gap-x-10 p-5 font-gruppe items-start">
      <div className="space-y-2">
        <h1 className="">User Selection</h1>
        <ToggleButtons />
      </div>
      <div className="space-y-2">
        <h1>Computer Pick</h1>
        <ToggleComputer />
      </div>

      <button className={`${isAnimating ? "bg-blue-200" : ""} cursor-pointer border px-2 py-2 hover:bg-blue-500 duration-200 hover:text-white`} disabled={isAnimating}>
        Calculate
      </button>
    </div>
  );
}

export default Play;
