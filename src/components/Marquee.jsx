import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.2"  className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
      <div className="text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
          }}
          className='text-[22vw] leading-none uppercase leading-none pt-5-mb-2 font-bold'
        >
        We Are Ochi 
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
          }}
          className='text-[22vw] leading-none uppercase pt-5-mb-2 font-bold'
        >
        We Are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
          }}
          className='text-[22vw] leading-none uppercase pt-5-mb-2 font-bold'
        >
        We Are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
