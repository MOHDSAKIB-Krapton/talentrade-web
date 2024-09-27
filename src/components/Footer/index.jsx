import React from "react";
import { Name, flower } from "../../assets";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";

function Footer() {
  const footerLinks = {
    Services: [
      { name: "Explore Skills", href: "#" },
      { name: "Become a Mentor", href: "#" },
      { name: "Pricing Plans", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Get in Touch", href: "#" },
    ],
    Resources: [
      { name: "Blog & News", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Partnerships", href: "#" },
      { name: "Community Guidelines", href: "#" },
      { name: "Help Center", href: "#" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    Legal: [
      { name: "Claim", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  return (
    <footer className=" w-full relative">
      <div className="max-w-7xl mx-auto px-4 pb-4 flex flex-col xl:flex-row">
        <div className="flex flex-col justify-center items-start">
          <Name width={230} height={100} />
          <p className="opacity-80 font-semibold text-sm text-start sm:text-start">
            TalentTrade is a global platform where individuals come together to
            learn, teach, and share new skills. Our mission is to empower
            learners and instructors through skill-sharing, creating a community
            of lifelong learners and teachers.
          </p>
          <div className="space-x-4 my-6 ">
            <InstagramIcon
              className="hover:text-[#C13584]"
              style={{ fontSize: "1.5rem" }}
            />
            <GitHubIcon
              className="hover:text-[#833AB4]"
              style={{ fontSize: "1.5rem" }}
            />
            <LinkedInIcon
              className="hover:text-[#0a66c2]"
              style={{ fontSize: "1.5rem" }}
            />
            <XIcon style={{ fontSize: "1.3rem" }} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 opacity-80 font-normal space-y-4 p-1 mb-20">
          {Object.keys(footerLinks).map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">
                {category}
              </h4>
              <div className="flex flex-col gap-4">
                {footerLinks[category].map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="hover:text-purple-700 text-xs 2xl:text-sm text-gray-600 font-medium hover:underline cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <img
        src={flower}
        className="bottom-[39px] right-12 absolute -z-10"
        alt="flower image"
      />

      <div className="w-full bg-purple-500 h-12 -z-20 flex items-center justify-start">
        <div className="max-w-7xl px-4 mx-auto">
          <p className="text-white text-xs lg:text-sm font-normal">
            © 2024 TalentTrade. All rights reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
