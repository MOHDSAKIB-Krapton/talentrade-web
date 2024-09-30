import { motion } from "framer-motion";
import {
  LogIn,
  UserPlus,
  BookOpen,
  Bell,
  Video,
  Coins,
  GraduationCap,
} from "lucide-react";
import "../../styles.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const elements = [
  {
    title: "Sign Up",
    description: "Create your account and join the TalentTrade community.",
    icon: LogIn,
    color: "#8CC63F",
  },
  {
    title: "Set Up Profile",
    description: "List your skills to teach and skills you want to learn.",
    icon: UserPlus,
    color: "#29ABE2",
  },
  {
    title: "Offer to Teach",
    description: "Share your expertise by offering to teach your skills.",
    icon: BookOpen,
    color: "#39B54A",
  },
  {
    title: "Accept Requests",
    description: "Engage with learners by accepting teaching requests.",
    icon: Bell,
    color: "#FBB03B",
  },
  {
    title: "Teach",
    description: "Conduct teaching sessions and share your knowledge.",
    icon: Video,
    color: "#FF00FF",
  },
  {
    title: "Earn Coins",
    description: "Get rewarded with TalentTrade coins for your teaching.",
    icon: Coins,
    color: "#FF6600",
  },
  {
    title: "Learn",
    description: "Use your earned coins to learn new skills from others.",
    icon: GraduationCap,
    color: "#9E005D",
  },
];

export default function TalentTradeCycle() {
  const flowHeading =
    "How TalentTrade Works: A Seamless Skill Exchange Journey";

  const flowDescription =
    "TalentTrade simplifies the process of teaching and learning by offering a structured and rewarding system. " +
    "Our platform is designed to make skill exchange seamless and enjoyable for everyone. Here’s how it works:";

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

  return (
    <div ref={sectionRef} className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col gap-y-20 ">
        <div>
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

        <div className=" flex flex-col items-center justify-center p-4 overflow-hidden">
          <div className="flex flex-col gap-y-5 mb-4 justify-center items-center">
            <div className=" flex flex-col gap-y-2 justify-center items-center w-full mx-auto lg:w-[60%] ">
              <h2 className="text-xl font-semibold tracking-wide text-center">
                Create Your Account
              </h2>
              <p className="text-center text-gray-600 font-medium text-sm px-2">
                Join TalentTrade and unlock a world of skill exchange. Set up
                your profile, connect with experts, and start your learning
                journey by teaching and learning new skills.
              </p>
            </div>

            <div
              className=" w-32 h-32 md:w-40 md:h-40 rounded-full bg-white cursor-pointer border-b-8  border-red-600 flex justify-center items-center hover:transform hover:scale-105 ease-in-out duration-500"
              style={{
                boxShadow:
                  "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)", // Custom shadow control
              }}
            >
              <img
                src="./team.png"
                alt="Join talentrade"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>

            <div className="h-40 w-[2px] bg-gray-600 rounded-xl relative">
              <div className="w-1 h-1 rounded-full bg-black absolute top-0 transform -translate-x-1/4" />
              <div className="w-1 h-1 rounded-full bg-black absolute bottom-0 transform -translate-x-1/4" />
            </div>
          </div>

          <div className=" flex flex-col gap-y-2 justify-center items-center mb-24 w-full mx-auto lg:w-[60%]">
            <h2 className="text-xl font-semibold tracking-wide text-center">
              Offer to Teach
            </h2>
            <p className="text-center text-gray-600 font-medium text-sm px-2">
              Share your expertise with the TalentTrade community. Help others
              grow by offering to teach the skills you've mastered.
            </p>
          </div>

          <div className="border gray-200 flex justify-center items-center rounded-full w-80 h-80 md:w-96 md:h-96 relative">
            <h2 className="text-2xl font-semibold tracking-wide flex flex-col justify-center items-center">
              Talentrade
              <span className="text-xl font-semibold text-gray-600">cycle</span>
            </h2>

            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full absolute top-0 transform -translate-y-1/2 bg-white cursor-pointer border-b-8  border-green-600 flex justify-center items-center hover:scale-105 ease-in-out duration-500"
              style={{
                boxShadow:
                  "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)", // Custom shadow control
              }}
            >
              <img
                src="./discussion.png"
                alt="Teach others image"
                className="w-16 h-16 md:w-20 md:h-20 object-contain"
              />
            </div>
            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full absolute bottom-0 -translate-x-full bg-white border-r-8 border-blue-600 transform -rotate-[35deg] justify-center items-center flex hover:scale-105 ease-in-out duration-500 cursor-pointer"
              style={{
                boxShadow:
                  "-6px 10px 15px -3px rgba(0, 0, 0, 0.1), -6px 4px 6px -2px rgba(0, 0, 0, 0.05)", // Custom shadow control
              }}
            >
              <img
                src="./presentation.png"
                alt="presentation image"
                className="w-16 h-16 md:w-20 md:h-20 object-contain transform rotate-[35deg]"
              />
            </div>

            <div
              className="w-32 h-32 md:w-40 md:h-40 rounded-full absolute bottom-0 transform translate-x-full bg-white border-t-8 border-purple-600 -rotate-[55deg] justify-center items-center flex hover:scale-105 ease-in-out duration-500 cursor-pointer"
              style={{
                boxShadow:
                  "6px 10px 15px -3px rgba(0, 0, 0, 0.1), 6px 4px 6px -2px rgba(0, 0, 0, 0.05)", // Custom shadow control
              }}
            >
              <img
                src="./coin.png"
                alt="Coins image"
                className="w-16 h-16 md:w-20 md:h-20 object-contain transform rotate-[55deg]"
              />
            </div>
          </div>

          <div className="flex justify-evenly items-center mt-10 mx-auto">
            <div className=" flex flex-col gap-y-2 justify-center items-center mb-24 flex-1 w-full mx-auto lg:w-[30%]">
              <h2 className="text-xl font-semibold tracking-wide text-center">
                Learn New Skills
              </h2>
              <p className="text-center text-gray-600 font-medium text-sm px-2">
                Use your earned TalentTrade coins to learn valuable skills from
                others and expand your knowledge.
              </p>
            </div>

            <div className=" flex flex-col gap-y-2 justify-center items-center mb-24 flex-1 w-full mx-auto lg:w-[30%]">
              <h2 className="text-xl font-semibold tracking-wide text-center">
                Earn Coins
              </h2>
              <p className="text-center text-gray-600 font-medium text-sm px-2">
                Get rewarded with TalentTrade coins for every teaching session.
                Use your coins to unlock new learning opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
