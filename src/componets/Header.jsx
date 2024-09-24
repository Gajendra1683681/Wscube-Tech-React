import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-cyan-400 p-4'>

            <div className='max-w-[1240px] py[14px] flex justify-between items-center border-black mx-auto'>
                <div className='text-3xl font-bold'>
                    WsCube Tech
                </div>
                {
                    toggle  ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
                }


                <ul className='hidden md:flex text-white gap-10'>
                    <li className='hover:text-violet-600 font-bold'>Home</li>
                    <li className='hover:text-violet-600 font-bold'>Company</li>
                    <li className='hover:text-violet-600 font-bold'>Reasources</li>
                    <li className='hover:text-violet-600 font-bold'>About</li>
                    <li className='hover:text-violet-600 font-bold'>Contact</li>
                </ul>

                {/* responsive side */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black  top-[68px] 
                    ${toggle == true ? 'left-[0]' : 'left-[-100%]'}
                    `}>
                    <li className='p-5'>Home</li>
                    <li className='p-5'>Company</li>
                    <li className='p-5'>Reasources</li>
                    <li className='p-5'>About</li>
                    <li className='p-5'>Contact</li>
                </ul>
            </div>

        </div>
    )
}
