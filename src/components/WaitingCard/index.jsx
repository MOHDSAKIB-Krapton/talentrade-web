import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const WaitingCard = () => {
  const sectionRef = useRef(null);
  const namesRef = useRef([]);
  const countRef = useRef(null);

  const [waitlistCount] = useState(4000);
  const [names] = useState([
    "Emma Thompson",
    "Liam Wilson",
    "Olivia Martinez",
    "Noah Chen",
    "Ava Patel",
  ]);

  // This useeffect contains the gsap animations
  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      namesRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );

    gsap.to(
      {},
      {
        duration: 1,
        ease: "power1.out",
        scrollTrigger: { trigger: section, start: "top 80%", once: true },
        onUpdate: function () {
          if (countRef.current) {
            const count = Math.floor(this.progress() * waitlistCount);
            countRef.current.textContent = `${count}+`;
          }
        },
      }
    );
  }, []);

  return (
    <section id="waitCard" ref={sectionRef}>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
          <h1 className="heading text-center mb-6" style={{ color: "#4f46e5" }}>
            Join Our Waitlist
          </h1>
          <div className="text-center mb-8">
            <p className="text-lg text-gray-600">Current Waitlist</p>
            <p
              ref={countRef}
              className="text-5xl font-bold text-indigo-500 transition-all duration-500 ease-in-out transform hover:scale-110"
            >
              0
            </p>
          </div>
          <ul className="space-y-3">
            <p className="text-sm text-gray-600 underline">Top Names</p>
            {names.map((name, index) => (
              <li
                key={index}
                ref={(el) => (namesRef.current[index] = el)}
                className={`bg-indigo-50 rounded-lg p-3 shadow transition-all duration-500 ease-in-out ${
                  index === 0 ? "animate-fade-in" : ""
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                    {name.charAt(0)}
                  </div>
                  <span className="text-gray-800">{name}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WaitingCard;
