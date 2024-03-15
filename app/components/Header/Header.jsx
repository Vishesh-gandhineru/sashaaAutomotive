"use client"
import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="flex items-center max-w-[1300px] m-auto p-5 pt-8 justify-between px-4 py-2 mb-[-80px]  text-white z-50 relative">
            <div className="flex items-center">
                <img src="/logo.svg" alt="Logo" className="w-full h-full mr-2" />
            </div>
            <div className="md:hidden">
                <button
                    type="button"
                    className="text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {isMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>
            <nav
                className={`${
                    isMenuOpen ? 'block' : 'hidden'
                } md:flex md:items-center`}
            >
                <ul className="md:flex md:items-center md:space-x-4">
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
                        <a href="#" className="text-white hover:text-gray-300 border-b-[1px] pb-1">
                            Enquire Now
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
