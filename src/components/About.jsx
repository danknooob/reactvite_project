import React from 'react';

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='text-[4vw] font-bold leading-[4.5vw] tracking-tight'>Ochi serves as a strategic partner for rapidly expanding tech enterprises, aiding in fundraising, product sales, conveying intricate concepts, and recruiting top talent.</h1>
      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
        <div className='w-1/2 '>
            <h1 className='text-7xl'>Our Approach:</h1>
            <button className=' flex gap-10 uppercase items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
            </button>
        </div>
        <div className='w-1/2 h-[70vh]  bg-red-500  rounded-3xl'>
        <img src='https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt943c9f051f0087c0/639f1d7d03c7a66c44782060/GettyImages-1245184407.jpg?auto=webp&format=pjpg&width=3840&quality=60'
        className='h-[70vh]'>

        </img>
        </div>
      </div>
    </div>
  );
}

export default About;
