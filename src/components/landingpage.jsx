"use client";

import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg"
import { Lobster  } from 'next/font/google';
import { Rokkitt  } from 'next/font/google';
import { Oswald  } from 'next/font/google';
import { Courgette } from 'next/font/google';
import { useState, useEffect } from "react";
import OnScrollAnimation from "./OnScrollAnimmation";


// Fonts Families
const lobster  = Lobster ({ 
  subsets: ['latin'],
  weight: ['400'] 
})

const rokkitt  = Rokkitt ({ 
  subsets: ['latin'],
  weight: ['200'],
  preload: false,
})


const oswald  = Oswald ({ 
  subsets: ['latin'],
  weight: ['200'],
  preload: false,
})

const courgette = Courgette({ 
  subsets: ['latin'],
  weight: ['400'],
  preload: false,
})

export default function Landingpage() {


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
    <div className=" w-[100%] h-[100vh] landingpage p-11 ">
        <div className="w-[100%] h-[100%] hidden2  flex flex-col justify-center rounded-2xl relative overflow-hidden p-11 pl-14 indiv">
         <h2 className="text-white text-[3rem] hidden1" > Reshaping the Future of Sustainable Energy</h2>
         <div className="h-[7vw] w-[7vw] mt-[4vw] rounded-full bg-black downbutton"></div>
         
        </div>
    </div>
    </>
  );
}
