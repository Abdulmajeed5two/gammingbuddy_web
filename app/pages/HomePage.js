import { useEffect } from "react";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import MobileSection from "@/components/MobileSection";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new locomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    // Proxy GSAP ScrollTrigger with Locomotive Scroll
    ScrollTrigger.scrollerProxy("[data-scroll-container]", {
      scrollTop(value) {
        return arguments.length
          ? scroll.scrollTo(value, 0, 0)
          : scroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      pinType: document.querySelector("[data-scroll-container]").style.transform
        ? "transform"
        : "fixed",
    });

    // Sync Locomotive Scroll with GSAP ScrollTrigger
    scroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.addEventListener("refresh", () => scroll.update());
    ScrollTrigger.refresh();

    // Clean up Locomotive Scroll
    return () => {
      scroll.destroy();
      ScrollTrigger.removeEventListener("refresh", () => scroll.update());
    };
  }, []);

  return (
    <div data-scroll-container className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MobileSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
