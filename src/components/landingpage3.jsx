
"use client";
import { useState, useEffect } from "react";
import OnScrollAnimation from "./OnScrollAnimmation";


export default function Landingpage3() {

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
      <div className=" w-[100%] h-[100vh]  p-11 page3 pt-0 ">
          <div className="inpage3 w-[100%] h-[100%] hidden1 flex   rounded-2xl relative overflow-hidden p-8 lg:pl-14 pt-[5%] bg-white">
             <div className="text-white ininp3" >
                <h3 className="text-white">SECTORS</h3>
                <h2 className="hidden2">Our Services</h2>
                <p className="font-light hidden2" >We bring our expertise to multiple solar PV system services, developing the industry's future and redefining what is possible.</p>
             </div>
             <div className=" p3button h-[9vw] w-[9vw] hidden2 top-10 right-10   border-[2px] border-[rgba(255,255,255,1)] absolute  rounded-full items-center flex flex-col justify-center ">
                <h5 className="font-thin text-[rgba(255,255,255,1)]">EXPLORE </h5>
                <h5 className="font-thin text-[rgba(255,255,255,1)]">SECTORS </h5>
            </div>
          </div>
      </div>
      </>
    );
  }
  