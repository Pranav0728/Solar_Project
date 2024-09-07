"use client"
import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg";
import abcd from '../assets/getquote.jpg';
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Fragment } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Looder() {

    const container = useRef();
  
        useGSAP(
            () => {
                // gsap code here...
                var tl = gsap.timeline();
                tl.from('h3', { 
                 x:-1500,
                  stagger:0.3,
                  duration:2,
                  
                }); 
                // <-- automatically reverted
                tl.to('hr',{
                    x:3500,
                    stagger:0.3,
                    duration:2,
                                   },'a')
                tl.to('.textbox',{
                    x:1500,
                    stagger:0.3,
                    duration:2,
                    delay:0.3,
                },'a')
                tl.to('.upbox',{
                    y:-500,
    
                    duration:2,
                    
                },'b')
                tl.to('.downbox',{
                    y:500,
                   
                    duration:2,
                   
                },'b')
                gsap.to('.loader',{
                    display:"none",
                    
                })
            },
            { scope: container }
        );
        

    return (
    
       
        <div ref={container}  className=" looder flex items-center justify-center w-[100%] h-[100%]  fixed  z-40 bg-black  top-0 ">
             
             <div className="flex textbox z-50">
             <h3 className="text-white logo">N</h3>
             <h3 className="text-white logo">E</h3>
             <h3 className="text-white logo">E</h3>
             <h3 className="text-white logo">D</h3>
             <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;</Fragment>
             <h3 className="text-white logo">S</h3>
             <h3 className="text-white logo">0</h3>
             
             <h3 className="text-white logo">L</h3>
             <h3 className="text-white logo">A</h3>
             <h3 className="text-white logo">R</h3>
             
             </div>
             <hr className="absolute left-[-110%] w-[100%] h-[2px] bg-[#e3a558] shot z-4"></hr>
             <div className="h-[50%] w-[100%] absolute bg-black top-0 z-1 upbox"></div>
             <div className="h-[50%] w-[100%] absolute bg-black bottom-0 z-1 downbox"></div>
        </div>
       
      );



}