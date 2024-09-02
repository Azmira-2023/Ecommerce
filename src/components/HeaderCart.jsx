import React from 'react'

const HeaderCart = () => {
  return (
  
    <div className='max-w-[1640px] m-auto p-4 py-12 grid md:grid-cols-3 gap-8'>
        {/* Card */}
       
        
        <div className='rounded-xl relative'>
            {/* overlay */}
       
     
            <div className='absolute w-full h-full rounded-xl text-black-700'>
                <p className='font-bold text-2xl px-2 pt-4'>Breakfast</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='h-[300px] md:h-[300px]  w-full object-cover rounded-xl'
             src="https://media.self.com/photos/589a2a10c29288190cbe7b25/4:3/w_2560%2Cc_limit/breakfast-size.jpg" alt="" />

        </div>
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full rounded-xl text-black'>
                <p className='font-bold text-2xl px-2 pt-4'>Lunch</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='h-[300px] md:h-[300px]  w-full object-cover rounded-xl'
             src="https://niteowlpediatrics.com/themes/niteowl/assets/wp-content/uploads/2020/08/46461220_s.jpg" alt="" />

        </div>
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full rounded-xl text-black'>
                <p className='font-bold text-2xl px-2 pt-4'>Dinner</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
            <img
            className='h-[300px] md:h-[300px]  w-full object-cover rounded-xl'
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dDAokQPzhcxIz2Actq0TWbARc-4gVtCsYUTNHuhf9q85_L8XrcSbeOJSAhBkYHmXLFQ&usqp=CAU" alt="" />

        </div>
    </div>
   
  
  )
}

export default HeaderCart