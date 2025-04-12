import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
      <section className='min-h-[calc(100vh-86px)] lg:min-h-[calc(100vh-102px)] grid place-items-center px-2 lg:px-0'>
          <div className="container main-container  grid place-items-center bg-red-200 py-8 h-[90%] rounded-3xl  "
              style={{
                  backgroundImage: 'url(/assets/hero.png)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
            }}
          >
            
              
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    UNLEASH CULINARY EXCELLENCE
                    </h1>
                    <p className="mt-6 mb-8 text-lg md:text-xl lg:text-2xl font-medium">
                    Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen
                    </p>
                    <Link href='/recipes' className="primary-btn ">
                    EXPLORE RECIPES
                    </Link>
                </div>
          </div>
    </section>
  )
}

export default Hero