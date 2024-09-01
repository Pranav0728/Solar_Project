"use client"
import Image from "next/image";
import dummyimg from "../assets/getquote.jpg"
import React, { useRef, useEffect } from 'react';
export default function Landingpage7() {

    const videoRef = useRef(null);
    const provide = [
        {
            num:"01",
            name:"Project Designs",
            src:"/images/aboutnew.jpg",
            paragraph:"Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",
        },
        {
            num:"02",
            name:"Construction Management",
            src:"/images/aboutnew.jpg",
            paragraph:"Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",

        },
        {
            num:"02",
            name:"Site Evaluation",
            paragraph:"Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.",
          

        }
        
       ]


    useEffect(() => {
        setTimeout(()=>{
          videoRef.current.play()
        },5000)
      }, []);


  return (
  

    <>
    <div className=" w-[100%] h-[180vh] p-11 bg-[#cecdc9] ">
        <div className="w-[100%] h-[100%]  gap-[20px] p-11 pl-15 bg-[#b29d87] flex flex-col  rounded-2xl relative overflow-hidden ">
            <h2>PROJECTS</h2>
            <section className="w-[100%] h-full grid grid-cols-3">
              <div className="h-[100%] flex flex-col ">
                <div className="h-[50%] w-[100%] p-5  rounded-2xl "> 
                  <div className="h-[100%] w-[100%] relative cardspage7 text-white">
                  <Image src={dummyimg} height={1000} width={1000} alt="" className="h-[100%] w-[100%] rounded-3xl imgpage7 " />
                <h2 className="absolute  bottom-[15%]  left-[10%]">01</h2>
                <h3 className="absolute bottom-[10%]  left-[10%]">Sisverstone Community Center</h3>
               
                  </div>
               </div>
              <div className="h-[50%] w-[100%] p-5  rounded-2xl "> 

              <div className="h-[100%] w-[100%] relative cardspage7 text-white">
                  <Image src={dummyimg} height={1000} width={1000} alt="" className="h-[100%] w-[100%] rounded-3xl imgpage7 " />
                <h2 className="absolute  bottom-[15%]  left-[10%]">01</h2>
                <h3 className="absolute bottom-[10%]  left-[10%]">Sisverstone Community Center</h3>
               
                  </div>
              </div>
              </div>
              <div className="h-[100%] flex flex-col justify-center ">
                <div className="h-[50%] w-[100%] p-5  rounded-2xl"> 

                <div className="h-[100%] w-[100%] relative cardspage7 text-white">
                  <Image src={dummyimg} height={1000} width={1000} alt="" className="h-[100%] w-[100%] rounded-3xl imgpage7 " />
                <h2 className="absolute  bottom-[15%]  left-[10%]">01</h2>
                <h3 className="absolute bottom-[10%]  left-[10%]">Sisverstone Community Center</h3>
               
                  </div>
                </div> 
              </div>
              <div className="h-[100%] flex flex-col ">
              <div className="h-[50%] w-[100%] p-5  rounded-2xl"> 
              <div className="h-[100%] w-[100%] relative cardspage7 text-white">
                  <Image src={dummyimg} height={1000} width={1000} alt="" className="h-[100%] w-[100%] rounded-3xl imgpage7 " />
                <h2 className="absolute  bottom-[15%]  left-[10%]">01</h2>
                <h3 className="absolute bottom-[10%]  left-[10%]">Sisverstone Community Center</h3>
               
                  </div>
                 </div>
              
              </div>
            </section>
        </div>
    </div>
    </>
  );
}