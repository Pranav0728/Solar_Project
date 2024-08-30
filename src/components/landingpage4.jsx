import Image from "next/image";
import img1 from '../assets/aboutnew.jpg';
import Landingpage3 from "./landingpage3";
export default function Landingpage4() {
   const feature = [
    {
        num:"01",
        headline:"Solar Rooftop PV System",
        src:"/images/aboutnew.jpg",
        paragraph:"Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.",
    },
    {
        num:"01",
        headline:"Solar Rooftop PV System",
        src:"/images/aboutnew.jpg",
        paragraph: "abcd",
    },
    {
        num:"01",
        headline:"Solar Rooftop PV System",
        src:"/images/aboutnew.jpg",
        paragraph: "abcd",
    }
   ]


    return (
      <>
     
      <div className=" w-[100%] h-[auto] flex flex-col gap-11 p-11 pt-0 landpage4 ">
     
      {feature.map((feature, index) => (
          <div key={index} className=" w-[100%] h-[60vh]  flex landing4  rounded-2xl relative overflow-hidden p-8 pl-14 bg-white">
             <div className="text-black  w-[60%] h-[100%h] " >
                <h3>{feature.num}</h3>
                <h2>{feature.headline}</h2>
                <p className="font-light text absolute bottom-10" >{feature.paragraph}</p>
             </div>
             <div className=" w-[40%] h-[100%]  page4img overflow-hidden " >
             <Image src={feature.src} height={1000} width={1000} alt="" className="h-[100%] w-[100%] " />;
  
             </div>
          </div>))}
      </div>
      </>
    );
  }
