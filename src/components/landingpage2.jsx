"use client";
import { useState, useEffect } from "react";
import OnScrollAnimation from "./OnScrollAnimmation";

export default function Landingpage2() {
  //On Scroll Animation Function
  useEffect(() => {
		if (typeof document !== 'undefined') {
			// will run in client's browser only
			var hiddenElements1 = document.querySelectorAll(".hidden3");
			var hiddenElements = document.querySelectorAll(".hidden2");
			var hiddenElement2 = document.querySelectorAll(".hidden1");
			var hiddenElement3 = document.querySelectorAll(".hidden4");
	
			//   var hiddenElement2 = document.querySelectorAll(".hidden3");
			// console.log(hiddenElements);
			OnScrollAnimation(hiddenElements1)
			OnScrollAnimation(hiddenElements)
			OnScrollAnimation(hiddenElement2)
			OnScrollAnimation(hiddenElement3)
	
			//    OnScrollAnimation(hiddenElement2)
		}
       
    }, []);
    return (
      <>
      <div className=" w-[100%] h-[100vh] landingpage p-11 page2 pt-0 overflow-hidden">
          <div className="w-full h-full flex p2box  rounded-2xl relative overflow-hidden p-8  lg:pl-14 bg-white">
           <div className="h-[100%] w-[60%] hidden3 p2a">
            <h3 className="font-thin">MISSION</h3>
            <h2 className="text-black font-semibold mt-[2%] mb-[2%]">About us</h2>
            <p className=" text-[.6rem] md:text-[1rem] font-thin">
            Vaikuntha Energies is a leading renewable energy company founded in 2019. Our core business is to provide comprehensive engineering, procurement, construction, operation, and maintenance services for sustainable and reliable solar PV power plants. Our team of experts is dedicated to providing personalized service and finding the perfect solution to meet your energy needs. Our team helps you meet your clean energy goals and switch to a more sustainable future with solar power.
            </p>
            <div className=" p2button h-[9vw] w-[9vw] mt-[2%] border-[2px] border-[rgba(0,0,0,0.5)]   rounded-full items-center flex justify-center ">
                <h4 className="font-thin text-black">LEARN HOW</h4>
            </div>
         
           </div>
           <div className="h-[100%] w-[40%]  mt-[1%] hidden2  rounded-2xl page2imgdiv p2b " ></div>
          </div>
      </div>
      </>
    );
  }
  