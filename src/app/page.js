import Image from "next/image";
import CallToAction_1 from "./_Components/CallToAction_1/CallToAction_1";
import Marquee from "./_Components/Marquee/Marquee";
import Hero from "./_Components/Hero/Hero";
import Features from "./_Components/Features/Features";


export default function Home() {
  return (
   <>
   <Hero />
   <CallToAction_1 />
   <Marquee />
   <Features />
   </>
  );
}
