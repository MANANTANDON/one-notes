import { Header } from "@/components/Header";
import { Cards } from "@/components/Cards";

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
      <main className="relative">
        <Cards />
      </main>
    </div>
  );
}
