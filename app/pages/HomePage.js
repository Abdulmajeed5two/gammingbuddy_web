import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gamepad2, Users, MessageCircle, Search } from "lucide-react"
import Link from "next/link"
import Background3D from "../Threejs/Background3D"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen relative">
        <Background3D />
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6 mr-2" />
          <span className="font-bold">GamingBuddy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Find Your Perfect Gaming Partner
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with gamers worldwide, make new friends, and level up your gaming experience with GamingBuddy.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Sign up to get notified when we launch. <Link className="underline underline-offset-2" href="#">Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Experience Gaming Like Never Before
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our app brings gamers together, making it easy to find the perfect teammate for any game.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Mobile App Mockup"
                className="mx-auto aspect-[1/2] overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="1000"
                src="/assets/feed.png"
                width="500"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold"><Users className="inline-block w-5 h-5 mr-2" />Find Teammates</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Easily connect with players who share your gaming interests and skill level.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold"><MessageCircle className="inline-block w-5 h-5 mr-2" />Chat & Coordinate</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Built-in chat features to plan your gaming sessions and strategize with your team.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold"><Search className="inline-block w-5 h-5 mr-2" />Game Matchmaking</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Advanced algorithms to match you with compatible gaming partners across various titles.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 GamingBuddy. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}