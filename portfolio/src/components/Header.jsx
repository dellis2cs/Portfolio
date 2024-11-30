import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "hamburger-react";

import "aos/dist/aos.css";

function Header() {
  const location = useLocation();
  const [isOpen, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(
    location.pathname === "/about" ? "about" : "work"
  );

  return (
    <>
      {/* Hamburger Menu Icon for Mobile */}
      <div className="p-4 fixed top-4 right-4 z-50 md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} color="white" />
      </div>

      {/* Header Content */}
      <div className="headerContainer font-montreal text-white p-8 px-12 flex items-center justify-between fixed top-0 left-0 w-full z-40">
        {/* Left Section - Hidden on Mobile */}
        <div
          className="leftHeader hidden md:flex flex-col justify-center"
          data-aos="fade-right"
        >
          <h1 className="font-montrealThin text-[28px] ">Dominic Ellis</h1>
        </div>

        {/* Pill Switcher - Centered and Visible on All Screens */}
        <div
          className="pillHeader flex justify-center items-center mx-auto backdrop-blur-[4px] "
          data-aos="zoom-in"
        >
          <div className="relative border-[1px] border-[#494b56] text-white p-4 w-[200px] rounded-full flex justify-around items-center bg-[rgba(0,0,0,0.5)]">
            {/* Small pill for the active tab */}
            <div
              className={`absolute w-[80px] h-[36px] bg-[#2f313d] rounded-full transition-transform duration-500 ${
                activeTab === "work"
                  ? "translate-x-[-42px]"
                  : "translate-x-[42px]"
              }`}
            ></div>

            {/* Tab switcher indicator */}
            <div
              className={`absolute w-[25px] h-[5px] bg-white rounded-full transition-transform duration-500 shadow-[0_0_30px_5px_rgba(255,255,255,0.6)] ${
                activeTab === "work"
                  ? "translate-x-[-42px] translate-y-[-38px]"
                  : "translate-x-[42px] translate-y-[-38px]"
              }`}
            ></div>

            {/* Work Tab */}
            <Link
              to="/"
              onClick={() => setActiveTab("work")}
              className="relative z-10"
            >
              Work
            </Link>

            {/* About Tab */}
            <Link
              to="/about"
              onClick={() => setActiveTab("about")}
              className="relative z-10"
            >
              About
            </Link>
          </div>
        </div>

        {/* Right Section with Icons - Only on Desktop */}
        <div
          className="rightHeader hidden md:flex items-center gap-6 "
          data-aos="fade-left"
        >
          <a
            href="#"
            className="hover:text-gray-400 transition-all duration-300 "
          >
            Resume
          </a>
          <a
            href="https://github.com/dellis2cs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dominic-ellis-b63ab8238/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-gray-400 transition-all duration-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Mobile Navigation - Only visible when hamburger is open */}
      {isOpen && (
        <div className="mobileMenu fixed inset-0 bg-[#1a1a1a] text-white flex flex-col items-center justify-center z-40 md:hidden">
          <nav className="flex flex-col gap-8 text-lg">
            <Link
              to="/"
              onClick={() => {
                setActiveTab("work");
                setOpen(false);
              }}
              className="hover:text-gray-400 transition-all duration-300"
            >
              Work
            </Link>
            <Link
              to="/about"
              onClick={() => {
                setActiveTab("about");
                setOpen(false);
              }}
              className="hover:text-gray-400 transition-all duration-300"
            >
              About
            </Link>
            <a
              href="#"
              className="hover:text-gray-400 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              Resume
            </a>
            <a
              href="https://github.com/dellis2cs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/dominic-ellis-b63ab8238/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-400 transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              <FaLinkedin />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
