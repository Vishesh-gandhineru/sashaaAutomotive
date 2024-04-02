"use client"

import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";    
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP,ScrollTrigger);



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
        markers: true,
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
        markers: true,
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
        markers: true,
      }
    
    })
  }, {});

  return (
    <footer
      className="footerMainSection max-w-[1300px] m-auto bg-cover bg-right bg-no-repeat lg:h-[700px]"
      style={{ backgroundImage: `url(/footerImage.png)` }}
    >
      <div className="glassmorphism-hero p-8  h-fit">
          <img src="/whiteLogo.svg" alt="white logo" className="footer-logo w-[50%] my-5 lg:w-[15%]" />
        <div className="lg:flex lg:gap-[40px] lg:justify-between">

        <div className="footer-content flex text-[16px] leading-[24px] justify-center flex-col items-center lg:justify-start lg:order-1 lg:w-[35%]">
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
        <div className="my-8 lg:my-0 lg:order-3 lg:w-[15%]">
          <ul className="footer-list grid grid-cols-2 gap-4 lg:grid-cols-1">
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
                <li>
                  <Link
                    scroll={true} href="#"
                    className="text-white hover:text-gray-300 border-b-[1px] pb-1 lg:hidden"
                  >
                    Privacy Policy
                  </Link>
                </li>
          </ul>
        </div>
        <div className="lg:order-2">
          <ul className="footer-list grid grid-cols-1 gap-4 lg:grid-cols-2 ">
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
                +(91) 93231 22484 <br />
                +(91) 22 2382 2484
              </span>
            </li>
            <li className="block mt-1">
            Email:
              <span className="block mt-1">
              sashaaautomotive@gmail.com
              </span>
            </li>
          </ul>
        </div>
        </div>
        <div className="border-t-[1px] mt-10 py-8 lg:flex flex-row items-start justify-between">
          <p className="text-center lg:text-left lg:inline">
            © 2024 Sashaa Automotive. All rights reserved.
          </p>
          <li className="hidden lg:inline">Privacy Policy</li>
        </div>
      </div>
    </footer>
  );
}
