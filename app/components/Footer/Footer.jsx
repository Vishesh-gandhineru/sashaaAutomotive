"use client"

import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);
import { FaWhatsapp } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";


export default function Footer() {

  //GSAP animation

  useGSAP(() => {
    gsap.from(".footer-list li" , {
      opacity: 0,
      duration: 1,
      y: 100,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".footerMainSection",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play stop play reverse",

      }
    })

    gsap.from(".footer-content" , {
      opacity: 0,
      duration: 1,
      y: 100,
      scrollTrigger: {
        trigger: ".footerMainSection",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play stop play reverse",
     
      }
    })

    gsap.from(".footer-logo" , {
      opacity: 0,
      duration: 1,
      y: 100,
      scrollTrigger: {
        trigger: ".footerMainSection",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play stop play reverse",
  
      }
    
    })
  }, {});

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scroll animation
    });
  };

  return (
    <footer
      className="footerMainSection max-w-[1300px] w-[90%] m-auto bg-cover md:bg-center bg-right bg-no-repeat xl:h-[700px]"
      style={{ backgroundImage: `url(/footerImage.png)` }}
    >
      <div className="glassmorphism-hero p-8  h-fit">
          <img src="/whiteLogo.svg" alt="white logo" className="footer-logo w-[50%] my-5 md:w-[30%] lg:w-[15%] md:my-[50px]" />
        <div className="xl:flex xl:gap-[40px] xl:justify-between">

        <div className="footer-content flex text-[16px] leading-[24px] justify-center flex-col items-center xl:justify-start xl:order-1 xl:w-[35%] md:mb-[50px]">
          <p>
            Sashaa Automotive - where precision meets passion. Collaborating
            with esteemed brands such as McLaren, Aston Martin, Rolls Royce, and
            Ferrari, we epitomize excellence in tuning and accessorizing luxury
            vehicles.
            <br />
            <br /> Our commitment to precision craftsmanship, technical prowess,
            and uncompromising quality has earned us the distinction of being
            India&apos;s foremost name in automotive modifications.
          </p>
        </div>
        <div className="my-8 xl:my-0 xl:order-3 xl:w-[15%]">
          <ul className="footer-list grid grid-cols-2 gap-4 xl:grid-cols-1">
          <li>
                  <Link scroll={true}
                    href="#whatWeDo"
                    className="text-white hover:text-gray-300"
                  >
                    What We Do
                  </Link>
                </li>
                <li>
                  <Link scroll={true} href="#legacy" className="text-white hover:text-gray-300">
                    Legacy
                  </Link>
                </li>
                <li>
                  <Link scroll={true} href="#product" className="text-white hover:text-gray-300">
                    Spare Parts
                  </Link>
                </li>
                <li>
                  <Link scroll={true} href="#product" className="text-white hover:text-gray-300">
                    Tuning
                  </Link>
                </li>
                <li>
                  <Link scroll={true} href="#specialOrder" className="text-white hover:text-gray-300">
                    Special Orders
                  </Link>
                </li>
                
          </ul>
        </div>
        <div className="lg:order-2">
          <ul className="footer-list grid grid-cols-1 gap-4 md:grid-cols-2 ">
            <li className="font-[800]">
              Address:
              <span className="block mt-1">
                25 Avantikabai Gokhale Street,
                <br /> Opera House, Mumbai 400004
              </span>
            </li>
            <li className="font-[800]">
              Hours:
              <span className="block mt-1">
                Monday - Friday: 10am to 6:30pm <br />
                Saturday: 10am to 5pm
              </span>
            </li>
            <li className="font-[800]">
              Phone:
              <span className="block mt-1">
                <a href="tel:919323122484">
                  +(91) 93231 22484 <br />
                  </a>
                <a href="tel:912223822484">
                +(91) 222382 2484
                </a>
              </span>
            </li>
            <li className="block mt-1 font-[800]">
            Email:
              <a href="mailto:sashaaautomotive@gmail.com" className="block mt-1">
              sashaaautomotive@gmail.com
              </a>
            </li>
          </ul>
        </div>
        </div>
        <div className="border-t-[1px] mt-10 py-8 lg:flex flex-row items-start justify-between">
          <p className="text-center lg:text-left lg:inline">
            © 2024 Sashaa Automotive. All rights reserved.
          </p>
        </div>
      </div>
      <a href="https://wa.me/919323122484" target="_blank" className="bg-[#E33A3D] h-[50px] w-[50px] grid place-content-center  rounded-full z-[1000000] fixed bottom-[80px] right-[15px] hover:scale-[1.1] transition-all ease-in cursor-pointer">
      <FaWhatsapp className="w-fit h-[30px] fill-white" />
      </a>
      <button className="bg-[#E33A3D] h-[50px] w-[50px] grid place-content-center  rounded-full z-[1000000] fixed bottom-[20px] right-[15px] hover:scale-[1.1] transition-all ease-in cursor-pointer" onClick={scrollToTop}> 
        <FaChevronUp className="w-fit h-[20px] md:h-[30px] fill-white" />
      </button>
    </footer>
  );
}
