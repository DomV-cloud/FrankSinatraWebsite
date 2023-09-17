
export default function DesktopMenu() {
  return (
    <div className=' 
    md:flex
    md:justify-center
    md:gap-8
    md:text-4xl
    md:mt-4
    hidden sm:block 
    w-full
    '
    >
        <li className="flex items-center">
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

        <li className="flex items-center">
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
                about
            </a>
        </li>

        <li className="flex items-center mb-6">
            <img height={48} width={60} className="mt-0" src="https://img.icons8.com/pastel-glyph/64/b1986b/felt-hat--v1.png" alt="felt-hat--v1"/>
        </li>

        <li className="flex items-center">
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
                career
            </a>
        </li>

        <li className="flex items-center">
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
                life
            </a>
        </li>
    </div>
  )
}
