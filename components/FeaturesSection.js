import { Users, MessageCircle, Search } from "lucide-react"

export default function FeaturesSection() {
  return (
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
  );
}
