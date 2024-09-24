import React from 'react'
import { ReactTyped } from "react-typed";

export default function Banner() {
  return (
    <div className='bg-cyan-400 w-full py-[100px]'>
        <div className='mx-w-[1240px] my-[100px] mx-auto text-center'>
            <div className='text-black text-xl md:text-4xl md:p-[20px] font-bold'> 
                Learn with us
            </div>
            <h2 className='text-white text-5xl md:text-[80px] md:p-[20px] font-bold'>Grow with us</h2>
            <div className='text-white text-[20px] md:text-[50px] md:p-[20px] font-bold'>
                Learn  <ReactTyped className='pl-3'
                strings={["Web Development","Digital Marketing","Ethical Hacking"]} typeSpeed={100}  backSpeed={50} loop={true} />

            </div>
            <button className='bg-black hover:bg-zinc-400 text-white px-6 py-3 rounded mt-5 '>Get Started</button>

        </div>
      
    </div>
  )
}
