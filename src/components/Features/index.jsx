import React, { useEffect, useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { features } from "./constant";
import "../../styles.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function Features() {
  const heading = "Unlock Endless Opportunities to Share and Gain Knowledge";

  const description =
    "Join our vibrant TalentTrade community where learning and teaching go hand in hand. " +
    "Whether you’re a seasoned expert or a curious learner, our platform empowers you to share " +
    "your unique skills while discovering new talents. Through interactive sessions, personalized " +
    "learning paths, and an intuitive skill exchange system, we foster an environment where growth " +
    "and learning are mutual. Earn coins by teaching, then use them to unlock new skills, ensuring " +
    "a fulfilling, collaborative experience for all. Embrace the future of skill-sharing today!";

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef([]);

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

    // Animate the cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, x: 100 }, // Cards will start from the right (x: 100)
      {
        opacity: 1,
        x: 0, // Cards will move to their original position
        duration: 0.8, // Duration for smoother animation
        ease: "power2.out", // Ease to create a smooth effect
        stagger: 0.2, // Reduced stagger for a more fluid transition
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="w-full py-16 bg-gray-50 text-center border border-gray-200"
    >
      <div className=" max-w-7xl mx-auto px-4 space-y-20">
        <div className="w-full lg:w-[80%]">
          <h2 ref={headingRef} className={`heading text-start`}>
            Unlock Endless Opportunities to Share and <br />{" "}
            <span className="highlight">Gain Knowledge</span>
          </h2>
          <p ref={descriptionRef} className="subheading text-start">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="shadow-sm hover:shadow-md cursor-pointer rounded-lg duration-500 ease-in-out transform hover:scale-[1.03] border border-gray-200 bg-white"
            >
              <CardContent>
                <div className="flex justify-center mb-4">
                  <img src={feature.icon} alt="icon gif" className="w-24" />
                </div>
                <h2 className="text-xl font-medium">{feature.title}</h2>
                <p className="subheading text-sm">{feature.description}</p>
              </CardContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
