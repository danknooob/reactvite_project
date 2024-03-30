import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUp } from "react-icons/fa6";

function LandingPage() {
  return (
    <div  data-sroll data-scroll-section data-scroll-speed="-0.3"   className='w-full h-screen bg-zinc-900 pt-2'>
      <div className='textstructure mt-52 px-20'>
        {["We Make", "Eye-Opening", "Comaparisons"].map((item, index) => {
          return (
            <div className='masker bg-zinc-600'>
                <div className='w-fit flex '>
                    {index===1 && 
                    <motion.div 
                    initial={{width: 0}} 
                    animate={{width: "8vw"}} 
                    transition={{ease: [0.76, 0, 0.24, 1] ,duration: 1}} 
                    className='mr-[1vw] w-[8vw] rounded-md h-[6.5vw] relative top-[1vw] '>
                      <img src='https://preview.thenewsmarket.com/Previews/ADID/StillAssets/920x690/530457.jpg' alt='ball' className='w-full h-full' >
                      </img>
                      </motion.div>}
                     <h1 className='uppercase text-[7.5vw] leading-[7vw] tracking-tighter font-semibold'>{item}</h1>
                </div>
             
            </div>
          );
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20'>
        {["For National Squad and Clubs", "From the first signing to the GOATS"].map((item, index) => {
          return (
            <p key={index} className='text-md font-light tracking-tighter leading-none'>{item}</p>
          );
        })}
        <div className="start flex items-center gap-5  ">
        <div className='px-5 py-2 border-[2px] border-zinc-500 font-light text-md uppercase rounded-full'>
           Comapre The Players
        </div>
        <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500 '>
            <span className='rotate-[45deg]'>
                 <FaArrowUp/>
            </span>
           
            </div>
      </div>
      </div>
      
    </div>
  );
}

export default LandingPage;
