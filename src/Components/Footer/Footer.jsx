import React from 'react'
import { MdArrowForwardIos } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 py-20">
      <div className="flex flex-wrap justify-between max-w-[1400px] mx-auto px-10 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <div className="flex-1 min-w-[250px]">
          <a href="#" className="text-3xl font-bold">
            Gr<span className="text-orange-500 uppercase">o</span>cify
          </a>
          <p className="text-zinc-600 mt-6 max-w-[350px] mx-auto md:mx-0">
            Bred for a high content of beneficial substances. Our products are all fresh and healthy.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a href="#" className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600 transition-colors">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600 transition-colors">
              <FaTwitter />
            </a>
          </div>

          <p className="text-zinc-800 mt-6">
            2025 &copy; All Rights Reserved
          </p>
        </div>

        {/* Company Links */}
        <ul className="flex-1 min-w-[200px]">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Company</h5>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500 block transition-colors duration-200">About</a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-zinc-800 hover:text-orange-500 block transition-colors duration-200">FAQ's</a>
          </li>
        </ul>

        {/* Support Links */}
        <ul className="flex-1 min-w-[200px]">
          <li>
            <h5 className="text-zinc-800 text-2xl font-bold">Support</h5>
          </li>
          <li className="mt-4">
            <a href="#" className="text-zinc-800 hover:text-orange-500 block transition-colors duration-200">Support Center</a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-zinc-800 hover:text-orange-500 block transition-colors duration-200">Feedback</a>
          </li>
          <li className="mt-2">
            <a href="#" className="text-zinc-800 hover:text-orange-500 block transition-colors duration-200">Contact</a>
          </li>
        </ul>

        {/* Newsletter Section */}
        <div className="flex-1 min-w-[250px]">
          <h5 className="text-zinc-800 text-2xl font-bold">Stay Connected</h5>
          <p className="mt-6 text-zinc-600">
            Question or feedback?<br />We'd love to hear from you.
          </p>
          <div className="flex bg-white p-1 rounded-lg mt-6 max-w-[300px] mx-auto md:mx-0">
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              placeholder="Email address"
              className="flex-1 h-[5vh] pl-4 focus:outline-none text-zinc-700"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-800 cursor-pointer transition-colors duration-200">
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
