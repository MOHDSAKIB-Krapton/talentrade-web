import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRightIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mike Brown",
    skill: "Learned: Web Development",
    avatar: "/placeholder.svg?height=50&width=50",
    quote: "TalentTrade helped me kickstart my coding journey!",
  },
  {
    name: "Sarah Lee",
    skill: "Taught: Graphic Design",
    avatar: "/placeholder.svg?height=50&width=50",
    quote: "I love sharing my design skills and earning coins!",
  },
  {
    name: "Alex Chen",
    skill: "Learned: Digital Marketing",
    avatar: "/placeholder.svg?height=50&width=50",
    quote: "The community here is amazing and supportive.",
  },
  {
    name: "Emily Taylor",
    skill: "Taught: Photography",
    avatar: "/placeholder.svg?height=50&width=50",
    quote: "Teaching on TalentTrade has been a rewarding experience.",
  },
];

const AboutUs = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const bodyTextRef = useRef(null);
  const illustrationRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const bodyText = bodyTextRef.current;
    const illustration = illustrationRef.current;
    const testimonial = testimonialRef.current;
    const cta = ctaRef.current;

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
      bodyText,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
    gsap.fromTo(
      illustration,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.6,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
    gsap.fromTo(
      testimonial,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        scrollTrigger: { trigger: testimonial, start: "top 80%" },
      }
    );
    gsap.fromTo(
      cta,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.6,
        scrollTrigger: { trigger: section, start: "top 80%" },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-blue-50 to-white border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto py-16 px-4 text-start">
        <h1 ref={headingRef} className="heading">
          About TalentTrade:{" "}
          <span className="highlight">
            Empowering skill exchange through community-driven learning
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <div ref={bodyTextRef} className="lg:w-1/2 mb-8 lg:mb-0">
            <p className="subheading">
              TalentTrade is a revolutionary skill-sharing platform that
              connects people who want to learn with those who love to teach.
              Our mission is to create a vibrant community where knowledge flows
              freely, and skills are valued as currency. Through our unique
              coin-based system, users can earn by teaching and spend on
              learning, fostering a culture of continuous growth and mutual
              benefit.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in the power of community-driven learning, where every
              individual has something valuable to offer. Whether you're a
              seasoned professional or just starting out, TalentTrade provides a
              space for you to share your expertise, discover new passions, and
              connect with like-minded individuals from around the world.
            </p>
          </div>
          <div
            ref={illustrationRef}
            className="lg:w-1/2 flex justify-center overflow-hidden rounded-md"
          >
            <img
              src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Skill sharing illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>

        <div ref={ctaRef} className="text-center">
          <button className="bg-[#9951DB] text-white font-medium py-3 px-8 rounded-full text-sm transition duration-300 ease-in-out transform active:scale-95 shadow-md">
            Join the TalentTrade Community
          </button>

          {/* <Button
            variant="contained"
            className="w-auto cursor-pointer px-8 font-medium"
            style={{
              background: "#9951DB",
              fontFamily: "sans-serif",
            }}
          >
            Join the TalentTrade Community{" "}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Button> */}
        </div>

        {/* TODO:- Testimonials here if uyou want to add this in future */}

        {/* <div ref={testimonialRef} className="mb-16">
          <h3 className="text-2xl font-semibold text-center text-gray-900 mb-8">
            What Our Users Say
          </h3>
          <div className="relative">
            <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="snap-start w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mb-4"
                    />
                    <p className="text-gray-600 italic mb-4">
                      {testimonial.quote}
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.skill}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md">
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
