import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <section className="
     flex
     flex-row
     justify-center
     w-full
     font-bebas
     text-font-color
     list-none
     
     ">
      
       <DesktopMenu/>
       <div className="
       flex 
       items-center
       justify-end
       mr-12">
       <MobileMenu/>
       </div>
    
    </section>
  )
}
