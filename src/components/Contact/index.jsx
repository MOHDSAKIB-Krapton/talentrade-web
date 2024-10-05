import React, { useState, useEffect, useRef } from "react";
import "../../styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "emailjs-com";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const illustrationRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setIsLoading(true);
        const result = await emailjs.send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_USER_ID
        );

        if (result.status === 200) {
          setFormData({
            name: "",
            email: "",
            message: "",
            company: "",
            phone: "",
          });

          // TODO:- Use Custom toast here
          alert("Message sent successfully!");
        } else {
          alert("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    const description = descriptionRef.current;
    const illustration = illustrationRef.current;

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
  }, []);

  return (
    <div
      id="contactus"
      ref={sectionRef}
      className="max-w-7xl mx-auto flex justify-between px-4 py-5"
    >
      <div className="flex-col flex justify-center items-center mx-auto">
        <div className="py-10 flex">
          <div className="mx-auto flex-1 lg:mx-0">
            <div>
              <h1 ref={headingRef} className="heading">
                Collaborate for Growth Join Forces with Our{" "}
                <br className="hidden lg:block" /> Expert{" "}
                <span className="highlight"> Skill Exchange Community</span>
              </h1>
              <p ref={descriptionRef} className="subheading">
                Partner with our thriving TalentTrade community to exchange
                valuable skills and knowledge. We bring together passionate
                learners and teachers to create an ecosystem where growth is
                mutual. Understanding your unique abilities, we deliver
                opportunities to both teach and learn. Let's collaborate to
                craft a standout experience in skill-sharing.
              </p>
            </div>

            <div className="flex flex-1">
              <form className="mt-16 flex flex-1 flex-col" onSubmit={sendEmail}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Full name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="company"
                        className="block font-semibold text-gray-900"
                      >
                        Company
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="company"
                        autoComplete="company"
                        aria-describedby="company-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="phone"
                        className="block font-semibold text-gray-900"
                      >
                        Phone
                      </label>
                      <p id="phone-description" className="text-gray-400">
                        Optional
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        id="phone"
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        How can we help you?
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <small className="mt-3 block text-gray-500">
                  Your information will be kept private. We won't ever sell it
                  and we won't ever spam you. We hate that sort of BS as much as
                  you do.
                </small>
                <div className="mt-3 flex justify-center border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className={`rounded-md bg-primary px-3.5 py-2.5 text-center flex gap-2 items-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 ease-in-out  ${
                      isLoading
                        ? "bg-gray-400 cursor-wait"
                        : "bg-[#9951DB] hover:bg-[#9951DB] cursor-pointer"
                    }`}
                  >
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <div className="relative w-5 h-5">
                          <div className="absolute border-2 border-t-transparent border-white rounded-full w-full h-full animate-spin" />
                        </div>
                      </div>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    )}
                    Send message
                  </button>
                </div>
              </form>
              <div
                ref={illustrationRef}
                className="hidden md:flex md:flex-1 mt-16 border border-gray-200 rounded-lg overflow-hidden ml-4"
              >
                <img
                  src="./contact.jpg"
                  alt="Contact img"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
