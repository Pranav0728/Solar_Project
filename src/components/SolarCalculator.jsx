"use client"; // Add this at the top of the file

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";


export default  function Header() {
  const [active, setActive] = useState(false);

  useEffect(() => {

    // Ensure we're in a browser environment
    if (typeof window !== "undefined") {
      const isSticky = () => {
        const header = document.querySelector(".header-section");
        const scrollTop = window.scrollY;
        if (header) {
          scrollTop >= 80
            ? header.classList.add("is-sticky")
            : header.classList.remove("is-sticky");
        }
      };

      window.addEventListener("scroll", isSticky);

      // Add route change handler to close the menu
      const handleRouteChange = () => {
        setActive(false); // Close the menu on route change
      };


      // Cleanup on component unmount
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }
  }, );

  return (
    <div className="">
    
    </div>
  );
}