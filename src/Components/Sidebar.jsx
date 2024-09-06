import { Link } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import RegisterDropdown from "./RegisterDropdown";
import ResourceDropdown from "./ResourceDropdown";

const Sidebar = ({ isOpen, onClose }) => {
  const [isRegisterDropdownOpen, setIsRegisterDropdownOpen] = useState(false);
  const [isResourceDropdownOpen, setIsResourceDropdownOpen] = useState(false);

  if (!isOpen && isRegisterDropdownOpen) setIsRegisterDropdownOpen(false);
  if (!isOpen && isResourceDropdownOpen) setIsResourceDropdownOpen(false);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "register") {
      setIsRegisterDropdownOpen(!isRegisterDropdownOpen);
      setIsResourceDropdownOpen(false);
    } else if (dropdown === "resources") {
      setIsResourceDropdownOpen(!isResourceDropdownOpen);
      setIsRegisterDropdownOpen(false);
    }
  };
  return (
    <div
      className={`fixed top-0 left-0 w-64 h-full bg-neutral-500 bg-opacity-90 backdrop-blur-lg shadow-lg transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } z-50`}
      style={{
        zIndex: 9999,
        background: "rgba(255, 255, 255, 0.1)", // Custom background with 10% opacity
        borderRight: "1px solid rgba(255, 255, 255, 0.2)", // Custom border with 20% opacity
      }}
    >
      <div className="flex justify-end p-4">
        <button className="text-gray-200 text-2xl" onClick={onClose}>
          <FaTimes />
        </button>
      </div>
      <div className="flex flex-col p-4">
        <Link
          to="/"
          className="text-gray-200 hover:text-secondary flex justify-center text-xl py-2"
          onClick={onClose}
        >
          <p className="underline-animate relative inline-block">Home</p>
        </Link>
        <Link
          to="/events"
          className="text-gray-200 hover:text-secondary flex justify-center text-xl py-2"
          onClick={onClose}
        >
          <p className="underline-animate relative inline-block">Events</p>
        </Link>

        <div className="py-2 flex justify-center">
          <button
            className="text-gray-200 hover:text-secondary flex items-center text-xl "
            onClick={() => toggleDropdown("register")}
          >
            <p className="underline-animate relative inline-block">Register</p>
            <FaChevronDown
              className={`ml-1 transition-transform duration-200 ${
                isRegisterDropdownOpen ? "transform rotate-180" : ""
              } text-sm`}
            />
          </button>
          {isOpen && isRegisterDropdownOpen && (
            <RegisterDropdown
              isDropdownOpen={isRegisterDropdownOpen}
              position={{ left: 180, top: 170 }}
            />
          )}
        </div>

        <div className="py-2 flex justify-center">
          <button
            className="text-white hover:text-secondary flex items-center text-xl"
            onClick={() => toggleDropdown("resources")}
          >
            <p className="underline-animate relative inline-block">Resources</p>
            <FaChevronDown
              className={`ml-1 transition-transform duration-200 ${
                isResourceDropdownOpen ? "transform rotate-180" : ""
              } text-sm`}
            />
          </button>
          <div className="absolute left-0 w-full bg-neutral-700 bg-opacity-80 rounded-md mt-2">
            <ResourceDropdown
              isDropdownOpen={isResourceDropdownOpen}
              position={{ left: 180, top: 205 }}
            />
          </div>
        </div>

        <Link
          to="/contact"
          className="text-gray-200 hover:text-secondary flex justify-center text-xl py-2"
          onClick={onClose}
        >
          <p className="underline-animate relative inline-block">Contact</p>
        </Link>
        {/* Add more links as needed */}
      </div>
    </div>
  );
};

export default Sidebar;
