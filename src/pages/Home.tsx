import { CornerRightDown, SkipForward, StepForward } from "lucide-react";

function Home() {
  return (
    <div className="relative min-h-screen font-gruppe">
      {/* Top Section */}
      <div className="relative z-20 bg-white/80 backdrop-blur-md h-[80dvh] flex flex-col px-40 justify-center space-y-3">
        <div className="font-semibold space-y-2">
          <h1 className="text-7xl">Tap Into Victory</h1>
          <h2 className="text-7xl ms-40">Play Desto Finger</h2>
        </div>

        <div className="ms-40 space-y-0.5 font-medium">
          <p>
            From Ethiopia to the World, Challenge Your Mind with Desto Finger —
            the Ultimate Reflex Game
          </p>
          <p>Try Desto Finger Now!</p>
        </div>
      </div>

      {/* Middle Parallax Section */}
      <div
        className="relative z-10 min-h-dvh bg-cover bg-center bg-fixed brightness-125"
        style={{ backgroundImage: "url(/hero-background.png)" }}
      >
        <div className="text-white absolute right-6 top-5">
          <button className="flex items-center gap-x-2 cursor-pointer hover:opacity-70">
            Learn more <SkipForward size={20} />
          </button>
        </div>
        <div className="text-white absolute right-6 bottom-5">
          <button className="flex items-center gap-x-2 cursor-pointer hover:opacity-70">
            Try Now <StepForward size={20} />
          </button>
        </div>
        <div className="text-white absolute bottom-5 text-sm left-5 w-96 font-light">
          <p>
            Rooted in Tradition Built for Battle Experience the thrill of
            Ethiopian-inspired gameplay with Desto Finger where every tap tells
            a story.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-20 bg-white/80 backdrop-blur-md min-h-dvh flex flex-col px-40 justify-center space-y-3"></div>
    </div>
  );
}

export default Home;
