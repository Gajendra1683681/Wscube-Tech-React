import React from 'react'

export default function Plans() {
    return (
        <div className='py-[50px] px-3'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
                <div className=' shadow-xl my-[80px] mx-[20px] rounded-lg hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-40px]' src="img/single.png" alt="" />
                    <h2 className='text-center font-bold my-4 text-2xl '>Web development</h2>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>

                    <button className='bg-[#00df9a] rounded-md py-3 px-[60px] font-medium my-6 mx-auto block'>Start Trial</button>
                </div>
                {/*  */}
                <div className='shadow-xl my-[80px]  mx-[20px] rounded-lg bg-gray-100 hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-40px]' src="img/double.png" alt="" />
                    <h2 className='text-center font-bold my-4 text-2xl '>Digital Marketing</h2>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>

                    <button className='bg-black text-[#00df9a] rounded-md py-3 px-[60px] font-medium my-6 mx-auto block'>Start Trial</button>
                </div>
                {/*  */}
                <div className=' shadow-xl my-[80px]  mx-[20px] rounded-lg hover:scale-105 duration-500'>
                    <img className='w-20 mx-auto mt-[-40px]' src="img/triple.png" alt="" />
                    <h2 className='text-center font-bold my-4 text-2xl '>App development</h2>
                    <p className='text-center font-bold text-4xl'>$149</p>
                    <div className='text-center'>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dummy text of the printing</p>
                        <p className='py-2 border-b mx-8'>Lorem Ipsum is simply dumm.</p>
                    </div>

                    <button className='bg-[#00df9a]  rounded-md py-3 px-[60px] font-medium my-6 mx-auto block '>Start Trial</button>
                </div>
                {/*  */}
            </div>

        </div>
    )
}
