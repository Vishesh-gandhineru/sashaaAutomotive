"use client";
import React, { useState } from "react";
import { CloseCircleIcon } from "@sanity/icons";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "../sheet"

import Link from "next/link";
import PopupButton from "../PopupButton";
import RightIcon from "../rightIcon";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { Dialog, DialogContent, DialogTrigger , DialogClose } from "../dialog";

const Header = () => {
  useGSAP(() => {
    // gsap code here...
    gsap.from(".menuUl li", { opacity: 0, y: 50, stagger: 0.1 });
    gsap.to(".menuUl li", { opacity: 1, stagger: 0.1, duration: 1 });

    gsap.from(".logo img", { opacity: 0, y: 50 });
    gsap.to(".logo img", { opacity: 1, duration: 1 });
  }, {});

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center max-w-[1300px] m-auto p-5 pt-8 justify-between lg:px-10 xl:px-4 py-2 mb-[-80px]  text-white z-50 relative">
      <div className="logo flex items-center">
        <img src="/Logo.svg" alt="Logo" className="w-full h-full mr-2" />
      </div>
      
      <div className="xl:hidden">
      <Sheet>
  <SheetTrigger>
  <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="14.1302" cy="14.1412" r="12.9877" stroke="white" />
              <line
                x1="7.75464"
                y1="10.1533"
                x2="13.6709"
                y2="10.1533"
                stroke="white"
              />
              <line
                x1="7.75464"
                y1="14.6414"
                x2="20.5058"
                y2="14.6414"
                stroke="white"
              />
              <line
                x1="14.5895"
                y1="19.1294"
                x2="20.5058"
                y2="19.1294"
                stroke="white"
              />
            </svg>
  </SheetTrigger>
  <SheetContent side ={"bottom"} className="glassmorphism-hero px-12 py-6 pb-[50px] h-[fit-content] mx-3 mt-3 border-[#cccccc50] border-[1px] rounded-t-[10px] focus-visible:outline-none">
  <div className="mx-auto w-full max-w-sm">
              <ul className="flex flex-col gap-8 items-center justify-center">
                <li>
                  <SheetClose asChild>
                  <Link
                    scroll={true}
                    href="#whatWeDo"
                    className="text-white hover:text-gray-300"
                  >
                    What We Do
                  </Link>
                  </SheetClose>
                </li>
                <li>
                <SheetClose asChild>

                  <Link
                    scroll={true}
                    href="#legacy"
                    className="text-white hover:text-gray-300"
                  >
                    Legacy
                  </Link>

                </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>

                  <Link
                    scroll={true}
                    href="#product"
                    className="text-white hover:text-gray-300"
                  >
                    Spare Parts
                  </Link>

                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>

                  <Link
                    scroll={true}
                    href="#product"
                    className="text-white hover:text-gray-300"
                  >
                    Tuning
                  </Link>

                  </SheetClose>
                </li>
                <li>
                  <SheetClose asChild>
                  <Link
                    scroll={true}
                    href="#specialOrder"
                    className="text-white hover:text-gray-300"
                  >
                    Special Orders
                  </Link>

                  </SheetClose>
                </li>
                <li className="border-b-[2px]">
            <Dialog>
              <DialogTrigger asChild>
                <div className="text-white hover:text-gray-300">
                  Enquire Now
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[85%] max-h-[80%] sm:max-h-fit overflow-y-scroll sm:overflow-hidden sm:max-w-[95%] md:max-w-[90%] lg:max-w-[70%] translate-x-[-50%] m-auto border-none bg-[#1B1B1B] p-[0px]">
              <DialogClose asChild>
                <CloseCircleIcon className="w-[35px] h-[35px] absolute left-[85%]  md:left-[95%] top-[3%] z-50 cursor-pointer hover:scale-[1.1] transition-all"/>
            </DialogClose>               
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-[80%] p-5 mx-auto md:p-10 py-[50px]">
                    <form className="rounded flex flex-col gap-8">
                      <div className="mb-4">
                        <input
                          className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mobile"
                            type="text"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="vehicle-brand"
                            type="text"
                            placeholder="Vehicle Brand"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="vin"
                            type="text"
                            placeholder="VIN/Chassis/Engine No."
                          />
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="interested-product"
                            type="text"
                            placeholder="Interested Product"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="inline-flex justify-center items-center hover:scale-[1.1] transition-all ease-in-out">
                          <button className="text-white px-12 py-3 border-[2px] border-r-0">
                            Submit
                          </button>
                          <span className=" bg-white h-full flex justify-center items-center py-[21px] px-4 text-[20px]">
                            <RightIcon />
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="relative w-full sm:w-[50%] h-[300px] sm:h-full hidden sm:block">
                    <Image
                      fill
                      src="/popupformImage.png"
                      className="object-cover"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </li>
              </ul>
            </div>
  </SheetContent>
</Sheet>
      </div>
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } hidden xl:block`}
      >
        <ul className="menuUl md:flex md:items-center md:space-x-6">
          <li>
            <Link
              scroll={true}
              href="#whatWeDo"
              className="text-white hover:text-gray-300"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link
              scroll={true}
              href="#legacy"
              className="text-white hover:text-gray-300"
            >
              Legacy
            </Link>
          </li>
          <li>
            <Link
              scroll={true}
              href="#product"
              className="text-white hover:text-gray-300"
            >
              Spare Parts
            </Link>
          </li>
          <li>
            <Link
              scroll={true}
              href="#product"
              className="text-white hover:text-gray-300"
            >
              Tuning
            </Link>
          </li>
          <li>
            <Link
              scroll={true}
              href="#specialOrder"
              className="text-white hover:text-gray-300"
            >
              Special Orders
            </Link>
          </li>
          <li className="border-b-[2px]">
            <Dialog>
              <DialogTrigger asChild>
                <div className="text-white hover:text-gray-300">
                  Enquire Now
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-[85%] max-h-[80%] sm:max-h-fit overflow-y-scroll sm:overflow-hidden sm:max-w-[95%] md:max-w-[90%] lg:max-w-[70%] translate-x-[-50%] m-auto border-none bg-[#1B1B1B] p-[0px]">
              <DialogClose asChild>
                <CloseCircleIcon className="w-[35px] h-[35px] absolute left-[85%]  md:left-[95%] top-[3%] z-50 cursor-pointer hover:scale-[1.1] transition-all"/>
            </DialogClose>
                
                <div className="flex flex-col sm:flex-row">
                  <div className="w-full sm:w-[80%] p-5 mx-auto md:p-10 py-[50px]">
                    <form className="rounded flex flex-col gap-8">
                      <div className="mb-4">
                        <input
                          className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="mobile"
                            type="text"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="vehicle-brand"
                            type="text"
                            placeholder="Vehicle Brand"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="vin"
                            type="text"
                            placeholder="VIN/Chassis/Engine No."
                          />
                        </div>
                      </div>
                      <div className="mb-4 flex flex-col sm:flex-row gap-8">
                        <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="interested-product"
                            type="text"
                            placeholder="Interested Product"
                          />
                        </div>
                        <div className="w-full sm:w-1/2">
                          <input
                            className="shadow appearance-none border-b border-gray-300 bg-transparent w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            placeholder="Location"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="inline-flex justify-center items-center hover:scale-[1.1] transition-all ease-in-out">
                          <button className="text-white px-12 py-3 border-[2px] border-r-0">
                            Submit
                          </button>
                          <span className=" bg-white h-full flex justify-center items-center py-[21px] px-4 text-[20px]">
                            <RightIcon />
                          </span>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="relative w-full sm:w-[50%] h-[300px] sm:h-full hidden sm:block">
                    <Image
                      fill
                      src="/popupformImage.png"
                      className="object-cover"
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
