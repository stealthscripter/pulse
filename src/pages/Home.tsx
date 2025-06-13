import { Play, SkipForward, StepForward } from "lucide-react";
import { Link } from "react-router";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import "./Home.css";
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];

function Home() {
  return (
    <div className="relative min-h-screen font-gruppe">
      {/* Top Section */}
      <div className="relative z-20 backdrop-blur-md h-[80dvh] flex flex-col px-40 justify-center space-y-3">
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
          <Link to={"/play"}>
            <button className="flex items-center gap-x-2 cursor-pointer hover:opacity-70">
              Try Now <StepForward size={20} />
            </button>
          </Link>
        </div>
        <div className="text-white absolute bottom-5 text-sm left-5 w-96 font-light">
          <p>
            Rooted in Tradition Built for Battle Experience the thrill of
            Ethiopian-inspired gameplay with Desto Finger where every tap tells
            a story.
          </p>
        </div>
      </div>
      {/* history section */}
      <div className="relative z-20 backdrop-blur-md min-h-dvh grid grid-cols-2 w-full items-start pt-40 gap-x-5 px-5">
        <div className="space-y-4">
          <h1 className="text-5xl">History</h1>
          <p className="text-2xl font-medium w-xl">
            The Fusion of Resistance, Rhythm, and Resilience Behind Desto Finger
            Caw Cawter Oli
          </p>
        </div>
        <div className="space-y-6">
          <p className="text-sm font-light">
            In Ethiopia, there's a cultural tendency to reshape foreign words
            and ideas, making them uniquely Ethiopian. For instance, the word
            "congratulations" is commonly shortened to "congra," and the name
            "Bob Marley" is often referred to as "Bomb Marly." This cultural
            adaptability extends to everything, including music, language, and
            even games.
          </p>

          <p className="text-sm font-light">
            During the five-year Italian occupation of Ethiopia (1936–1941),
            this ability to reshape and adapt foreign influences led to the
            transformation of a simple just finger can count song into the game
            Desto Finger Caw Cawter Oli
          </p>

          <p className="text-sm font-light">
            The song, originally in English, was converted into an Ethiopian
            version, and the game itself was invented during the early years of
            the occupation by combining the just finger can count song and the
            Italian hand game Morra which has roots in ancient Roman and Greek
            times. This fusion of elements created something new yet familiar,
            reflecting the blend of cultures.
          </p>
        </div>
      </div>
      {/* Bottom Section */}
      <div
        className="relative z-20 backdrop-blur-md min-h-dvh flex flex-col w-full scrollbar-hide px-5"
        style={{
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <h1 className="text-xl font-medium mb-3 flex gap-x-2">
          How to Play{" "}
          <span>
            <Play />
          </span>
        </h1>
        <StickyScroll content={content} />
      </div>
    </div>
  );
}

export default Home;
