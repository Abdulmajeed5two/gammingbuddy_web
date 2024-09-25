import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="mt-16 flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Find Your Perfect Gaming Partner
            </h1>
            <p className="mx-auto max-w-[700px] text-black md:text-xl dark:text-gray-400">
              Connect with gamers worldwide, make new friends, and level up your gaming experience with GamingBuddy.
            </p>
          </div>
          <div className="space-x-4">
            <Button>Get Started</Button>
            <Button variant="outline">DownloadApp</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
