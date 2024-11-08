import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from "../../../public/logo.png";
import navContent from "./NavContent";
import { FaShoppingBasket } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolling(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const body = document.body;
        if (navOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "visible";
        }
        return () => {
            body.style.overflow = "visible";
        };
    }, [navOpen]);

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
        <nav className="font-rubik z-10">
            <div className="flex justify-between items-center px-6 md:px-20 py-10">
                <div>
                    <Link to={"/"}>
                        <img
                            className="w-60"
                            src={logo} alt="exquisibyte logo"
                        />
                    </Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-5xl p-3 text-white rounded-full hover:outline-white ease-out duration-300"
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        <IoMdMenu />
                    </button>
                </div>
                <div className="hidden md:flex gap-6 items-center">
                    <ul className="hidden md:flex gap-8 mr-4 text-xl font-semibold">
                        {navContent.map((item, idx) => (
                            <li
                                key={idx}
                                className={`ease-in duration-200 cursor-pointer ${location.pathname === item.path ? 'border-t-2 border-white' : 'hover:border-t-2 hover:border-black'} text-white`}

                            >
                                <Link to={item.path}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* mobile menu */}
            {navOpen && (
                <div className="mobile-nav text-2xl flex flex-col gap-8 justify-center items-center text-center fixed top-0 left-0 right-0 bottom-0 z-50">
                    <ul className="flex flex-col gap-8 text-xl font-semibold">
                        {navContent.map((item, idx) => (
                            <li
                                key={idx}
                                className="ease-in duration-200 cursor-pointer text-white hover:text-gray"
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
                        className='text-3xl text-white hover:text-5xl'
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