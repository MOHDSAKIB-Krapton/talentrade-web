import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { aeroplane } from "../../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../../index.css";

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const aeroplaneRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    gsap.to(aeroplaneRef.current, {
      right: isMobile ? "70%" : "100%", // Adjust for smaller screens
      bottom: isMobile ? "80%" : "90%",
      scrollTrigger: {
        trigger: aeroplaneRef.current,
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
        markers: false,
      },
    });

    gsap.to(circleRef.current, {
      width: isMobile ? "70vw" : "100vw",
      height: isMobile ? "70vw" : "100vw",
      right: isMobile ? "-10vw" : 0, // Adjust position for mobile
      borderRadius: isMobile ? "50%" : 0,
      scrollTrigger: {
        trigger: circleRef.current,
        start: "top 50%",
        end: "top 10%",
        scrub: 1,
        markers: false,
      },
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto h-screen relative overflow-hidden flex">
      <div className="w-full h-auto z-10 flex mt-20 lg:mt-0 items-start lg:items-center lg:h-screen absolute">
        <div className="text-start space-y-4 px-8 w-full">
          <h1 className="heading">
            Unlock Your Potential: <br /> Learn & Teach Skills With Ease!
          </h1>
          <p className=" opacity-75 lg:w-[40%] description">
            Join a community where talent meets opportunity. Learn from experts
            or share your knowledge with those eager to grow.
          </p>
          <Button
            variant="contained"
            className="w-auto cursor-pointer px-8"
            style={{ background: "#9951DB", fontFamily: "Poppins, sans-serif" }}
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className=" w-full h-full -z-10 ">
        <div
          className="right-80 bottom-40 absolute -rotate-90 z-10"
          ref={aeroplaneRef}
        >
          <img src={aeroplane} alt="aeroplane image" />
        </div>

        <div
          ref={circleRef}
          className="w-[25vw] h-[25vw]  rounded-full absolute -bottom-8 -right-8 bg-purple-300"
        ></div>
      </div>
    </section>
  );
}

export default HeroSection;
