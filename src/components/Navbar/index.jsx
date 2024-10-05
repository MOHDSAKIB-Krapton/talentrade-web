import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Logo, Name } from "../../assets";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Features", href: "#features" },
  { label: "Contact Us", href: "#contactus" },
];

const NavLinks = ({ href, label, className }) => {
  const location = useLocation();
  const isActive = location.pathname === href.split("#")[0]; // Check active route ignoring hash

  return (
    <NavLink
      to={href}
      className={`relative navoptions group ${className} ${
        isActive ? "text-[#9951DB]" : ""
      }`}
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#9951DB] transition-all duration-300 ease-out group-hover:w-full rounded-full" />
    </NavLink>
  );
};

const DesktopMenu = ({ links }) => (
  <div className="hidden md:flex space-x-6 lg:space-x-16">
    {links.map((link) => (
      <NavLinks key={link.label} href={link.href} label={link.label} />
    ))}
  </div>
);

const MobileMenu = ({ links, isOpen }) => (
  <>
    {isOpen && (
      <div className="flex flex-col items-center space-y-4 pb-4 transition-all duration-300 ease-in-out md:hidden">
        {links.map((link) => (
          <NavLinks key={link.label} href={link.href} label={link.label} />
        ))}
        <Button
          variant="outlined"
          className="cursor-pointer self-center "
          style={{
            color: "#9951DB",
            borderColor: "#9951DB",
            fontFamily: "Poppins, sans-serif",
          }}
          endIcon={<SendIcon />}
        >
          Start Learning
        </Button>
      </div>
    )}
  </>
);

function Navbar({ links = navLinks, buttonText = "Start Learning" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full z-50 sticky backdrop-blur-lg top-0">
      <div className="w-full h-auto poppins-medium cursor-pointer z-20 sticky backdrop-blur-lg max-w-7xl mx-auto">
        <div className="w-full h-full flex justify-between items-center px-4 py-1.5">
          <a href="/" className="flex items-center space-x-1 cursor-pointer">
            <Logo />
            <Name />
          </a>

          <DesktopMenu links={links} />

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
              {buttonText}
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

        <MobileMenu links={links} isOpen={isMenuOpen} />
      </div>
    </div>
  );
}

export default Navbar;
