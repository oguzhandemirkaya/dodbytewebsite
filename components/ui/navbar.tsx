'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import DropDownMenu from "./drop-down-menu";

interface NavbarProps {
    scrollToGraphicDesign: () => void;
    scrollToWebsiteDesign: () => void;
    scrollToServices: () => void; // Define scrollToServices function
  }
  

  const Navbar = ({
    scrollToWebsiteDesign,
    scrollToGraphicDesign,
    scrollToServices, // Add scrollToServices to props
  }: NavbarProps) => {
    const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  
    const toggleDropDown = () => {
      setIsDropDownVisible(!isDropDownVisible);
    };
  
    const closeDropDown = () => {
      setIsDropDownVisible(false);
    };

    return (
        <div className="p-6 md:p-10 flex items-center justify-between z-50">
            <Link href="/"> 
                <div className="cursor-pointer">
                    <Image
                        priority
                        src="/logo/logo.svg"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="w-10 h-10 md:w-14 md:h-14"
                    />
                </div>
            </Link>
            <div className="hidden md:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white bg-opacity-50"> 
            <div onClick={scrollToGraphicDesign} className="hover:text-gray-50 cursor-pointer">Graphic Design</div>
            <div onClick={scrollToWebsiteDesign} className="hover:text-gray-50 cursor-pointer">Website & Mobile Apps</div>
            <div onClick={scrollToServices} className="hover:text-gray-50 cursor-pointer">Services</div>
           


</div>


            <div className="flex md:hidden">
                {isDropDownVisible ? (
                    <div
                        onClick={toggleDropDown}
                        className="w-8 h-8 text-slate-300 cursor-pointer"
                    >
                        <X />
                        <DropDownMenu onClose={closeDropDown}/>
                    </div>
                ) : (
                    <AlignJustify 
                        onClick={toggleDropDown}
                        className="w-8 h-8 text-slate-300 cursor-pointer" 
                    />
                )}
            </div>

        <div className="hidden md:flex">
          <Link 
          href="/contact" 
          className="
          px-8 py-2 rounded-md bg-[#FF6220] text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-[#FF6220]">
            Contact
          </Link> 
                

        </div>
        </div> 
    );
};

export default Navbar;


