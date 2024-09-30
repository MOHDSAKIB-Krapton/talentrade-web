import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Logo, Name } from "../../assets";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full z-50 sticky backdrop-blur-lg top-0">
      <div className="w-full h-auto poppins-medium cursor-pointer z-20 sticky backdrop-blur-lg max-w-7xl mx-auto">
        <div className="w-full h-full flex justify-between items-center px-4 py-1.5">
          <div className="flex items-center space-x-1">
            <Logo />
            <Name />
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-16">
            <a
              href="/about-us"
              className="navoptions hover:text-[#9951DB] ease-linear hover:underline"
            >
              About Us
            </a>
            <a
              href="#features"
              className="navoptions hover:text-[#9951DB] ease-linear hover:underline"
            >
              Features
            </a>
            <a
              href="#collaborate"
              className="navoptions hover:text-[#9951DB] ease-linear hover:underline"
            >
              Collaborate
            </a>
            <a
              href="#contactus"
              className="navoptions hover:text-[#9951DB] ease-linear hover:underline"
            >
              Contact Us
            </a>
          </div>

          <div className="hidden md:block">
            <Button
              variant="contained"
              className="cursor-pointer"
              style={{
                background: "#9951DB",
                width: "auto",
                fontFamily: "Poppins, sans-serif",
              }}
              endIcon={<SendIcon />}
            >
              Start Learning
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="focus:outline-none" onClick={toggleMenu}>
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6 text-purple-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 text-purple-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden flex flex-col items-center space-y-4 pb-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "min-h-50 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <a
            href="/about-us"
            className="navoptions hover:text-[#9951DB] ease-linear"
          >
            About Us
          </a>
          <a
            href="#features"
            className="navoptions hover:text-[#9951DB] ease-linear"
          >
            Features
          </a>
          <a
            href="#collaborate"
            className="navoptions hover:text-[#9951DB] ease-linear"
          >
            Collaborate
          </a>
          <a
            href="#contactus"
            className="navoptions hover:text-[#9951DB] ease-linear"
          >
            Contact Us
          </a>

          <Button
            variant="outlined"
            className="cursor-pointer w-full"
            style={{
              color: "#9951DB",
              borderColor: "#9951DB",
              width: "auto",
              fontFamily: "Poppins, sans-serif",
            }}
            endIcon={<SendIcon />}
          >
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
