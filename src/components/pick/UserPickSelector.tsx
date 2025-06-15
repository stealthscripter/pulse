import { IterationCcw } from "lucide-react";
import { useUserSelectionStore } from "../../store/useUserSelectionStore";

function UserPickSelector() {
  const options = ["Desto", "Finger", "Caw", "Cawter", "Oli"];
  const { userPick, toggleSelection, resetSelection } = useUserSelectionStore();

  return (
    <div className="space-y-3 px-10">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => toggleSelection(option)}
          className={`
            group relative w-full md:px-6 md:py-3 md:text-lg uppercase tracking-widest text-sm py-2 cursor-pointer border rounded
            hover:scale-105 transition-all duration-200 ease-out overflow-hidden
            ${userPick == option ? "translate-x-3 bg-red-300" : ""}
            active:scale-95
          `}
        >
          <span className="md:flex md:justify-between md:items-center">{option}</span>
        </button>
      ))}
      <hr className="mt-5" />
      <button
        onClick={resetSelection}
        className="mt-4 border px-3 py-2 w-full rounded cursor-pointer flex justify-center gap-x-2 items-center"
      >
        <span><IterationCcw strokeWidth={1.2} /></span>
        <span>Reset</span>
      </button>
    </div>
  );
}

export default UserPickSelector;
