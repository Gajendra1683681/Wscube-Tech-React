import React from 'react'

export default function Exparts() {
  return (
    <div className='max-w-[1240px] my-10 mx-auto md:grid grid-cols-2'>
      <div className=' col-span-1 md:w-[80%] text-center'>
        <img src="img/laptop.jpg" alt="" />
      </div>
      <div className='col-span-1 flex flex-col justify-center'>
        <h1 className='text-teal-300 my-2 font-bold'>LEARN FORM EXPERTS</h1>
        <p className='my-2 justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, autem vel amet laboriosam consequuntur temporibus asperiores fugiat perferendis nam magni tempore culpa! Libero ipsum corrupti eaque dicta, maxime a explicabo?
        </p>
        <button className='w-[30%] bg-black text-white p-3 rounded mt-5 hover:bg-yellow-800 hover:text-black'>Get Started</button>

      </div>

    </div>
  )
}
