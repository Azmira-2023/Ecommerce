import React from 'react'

const Hero = () => {
  return (
    <div className='mx-auto p-4'>
        <div className='relative'>
        <img className='w-full  h-[600px] object-cover bg-black/40' src="https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322811/best-food-to-eat-in-the-morning.jpg" alt=""/>
            {/* overlay */}
            <div className='absolute -translate-y-1/2 top-1/2
             text-gray-200 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold translate-2.5 text-black'> The <span className='text-orange-500'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black'>Foods <span className='text-orange-500'>Delivered</span></h1>
               
            </div>
           
        </div>
    
    </div>
  )
}

export default Hero