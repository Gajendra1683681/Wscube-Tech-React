import React from 'react'
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <div className='bg-cyan-400 w-full'>
            <div className='max-w-[1240px] mx-auto px-5 py-10 lg:grid grid-cols-3 gap-8 text-white' >
                <div>
                    <h1 className=' text-black font-bold text-3xl mb-4'>Wscube Tech</h1>
                    <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                    <div className='flex justify-between md:w-[75%] my-4 text-3xl'>
                        <IoLogoFacebook className='hover:' />
                        <IoLogoInstagram />
                        <FaTwitterSquare />
                        <FaGithubSquare />
                    </div>
                </div>
                {/*  */}
                <div className='lg:col-span-2 mt-6 flex justify-between'>
                    <div>
                        <h6 className='text-black font-bold hover:text-white'>Soulation</h6>
                        <ul>
                            <li className='py-2 text-sm hover:text-black'>Analytics</li>
                            <li className='py-2 text-sm hover:text-black'>Marketing</li>
                            <li className='py-2 text-sm hover:text-black'>Commerce</li>
                            <li className='py-2 text-sm hover:text-black'>Insights</li>
                        </ul>
                    </div>
                    {/*  */}
                    <div>
                        <h6 className='text-black font-bold font-medium hover:text-white'>Support</h6>
                        <ul>
                            <li className='py-2 text-sm hover:text-black'>Pricing</li>
                            <li className='py-2 text-sm hover:text-black'>Documentation</li>
                            <li className='py-2 text-sm hover:text-black'>Guides</li>
                            <li className='py-2 text-sm hover:text-black'>API Status</li>
                        </ul>
                    </div>
                    {/*  */}
                    <div>
                        <h6 className='text-black font-bold font-medium hover:text-white'>Company</h6>
                        <ul>
                            <li className='py-2 text-sm hover:text-black'>About</li>
                            <li className='py-2 text-sm hover:text-black'>Blog</li>
                            <li className='py-2 text-sm hover:text-black'>Jobs</li>
                            <li className='py-2 text-sm hover:text-black'>Press</li>
                        </ul>
                    </div>

                </div>


            </div>

        </div>
    )
}
