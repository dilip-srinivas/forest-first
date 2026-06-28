import Hero from "@/components/Hero";
import Pillar1 from "@/components/Pillar1";
import Pillar2 from "@/components/Pillar2";
import Pillar3 from "@/components/Pillar3";
import Pillar4 from "@/components/Pillar4";
import Partnerships from "@/components/Partnerships";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Semantic Main Content Section */}
      <main className="flex-grow w-full">
        <Hero />
        <Pillar1 />
        <Pillar2 />
        <Pillar3 />
        <Pillar4 />
        <Partnerships />
      </main>
      <Footer />
    </div>
  );
}
