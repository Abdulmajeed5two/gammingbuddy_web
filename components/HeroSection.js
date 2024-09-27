import { useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Background3D from "@/app/Threejs/Background3D";

export default function HeroSection() {
  useEffect(() => {
    // GSAP animation for title and text
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.2, ease: "power4.out" }
    );
    gsap.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5, ease: "power4.out" }
    );
  }, []);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative">
      <Background3D />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mt-16 flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="hero-title text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Find Your Perfect Gaming Partner
            </h1>
            <p className="hero-text mx-auto max-w-[700px] text-black md:text-xl dark:text-gray-400">
              Connect with gamers worldwide, make new friends, and level up your gaming experience.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="outline">Download App</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
