"use client";
import Image from "next/image";
import aboutnew from "../assets/aboutnew.jpg";
import abcd from "../assets/getquote.jpg";

import React, { useRef, useEffect } from "react";
export default function Landingpage5() {
  const videoRef = useRef(null);
  return (
    <>
      <div className=" w-[100%] h-[100vh] page5  p-11 ">
        <div className="w-[100%] h-[100%]  bg-white flex  justify-center rounded-2xl relative overflow-hidden inp5 ">
          <div className="h-[100%] w-[50%] bg-black rounded-2xl p5a overflow-hidden">
          <video
            loop
            autoPlay
            className="mt-6 mx-auto rounded-lg shadow-lg "
          >
            <source src="/video/solarvedio.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
          <div className="h-[100%] w-[50%] lg:p-14 p5b flex flex-col gap-[1vw]">
            <h3>SOLUTIONS</h3>
            <h2>WE PLAN , WE BUILD , WE DEVELOP</h2>
            <p>
              We offer a comprehensive array of services, from the planning
              stage to post-construction facility management. You can count on
              the utmost professionalism in all that we do.
            </p>
            <div className="h-[9vw] w-[9vw]  border-[2px] border-[rgba(0,0,0,1)] p5button absolute bottom-10 rounded-full items-center flex flex-col justify-center ">
              <h5 className="font-thin text-[rgba(0,0,0,1)]">EXPLORE </h5>
              <h5 className="font-thin text-[rgba(0,0,0,1)]">SECTORS </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
