"use client"
import Image from "next/image";
import Landingpage from "@/components/landingpage";
import Landingpage2 from "@/components/landingpage2";
import Landingpage3 from "@/components/landingpage3";
import Footer from "@/components/footer";
import Landingpage4 from "@/components/landingpage4";
import Landingpage5 from "@/components/landingpage5";
import Landingpage6 from "@/components/landingpage6";
import Landingpage7 from "@/components/landingpage7";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })
  return (
    <ReactLenis root>
    <main className="">
      <Landingpage/>
      <Landingpage2/>
      <Landingpage3/>
      <Landingpage4/>
      <Landingpage5/>
      <Landingpage6/>
      <Landingpage7/>
    </main>
    </ReactLenis>
  );
}
