import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import ShaktiLogo from "../logos/ShaktiLogo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#5e6466] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center px-8 gap-4">
        <h1 className="text-6xl font-black text-white">S.H.A.K.T.I</h1>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="text-3xl text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map(({ name, path }) => (
            <Link 
              key={name} 
              to={path} 
              className="text-2xl font-bold text-white hover:underline hover:decoration-[#ffffff] hover:underline-offset-2"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#eff1e4] flex flex-col items-center py-4">
          {navLinks.map(({ name, path }) => (
            <Link 
              key={name} 
              to={path} 
              className="text-xl font-semibold text-white py-2"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

const navLinks = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Active Drones", path: "/ActiveDrones" },
  { name: "All Drones", path: "/AllDrones" },
  { name: "FAQs", path: "/FAQs" },
  { name: "About Us", path: "/AboutUs" },
  { name: "Terms & Conditions", path: "/termsconditions" },
];

export default Navbar;
