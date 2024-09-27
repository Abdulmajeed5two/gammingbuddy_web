import ThreeJsGame from "../Threejs/ThreeJsGame";
import Header from "@/components/Header";

export default function GamesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ThreeJsGame />
      </main>
    </div>
  );
}
