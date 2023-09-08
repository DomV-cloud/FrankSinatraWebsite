import Frank from '../assets/frank.jpg';





export default function Hero() {
  return (

    <div className="flex flex-row w-full h-screen">
        {/* left side with text*/ }
        <div className=" w-full h-screen flex justify-center items-center">
        
         {/* container for texts*/ }
         <div className="flex flex-col gap-4">

            <div className="font-bebas  flex flex-row justify-end items-end gap-4">
              <h2 className="text-font-color text-7xl">nothing but 
              </h2>

              <h1 className="text-secondary text-9xl">the best</h1>
            </div>
            <h2 className="text-secondary font-nautigal text-6xl">Frank Sinatra</h2>

         </div>

         {/* container for texts*/ }

        </div>

        <div className="w-1/2  bg-secondary h-screen flex justify-end items-end  ">
        <img className='h-full ' src={Frank} alt="Frank" />
        </div>
    </div>
  )
}
