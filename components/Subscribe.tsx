import React from 'react'
import { Button } from './ui/button'

const Subscribe = () => {
  return (
    <section className='py-10 lg:py-16 px-2 lg:px-0'>
      <div className="container main-container bg-[#FF6653] p-8 lg:p-12
       rounded-2xl grid  place-items-center py-10 lg:py-20">
        <div className='grid place-items-center'>
          <span className='text-[#FFFBF2] font-medium lg:text-lg mb-2 lg:mb-3'>SUBSCRIBE</span>
          <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-center text-white mb-2 lg:mb-3'>
            Join the fun <br /> Subscribe now!
          </h1>
          <p className='text-[#FFFBF2] font-medium lg:text-lg max-w-3xl text-center'>
          Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.
          </p>
        </div>
        <div className='mt-4 lg:mt-6 w-full max-w-xl grid place-items-center relative'>
          <input type='email' placeholder='Email Address' className='bg-white w-full max-w-xl  pl-2 rounded-2xl lg:h-[40px] py-3 lg:py-4' />
          <Button className='absolute right-2 rounded-2xl cursor-pointer '>
            SUBSCRIBE
          </Button>
        </div>
      </div>
     </section>
  )
}

export default Subscribe