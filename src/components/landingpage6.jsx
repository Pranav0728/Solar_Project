
"use client"
import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg";
import abcd from '../assets/getquote.jpg';
import React, { useRef, useEffect } from 'react';
export default function Landingpage6() {

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
    <div className=" w-[100%] page6 p-11 ">
        <div className="w-[100%] h-[100%] gap-[50px] p-11 pl-15 bg-white flex flex-col  rounded-2xl relative overflow-hidden ">
          <h2>WHAT WE PROVIDE </h2>
          <hr></hr>
          <div className="w-[100%] flex justify-between items-center">
            <h5>01</h5>
            <h3>Project Designs</h3>
             <p className="font-thin">Describe the service and how customers or clients can benefit from it. It’s an opportunity to add a short description with relevant details, like pricing, duration and how to book.</p>
          </div>
          {provide.map((provide, index) => (
              <>
                <hr/>
             <div className="w-[100%] flex justify-between items-center">
               <h5>{provide.num}</h5>
               <h3>{provide.name}</h3>
                <p className="font-thin">{provide.paragraph}</p>
             </div>
              </>
           
          ))}
           <div className="h-[9vw] w-[9vw]  border-[1px] border-[rgba(0,0,0,0.7)] self-center rounded-full items-center flex flex-col justify-center ">
                <h5 className="font-thin text-[rgba(0,0,0,0.7)]">EXPLORE </h5>
                <h5 className="font-thin text-[rgba(0,0,0,0.7)]">SECTORS </h5>
            </div>
        </div>
    </div>
    </>
  );
}