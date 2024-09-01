
"use client"
import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg";
import abcd from '../assets/getquote.jpg';
import React, { useRef, useEffect } from 'react';
export default function Landingpage5() {

    const videoRef = useRef(null);
    


    useEffect(() => {
        setTimeout(()=>{
          videoRef.current.play()
        },5000)
      }, []);


  return (
  

    <>
    <div className=" w-[100%] h-[100vh] page5  p-11 ">
        <div className="w-[100%] h-[100%]  bg-white flex  justify-center rounded-2xl relative overflow-hidden ">
           <div className="h-[100%] w-[50%] bg-black rounded-2xl">
           <video autoPlay="autoplay" ref={videoRef} loop="loop" muted  className="h-[100%] w-[100%]">
        <source src="../assets/solarvedio.mp4" type="video/mp4" />
      </video>
           </div>
           <div className="h-[100%] w-[50%] bg-slate-500 p-11 ">
            <h3>SOLUTIONS</h3>
            <h2>WE PLAN , WE BUILD , WE DEVELOP</h2>
            <p>We offer a comprehensive array of services, from the planning stage to post-construction facility management. You can count on the utmost professionalism in all that we do.</p>
            <div className="h-[9vw] w-[9vw]  border-[2px] border-[rgba(255,255,255,1)]  rounded-full items-center flex flex-col justify-center ">
                <h5 className="font-thin text-[rgba(255,255,255,1)]">EXPLORE </h5>
                <h5 className="font-thin text-[rgba(255,255,255,1)]">SECTORS </h5>
            </div>
           </div>
        </div>
    </div>
    </>
  );
}
