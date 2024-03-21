"use client";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../popup";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 

  return (
    <header className="flex items-center max-w-[1300px] m-auto p-5 pt-8 justify-between px-4 py-2 mb-[-80px]  text-white z-50 relative">
      <div className="flex items-center">
        <img src="/Logo.svg" alt="Logo" className="w-full h-full mr-2" />
      </div>   

      <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.1302" cy="14.1412" r="12.9877" stroke="white"/>
<line x1="7.75464" y1="10.1533" x2="13.6709" y2="10.1533" stroke="white"/>
<line x1="7.75464" y1="14.6414" x2="20.5058" y2="14.6414" stroke="white"/>
<line x1="14.5895" y1="19.1294" x2="20.5058" y2="19.1294" stroke="white"/>
</svg>

        </DrawerTrigger>
        <DrawerContent className="glassmorphism-hero px-12 py-6 pb-[50px] h-[fit-content] mx-3 mt-3 border-[#cccccc50] focus-visible:outline-none">
          <div className="mx-auto w-full max-w-sm">
            <ul className="flex flex-col gap-8 items-center justify-center">
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Legacy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Spare Parts
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Tuning
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">
                  Special Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 border-b-[1px] pb-1"
                >
                  Enquire Now
                </a>
              </li>
            </ul>
          </div>
        </DrawerContent>
      </Drawer>
      </div>
      <nav
        className={`${isMenuOpen ? "block" : "hidden"} md:flex md:items-center`}
      >
        <ul className="md:flex md:items-center md:space-x-7">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              What We Do
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Legacy
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Spare Parts
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Tuning
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Special Orders
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-white hover:text-gray-300 border-b-[1px] pb-1"
            >
              Enquire Now
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
