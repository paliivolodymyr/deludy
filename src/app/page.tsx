import SmoothScroll from "@/components/SmoothScroll";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Socials from "@/components/Socials";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Socials />
      <MapSection />
      <Footer />
      <StickyCallButton />
    </main>
  );
}
