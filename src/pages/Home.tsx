function Home() {
  return (
    <div className="relative min-h-screen font-gruppe">
      {/* Top Section */}
      <div className="relative z-20 bg-white/80 backdrop-blur-md min-h-dvh flex flex-col px-40 justify-center space-y-3">
        <div className="font-semibold space-y-2">
          <h1 className="text-7xl">Tap Into Victory</h1>
          <h2 className="text-7xl ms-40">Play Desto Finger</h2>
        </div>

        <div className="ms-40 space-y-0.5 font-medium">
          <p>
            From Ethiopia to the World, Challenge Your Mind with Desto Finger — the Ultimate Reflex Game
          </p>
          <p>Try Desto Finger Now!</p>
        </div>
      </div>

      {/* Middle Parallax Section */}
      <div
        className="relative z-10 min-h-dvh bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/hero-background.png)" }}
      >
        {/* Optional centered image or overlay text */}
        <div className="flex items-center justify-center h-full">
          <img
            src="/centered-image.png"
            alt="Centered Image"
            className="max-w-xl object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="relative z-20 bg-white/80 backdrop-blur-md min-h-dvh flex flex-col px-40 justify-center space-y-3">
        <div className="font-semibold space-y-2">
          <h1 className="text-7xl">Tap Into Victory</h1>
          <h2 className="text-7xl ms-40">Play Desto Finger</h2>
        </div>

        <div className="ms-40 space-y-0.5 font-medium">
          <p>
            From Ethiopia to the World, Challenge Your Mind with Desto Finger — the Ultimate Reflex Game
          </p>
          <p>Try Desto Finger Now!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;