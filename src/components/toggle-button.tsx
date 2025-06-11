// components/ToggleButtons.tsx
import React from 'react';
import { useSelectionStore } from '../store/useSelectionStore';

const ToggleButtons: React.FC = () => {
  const options = ['Desto', 'Finger', 'Caw', 'Cawter', 'Oli'];
  const { selectedItems, toggleSelection , resetSelection } = useSelectionStore();
  return (
    <div className="space-y-2">
      {options.map((item) => (
        <div
          key={item}
          className={`border w-full py-2 px-3 font-semibold cursor-pointer text-center ${
            selectedItems.includes(item)
              ? 'bg-blue-500 text-white'
              : ''
          }`}
          onClick={() => toggleSelection(item)}
        >
          {item}
        </div>
      ))}

      <button onClick={resetSelection} className='border-red-600 border px-2 py-2 hover:text-white mt-4 hover:bg-red-800 cursor-pointer duration-200'>reset</button>
    </div>
  );
};

export default ToggleButtons;