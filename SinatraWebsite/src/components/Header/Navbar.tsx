import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./Mobile/MobileMenu";

export default function Navbar() {
  return (
    <section className="
     md:flex
     md:flex-row
     md:justify-center
     md:w-full
     md:font-bebas
     text-font-color
     list-none
     font-bebas
     mt-4
     ">
      
       <DesktopMenu/>
       <div className="
       flex 
       items-center
       justify-end
       mr-12
       
       ">
       <MobileMenu/>
       </div>
    
    </section>
  )
}
