
import { useState } from "react";
import HamburgerIcon from "../../Icons/HamburgerIcon";

export default function MobileMenu() {
  const[nav, setNav] = useState(false)

  /// set the opposite value of the setNav() method
  const handleNav = () =>{
      setNav(!nav)
  }

return (
  <div className='flex justify-end w-full items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      
     

      {/* mobile menu */}
      <div className='block font-bebas text-5xl '>
        <div onClick={handleNav} className='block'>
          <HamburgerIcon/>
        </div>
        <ul className={`
        fixed 
        flex 
        flex-col
        justify-center 
        left-0 
        top-0 
        h-full 
        w-[100%] 
        transition-top 
        ease-in-out duration-500
        bg-blur
         ${nav ? 'top-0 opacity-100 ' : 'top-[-100%] opacity-0'}`}>
          
          <div onClick={handleNav} className='
          flex
          justify-end'>
          <HamburgerIcon/>
          </div>
          <li className='
          p-4 
          flex
          justify-center 
          
          '>
            <a href="#" className="
             relative 
              w-fit 
              block
              after:block
             after:content-[''] 
             after:absolute 
             after:h-[3px] 
             after:bg-secondary
             after:w-full 
             after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center
             ">
                home
            </a>
          </li>

        
         
        </ul>
      </div>


      {/* mobile menu */}
  </div>
)
}
