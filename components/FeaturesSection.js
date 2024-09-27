import { useEffect } from "react";
import gsap from "gsap";
import { Users, MessageCircle, Search, Video, Trophy, Gift } from "lucide-react";

export default function FeaturesSection() {
  useEffect(() => {
    gsap.fromTo(
      ".feature-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".feature-item",
          start: "top 80%",
          scroller: "[data-scroll-container]",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl mb-8 md:mb-12 lg:mb-16">
          Experience Gaming Like Never Before
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="#"
            className="feature-item flex flex-col items-start justify-between border border-red-600 p-10 h-72 transition hover:bg-red-600 hover:text-white hover:backdrop-blur-md"
          >
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xl font-bold">Find Teammates</h5>
              <Users className="w-6 h-6"/>
            </div>
            <p>
              Easily connect with players who share your gaming interests and skill level. Join forces and dominate the leaderboard together.
            </p>
          </a>
          <a
            href="#"
            className="feature-item flex flex-col items-start justify-between border border-red-600 p-10 h-72 transition hover:bg-red-600 hover:text-white hover:backdrop-blur-md"
          >
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xl font-bold">Chat & Coordinate</h5>
              <MessageCircle className="w-6 h-6"/>
            </div>
            <p>
              Built-in chat features to plan your gaming sessions and strategize with your team. Stay connected and communicate effectively.
            </p>
          </a>
          <a
            href="#"
            className="feature-item flex flex-col items-start justify-between border border-red-600 p-10 h-72 transition hover:bg-red-600 hover:text-white hover:backdrop-blur-md"
          >
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xl font-bold">Game Matchmaking</h5>
              <Search className="w-6 h-6"/>
            </div>
            <p>
              Advanced algorithms to match you with compatible gaming partners across various titles. Enjoy a seamless matchmaking experience.
            </p>
          </a>
          <a
            href="#"
            className="feature-item flex flex-col items-start justify-between border border-red-600 p-10 h-72 transition hover:bg-red-600 hover:text-white hover:backdrop-blur-md"
          >
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xl font-bold">Stream Integration</h5>
              <Video className="w-6 h-6"/>
            </div>
            <p>
              Integrate with popular streaming platforms. Share your gameplay live and engage with your audience in real-time.
            </p>
          </a>
          <a
            href="#"
            className="feature-item flex flex-col items-start justify-between border border-red-600 p-10 h-72 transition hover:bg-red-600 hover:text-white hover:backdrop-blur-md"
          >
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xl font-bold">Tournaments</h5>
              <Trophy className="w-6 h-6"/>
            </div>
            <p>
              Participate in and organize gaming tournaments. Compete for glory and prizes in a wide variety of games.
            </p>
          </a>
          <a
            href="#"
            className="feature-item flex flex-col items-start justify-between border border-red-600 p-10 h-72 transition hover:bg-red-600 hover:text-white hover:backdrop-blur-md"
          >
            <div className="flex items-center justify-between w-full">
              <h5 className="text-xl font-bold">Exclusive Content</h5>
              <Gift className="w-6 h-6"/>
            </div>
            <p>
              Access exclusive in-game content and rewards. Enjoy special items and bonuses available only to our users.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
