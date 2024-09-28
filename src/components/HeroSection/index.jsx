import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import { aeroplane } from "../../assets";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import "../../index.css";
import "../../styles.css";

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
    <section className="max-w-7xl mx-auto relative h-screen overflow-hidden flex">
      <div className=" h-auto z-10 flex mt-10 lg:mt-20 items-start lg:items-start absolute lg:h-screen">
        <div className="text-start space-y-4 px-4 py-10 w-full lg:max-w-[80%]">
          <h1 className="heading">
            Empower Your Journey: <br className="hidden lg:block" /> Share &{" "}
            <span className="highlight">Exchange Skills Effortlessly!</span>
          </h1>
          <p className="subheading">
            Become part of TalentTrade, a unique platform where skills are
            currency. Whether you're looking to teach and pass on your expertise
            or learn from others, this community thrives on the free exchange of
            knowledge. Earn TalentTrade coins by offering your skills and use
            them to acquire new ones, all without financial barriers. Empower
            yourself and others by engaging in skill-based learning and growth.
          </p>
          <Button
            variant="contained"
            className="w-auto cursor-pointer px-8"
            style={{ background: "#9951DB", fontFamily: "Poppins, sans-serif" }}
          >
            Join TalentTrade
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
