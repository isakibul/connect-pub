import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "/logo.png";
import navContent from "./NavContent";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
    /**
     * Necessary states
     */
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    /**
     * Effect to manage body overflow when the mobile nav is open
     */
    useEffect(() => {
        const body = document.body;
        body.style.overflow = navOpen ? "hidden" : "visible";
        return () => {
            body.style.overflow = "visible";
        };
    }, [navOpen]);

    /**
     * Effect to handle window resize and close nav if on larger screens
     */
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 767) {
                setNavOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        /**
         * Navbar container
         */
        <nav className="font-righteous z-10">
            <div className="flex justify-between items-center px-6 md:px-20 py-2 mt-2">
                <div>
                    <Link to={"/"}>
                        <img
                            className="w-40"
                            src={logo} alt="logo"
                        />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-5xl p-3 text-[#333333] rounded-full hover:outline-white ease-out duration-300"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <IoMdMenu />
                    </button>
                </div>
                <div className="hidden md:flex gap-6 items-center">
                    <ul className="hidden md:flex gap-8 mr-4 text-xl">
                        {navContent.map((item, idx) => (
                            <li
                                key={idx}
                                className={`relative ease-in duration-200 cursor-pointer ${location.pathname === item.path ? '' : ''
                                    } text-[#333333]`}
                            >
                                {location.pathname === item.path && (
                                    <TiArrowSortedDown className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-[#333333] text-[25px]" />
                                )}
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mobile menu */}
            {navOpen && (
                <div className="mobile-nav text-2xl flex flex-col gap-8 justify-center items-center text-center fixed inset-0 bg-white z-50">
                    <ul className="flex flex-col gap-8 text-xl font-semibold">
                        {navContent.map((item, idx) => (
                            <li
                                key={idx}
                                className="ease-in duration-200 cursor-pointer text-[#333333] hover:text-gray"
                            >
                                <Link
                                    to={item.path}
                                    onClick={() => setNavOpen(false)}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button
                        className='text-4xl'
                        onClick={() => setNavOpen(false)}
                    >
                        <IoClose />
                    </button>
                </div>
            )}

        </nav>
    );
}

export default Navbar;
