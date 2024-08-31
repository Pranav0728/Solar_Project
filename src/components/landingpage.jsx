import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg";


export default function Landingpage() {
    const features = [
        {
          src: "/images/temp2back.png",
          title: "SalahCar",
          src2:"/images/tem2.png",
          desc:"Unleashing Your Automotive Adventure",
          link:"https://thesalahcar.com/"
        },
       
        {
          src: "/images/temp5back.png",
          title: "Revol-Tail",
          src2:"/images/tem5.png",
          desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
          link:"https://silaaiwale.netlify.app/"
        },
       
        {
          src: "/images/projects/temp7back.png",
          title: "Sangeet",
          src2:"/images/projects/sangeet.png",
          desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
          link:"https://websangeet.netlify.app/"
        },
        {
          src: "/images/projects/girlcomputer.png",
          title: "Achivemap",
          src2:"/images/projects/tem4.png",
          desc:"Featured Website Design Projects Custom B2C, B2B and eCommerce solutions",
          link:"https://achievemap.vercel.app"
        },
      ];
    



  return (
    

    <>
    <div className=" w-[100%] h-[100vh] landingpage p-11 ">
        <div className="w-[100%] h-[100%]  flex flex-col justify-center rounded-2xl relative overflow-hidden p-11 pl-14 indiv">
         <h2 className="text-white"> Reshaping the Future of Sustainable Energy</h2>
         <div className="h-[7vw] w-[7vw] mt-[4vw] rounded-full bg-black downbutton"></div>
         
        </div>
    </div>
    </>
  );
}
