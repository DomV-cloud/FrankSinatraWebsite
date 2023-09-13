import Frank from '../assets/frank.jpg';

export default function Hero() {


  return (

    <section className="flex flex-row w-full h-screen">
      
        {/* left side with text*/ }
        <div className=" w-full h-screen flex justify-center items-center">
        
         {/* container for texts
         
         mobily - nothing - 40px
                  the best - 64px
                  podpis - 48

                  
         
         */ }
         <div className="
         flex 
         flex-col 
         md:gap-6
         ">

            <div className="font-bebas  
            md:flex 
            md:flex-row 
            md:justify-end 
            md:items-end 
            md:gap-4
            
            


            ">
              <h2 className="text-font-color 
              md:text-7xl  
              md:leading-[15px]

              text-[40px]
              
               ">nothing but 
              </h2>

              <h1 className="text-secondary 
              md:text-9xl 
              md:leading-[45px]
              md:ml-0

              text-[64px]
              ml-40
          
              
              ">the best</h1>
            </div>

           
            <h2 className=" text-secondary font-nautigal 
              md:text-6xl
              text-5xl"> - Frank Sinatra</h2>
            
         </div>

         {/* container for texts*/ }

        </div>

        <div className="w-1/2 hidden sm:block  bg-secondary h-screen flex justify-end items-end  ">
        <img className='h-full ' src={Frank} alt="Frank" />
        </div>
    </section>
  )
}


