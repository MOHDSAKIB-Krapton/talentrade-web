import React, { useEffect, useRef } from "react";
import JoinTalentrade from "../common/visuals/JoinTalentrade";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FeaturesData } from "./constant";

gsap.registerPlugin(ScrollTrigger);

const FeaturesScreen = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;

    // Animate heading and description
    gsap.fromTo(
      heading,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
    gsap.fromTo(
      description,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
  }, []);

  const flowHeading =
    "How TalentTrade Works: A Seamless Skill Exchange Journey";

  const flowDescription =
    "TalentTrade simplifies the process of teaching and learning by offering a structured and rewarding system. " +
    "Our platform is designed to make skill exchange seamless and enjoyable for everyone. Here’s how it works:";

  return (
    <>
      <div ref={sectionRef} className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto py-16 flex flex-col gap-y-20 ">
          <div className=" px-4">
            <h1 ref={headingRef} className="heading text-start xl:text-center">
              {flowHeading}
            </h1>
            <p
              ref={descriptionRef}
              className="subheading text-start xl:text-center xl:w-[90%] mx-auto"
            >
              {flowDescription}
            </p>
          </div>
          {FeaturesData.map((feature, index) => {
            return (
              <div key={index}>
                <JoinTalentrade feature={feature} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeaturesScreen;
