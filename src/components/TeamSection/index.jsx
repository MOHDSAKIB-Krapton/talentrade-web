import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  {
    name: "Mohd Sakib",
    role: "Founder & CEO",
    image: "./photo.jpg",
    bio: "Sakib is the visionary behind TalentTrade, passionate about creating a platform that empowers people to share knowledge and grow together.",
  },
  {
    name: "Tarush Ruhela",
    role: "Co-Founder & Head of Community",
    image: "./tarush.jpg",
    bio: "Tarush leads the community engagement initiatives, fostering a vibrant and inclusive environment for learners and teachers alike.",
  },
];

const TeamSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const team = teamRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;

    gsap.fromTo(
      team,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
    gsap.fromTo(
      heading,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
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
        delay: 0.6,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
  });

  return (
    <section
      id="team"
      ref={sectionRef}
      className="w-full h-full border-b border-gray-200"
    >
      <div className="max-w-7xl px-4 py-16 mx-auto">
        {/* Team Introduction */}
        <div className="text-center mb-16">
          <h3 ref={headingRef} className="heading">
            Meet Our <span className="highlight">Team</span>
          </h3>
          <p ref={descriptionRef} className="subheading">
            At TalentTrade, our team is dedicated to empowering individuals to
            learn and teach new skills. With a shared vision of a world where
            knowledge is accessible to everyone, we strive to create a
            community-driven platform that fosters growth, connection, and
            learning.
          </p>
        </div>

        <div ref={teamRef} className="">
          <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center border border-gray-200 max-w-96"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h4 className="font-semibold text-xl">{member.name}</h4>
                <p className="text-gray-600 font-semibold">{member.role}</p>
                {/* Bio Section */}
                <p className="mt-4 text-gray-500 text-sm text-ellipsis line-clamp-3">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
