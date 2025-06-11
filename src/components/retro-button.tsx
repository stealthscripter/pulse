import { useState } from "react";

export default function RetroButton() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      className={`
          relative
          px-8 py-4
          bg-gradient-to-b from-red-700 to-red-900
          border-4 border-gray-600
          rounded-sm
          shadow-lg
          transform transition-all duration-150
          ${isPressed ? "translate-y-1 shadow-md" : "shadow-xl"}
          hover:from-red-600 hover:to-red-800
          active:translate-y-1 active:shadow-md
          before:absolute before:inset-0
          before:bg-gradient-to-b before:from-transparent before:via-transparent before:to-black/20
          before:rounded-sm
          after:absolute after:inset-0
          after:border-2 after:border-gray-400/30
          after:rounded-sm
          group
        `}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
    >
      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-3 h-3 bg-gray-500 transform rotate-45 border border-gray-400"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-500 transform rotate-45 border border-gray-400"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gray-500 transform rotate-45 border border-gray-400"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gray-500 transform rotate-45 border border-gray-400"></div>

      {/* Button text */}
      <span className="relative z-10 text-white font-serif text-lg font-bold tracking-wider drop-shadow-lg">
        EXTRA BUTTON
      </span>

      {/* Inner highlight */}
      <div className="absolute top-1 left-1 right-1 h-1 bg-gradient-to-r from-red-400/50 to-red-300/30 rounded-sm"></div>
    </button>
  );
}
