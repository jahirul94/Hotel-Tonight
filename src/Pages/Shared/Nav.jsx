import { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Hotels</NavLink></li>
        <li><NavLink to="/">Services</NavLink></li>
        <li><NavLink to="/">Contact</NavLink></li>
    </>


    return (
        <nav className="bg-blue-500 p-4">
            <div className="w-11/12 mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">Hotel Tonight</div>

                    {/* toggle button  */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3 5H21V7H3V5ZM3 11H21V13H3V11ZM3 17H21V19H3V17Z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Menu for large device */}
                    <ul className="hidden md:flex space-x-4 text-white">
                        {navLinks}
                    </ul>
                </div>
            </div>

            {/* Menu for small device */}
            {isOpen && (
                <ul className="md:hidden fixed right-0 py-4 px-6 bg-blue-500 text-lg text-white rounded-bl-lg">
                    {navLinks}
                </ul>
            )}
        </nav>
    );
};

export default Nav;