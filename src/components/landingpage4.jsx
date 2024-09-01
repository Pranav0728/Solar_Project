"use client";

import Image from "next/image";
import img1 from '../assets/aboutnew.jpg';
import Landingpage3 from "./landingpage3";
import { useState, useEffect } from "react";
import OnScrollAnimation from "./OnScrollAnimmation";
export default function Landingpage4() {

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
        paragraph:"Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.",
      },
    {
        num:"01",
        headline:"Solar Rooftop PV System",
        src:"/images/aboutnew.jpg",
        paragraph:"Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.",
     }
   ]


    return (
      <>
     
      <div className=" w-[100%] h-[auto] flex flex-col gap-11 p-11 pt-0 landpage4 ">
     
      {feature.map((feature, index) => (
          <div key={index} className=" w-[100%] h-[60vh]  flex landing4 page4  rounded-2xl relative overflow-hidden p-8 lg:pl-14 bg-white">
             <div className="text-black flex flex-col w-[60%] h-[100%] hidden3 p4a" >
                <h3>{feature.num}</h3>
                <h2>{feature.headline}</h2>
                <p className="font-light text absolute bottom-10" >{feature.paragraph}</p>
             </div>
             <div className=" w-[40%] h-[100%]  page4img overflow-hidden hidden2 p4b" >
             <Image src={feature.src} height={1000} width={1000} alt="" className="h-[100%] w-[100%] p4img " />
  
             </div>
          </div>))}
      </div>
      </>
    );
  }
