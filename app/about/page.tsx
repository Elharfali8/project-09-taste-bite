import Image from 'next/image'
import React from 'react'
import foodImg from '@/public/assets/food.jpg'

const AboutUsPage = () => {
  return (
    <main className='py-4 lg:py-8 min-h-[calc(100vh-86px)] lg:min-h-[calc(100vh-102px)] grid place-items-center'>
          <div className="container main-container grid items-center lg:grid-cols-2 gap-4 lg:gap-8 ">
              <div className='grid place-items-center'>
                  <Image src={foodImg} alt='About Us' className='w-full h-auto rounded-2xl shadow-lg object-cover' />
        </div>
        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'> Welcome to Taste Bite</h1>
          <p className='text-gray-500 mt-2 md:text-lg lg:text-xl'>
          <span>At FlavorFusion, we believe that food is more than just a meal — it’s a way to connect, celebrate, and create unforgettable moments. <br /></span>

            <span className='block my-2 lg:my-3'>
            Our journey began with a simple passion: bringing delicious, easy-to-make recipes to every kitchen. Whether you're a seasoned chef or just starting out, our recipes are crafted to inspire creativity and joy with every bite. <br />
          </span>

          <span >We are committed to using fresh ingredients, bold flavors, and a touch of love in every recipe we share. Thank you for being part of our community — let's make every meal memorable together!</span>
          </p>
        </div>
            </div>
          </main>
  )
}

export default AboutUsPage