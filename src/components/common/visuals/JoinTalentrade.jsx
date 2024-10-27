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
import "../../../styles.css";
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

export default function JoinTalentrade({ feature }) {
  const { heading, description, image } = feature;

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);

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
    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1,
        scrollTrigger: { trigger: section, start: "top 100%" },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 pb-16 flex flex-col gap-y-20 ">
        <div>
          <h1 ref={headingRef} className="heading text-start xl:text-center">
            {heading}
          </h1>
          <p
            ref={descriptionRef}
            className="subheading text-start xl:text-center xl:w-[90%] mx-auto"
          >
            {description}
          </p>
        </div>

        <div
          ref={imageRef}
          className=" bg-white border-4 border-gray-200 rounded-md w-full md:max-w-[90%] lg:max-w-[60%] mx-auto"
        >
          <img
            src={image}
            alt="Visual image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
