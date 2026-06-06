import React, { useEffect, useState } from "react";
import { IoIosHeart } from "react-icons/io";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch, IoClose } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white fixed top-0 right-0 left-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto md:h-[14vh] h-[12vh] px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </Link>

        {/* Desktop Menu */}
        <ul className="md:flex items-center gap-x-[60px] hidden">
          <li>
            <Link
              to="/"
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-x-5">
          {/* Desktop Search */}
          <div className="md:flex p-1 border-2 border-orange-500 rounded-full hidden">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </div>

          {/* Icons */}
          <button className="text-zinc-800 text-2xl">
            <IoIosHeart />
          </button>
          <button className="text-zinc-800 text-2xl">
            <HiMiniShoppingBag />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="text-zinc-800 text-3xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {showMenu ? <IoClose /> : <TbMenu2 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`flex flex-col gap-y-8 items-center bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-8 md:hidden absolute top-[80px] left-1/2 transform -translate-x-1/2 transition-all duration-300 ease-in-out ${
            showMenu
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-5"
          }`}
        >
          <li>
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-orange-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setShowMenu(false)}
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </Link>
          </li>

          {/* Mobile Search */}
          <li className="flex p-1 border-2 border-orange-500 rounded-full w-full">
            <input
              type="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 h-[5vh] px-3 focus:outline-none bg-transparent"
            />
            <button className="bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl">
              <IoSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
