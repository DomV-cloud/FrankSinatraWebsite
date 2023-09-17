import { useState } from "react";

export default function HamburgerIcon() {
  

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <button className="relative group " onClick={toggleMenu}>
        <div className={`relative flex  overflow-hidden items-center justify-center  rounded-full  w-[50px]  h-[50px]  transform  transition-all ring-0  ring-secondary  hover:ring-8 duration-200 shadow-md ${isOpen ? "ring-4" : ""}`}>
          <div className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden`}>
            {/*This is div as Hamburger */}
            <div className={`bg-font-color h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? "rotate-45 translate-y-6 delay-100" : ""}`}></div>
            <div className={`bg-font-color h-[2px] w-7 rounded transform transition-all duration-300 ${isOpen ? "translate-y-6 delay-75" : ""}`}></div>
            <div className={`bg-font-color h-[2px] w-7 transform transition-all duration-300 origin-left ${isOpen ? "translate-y-6" : ""}`}></div>

            {/*This is div with X*/}
            <div className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${isOpen ? "translate-x-0" : "-translate-x-10"} flex w-0 ${isOpen ? "w-12" : ""}`}>
              <div className={`absolute bg-font-color h-[2px] w-5 transform transition-all duration-500 ${isOpen ? "rotate-45 delay-300" : ""}`}></div>
              <div className={`absolute bg-font-color h-[2px] w-5 transform transition-all duration-500 ${isOpen ? "-rotate-45 delay-300" : ""}`}></div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
