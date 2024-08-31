import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg"
export default function Landingpage() {
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
