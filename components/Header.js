import { Gamepad2 } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-4 px-8 lg:px-16 py-5 flex items-center shadow-md bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg mx-auto max-w-screen-xl w-full">
      <Link className="flex items-center justify-center" href="/">
        <Gamepad2 className="h-6 w-6 mr-2 text-red-600" />
        <span className="font-bold text-lg text-gray-800 dark:text-gray-200">GamingBuddy</span>
      </Link>
      <nav className="ml-auto flex gap-8">
        <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4" href="/">Home</Link>
        <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4" href="/#features">Features</Link>
        <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4" href="/games">Games</Link>
        <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4" href="/about">About</Link>
        <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4" href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
