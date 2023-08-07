import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Header />
    </div>
  );
}
