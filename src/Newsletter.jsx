import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-cyan-400 p-4'>
        <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
            <div className='m-2'>
                <h1 className='text-white font-bold text-[20px] md:text-[40px]'>Want to learn latest I.T skills ?</h1>
                <p className='text-white'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='m-2'>
                <input className='p-3 mr-2 text-slate-600 rounded w-[65%]' type="text" placeholder='Email' />
                <button className='bg-black text-white p-2 rounded hover:bg-orange-200 hover:text-black'>Get Started</button>
                <br />
                <p className='text-white'>We care bout the protection of your data. Read our <br/><span className='text-black'> Privacy Policy</span></p>

            </div>

        </div>
      
    </div>
  )
}
