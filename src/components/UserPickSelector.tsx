import { useUserSelectionStore } from "../store/useUserSelectionStore";

function UserPickSelector() {
  const options = ["Desto", "Finger", "Caw", "Cawter", "Oli"];
  const { userPick, toggleSelection, resetSelection } =
    useUserSelectionStore();

  return (
    <div className="space-y-2">
      {options.map((item) => (
        <div
          key={item}
          className={`border w-full py-2 px-3 font-semibold cursor-pointer text-center ${
            userPick === item ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => toggleSelection(item)}
        >
          {item}
        </div>
      ))}

      <button
        onClick={resetSelection}
        className="mt-4 border px-3 py-1 rounded hover:bg-gray-100"
      >
        Reset
      </button>
    </div>
  );
}

export default UserPickSelector;
