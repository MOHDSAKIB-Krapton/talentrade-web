import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../styles.css";
import { ArrowRightIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const gridRef = useRef(null); // Create a ref for the grid container
  const illustrationRef = useRef(null);

  useEffect(() => {
    // Apply GSAP animation to the background grid
    gsap.to(gridRef.current, {
      backgroundPosition: "100% 0", // Move grid to the right
      ease: "linear",
      repeat: -1, // Infinite repeat
      duration: 30, // Time it takes for one complete movement
    });
    gsap.fromTo(
      illustrationRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: 0.2,
        scrollTrigger: { trigger: gridRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <div
      ref={gridRef}
      className="min-h-[40rem] w-full bg-white bg-grid-black/[0.2] relative flex items-start md:items-center justify-center"
      style={{
        backgroundSize: "32px 32px", // Set the grid size for the background
        backgroundPosition: "0 0", // Initial position of the grid
      }}
    >
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]" />

      <section className="max-w-7xl mx-auto overflow-hidden flex flex-1 self-center">
        <div className="flex-1 flex items-start lg:items-start pt-10 md:py-20">
          <div className="text-center space-y-4 px-4 py-10 w-full">
            <h1 className="heading">
              Empower Your Journey: <br className="hidden lg:block" /> Share &{" "}
              <span className="highlight">Exchange Skills Effortlessly!</span>
            </h1>
            <p className="subheading">
              Become part of TalentTrade, a unique platform where skills are
              currency. Whether you're looking to teach and pass on your
              expertise or learn from others, this community thrives on the free
              exchange of knowledge. Earn TalentTrade coins by offering your
              skills and use them to acquire new ones, all without financial
              barriers. Empower yourself and others by engaging in skill-based
              learning and growth.
            </p>
            <Button
              variant="contained"
              className="w-auto cursor-pointer px-8"
              style={{
                background: "#9951DB",
                fontFamily: "sans-serif",
              }}
            >
              Join TalenTrade <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          ref={illustrationRef}
          className="hidden md:flex md:flex-1 border border-gray-200 rounded-lg overflow-hidden z-10"
        >
          <img
            src="./contact.jpg"
            alt="Contact img"
            className=" object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
