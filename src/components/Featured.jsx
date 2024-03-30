import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

function Featured() {
  const [isHovering,setHovering]=useState(false);
  // const handleHover=()=>{
  //   setHovering(true);

  // }
  const cards=[useAnimation(),useAnimation()]
  const handleHover=(index)=>{
    cards[index].start({y:"0"});
    // cards[1-index].whileHover({ scale: 0.5 })

  }
  const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"})

  }
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-6xl'>Featured Projects</h1>
      </div>
      <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className='cardcontainer relative w-1/2 h-[80vh]'>
            <h1 className='card absolute flex overflow-hidden left-full top-1/2 -translate-x-1/3 overflow-hidden -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]'>
            {"RONALDO".split('').map((item,index)=>
            <motion.span 
            initial={{y: "100%"}} 
            animate={cards[0]}
            transition={{ease:[0.22,1,0.36,1],delay:index*0.06}}
            className='inline-block'>
              {item}</motion.span>)}
            </h1>
            <div className='card w-full h-full rounded-3xl bg-green-500 overflow-hidden'>
              <img className='w-full h-full object-cover' src='https://i.pinimg.com/originals/22/a6/6e/22a66ef9fc1067375df29ee4fd04954b.jpg' alt='RONALDO'></img>
            </div>
          </motion.div>
          <motion.div  onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className='cardcontainer relative w-1/2 h-[80vh]'>
            <h1 className='card absolute flex overflow-hidden right-full top-1/2 translate-x-20 overflow-hidden -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl text-[#CDEA68]'>
            {"MESSI".split('').map((item,index)=>
            <motion.span 
            initial={{y: "100%"}} 
            animate={cards[1]}
            transition={{ease:[0.22,1,0.36,1],delay:index*0.06}}
            className='inline-block'>
              {item}</motion.span>)}
            </h1>
            <div className='card w-full h-full rounded-3xl bg-green-500 overflow-hidden'>
              <img className='w-full h-full object-cover' src='https://i.pinimg.com/736x/1f/a1/26/1fa126425d792067b1350066753147ef.jpg' alt='MESSI'></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
