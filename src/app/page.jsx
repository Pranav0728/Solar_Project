import Image from "next/image";
import Landingpage from "@/components/landingpage";
import Landingpage2 from "@/components/landingpage2";
import Landingpage3 from "@/components/landingpage3";
export default function Home() {
  return (
    <main className="">
      <Landingpage/>
      <Landingpage2/>
      <Landingpage3/>
    </main>
  );
}
