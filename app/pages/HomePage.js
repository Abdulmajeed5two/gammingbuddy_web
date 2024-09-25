import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import FeaturesSection from "@/components/FeaturesSection"
import Footer from "@/components/Footer"
import Background3D from "../Threejs/Background3D"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Background3D />
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
