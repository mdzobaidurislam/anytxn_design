import Counter from "@/components/Counter/Counter";
import Finance from "@/components/Finance/Finance";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HomeHero from "@/components/HomeHero/HomeHero";
import Legacy from "@/components/Legacy/Legacy";
import Philosophy from "@/components/Philosophy/Philosophy";
import Technology from "@/components/Technology/Technology";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home">
      <Header/>
     <HomeHero/>
     <Finance/>
     <Philosophy/>
     <Technology/>
     <Counter/>
     <Legacy/>
     <Footer/>
    </div>
  );
}
