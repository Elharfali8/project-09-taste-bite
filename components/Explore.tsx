import { explore } from '@/utils/explore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Explore = () => {
  return (
    <section className='py-8 lg:py-12'>
      <div className="container main-container bg-[#C4E5FC] rounded-2xl !px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-6 items-center">
        <div>
          <span className='bg-[#EE6352] text-white font-bold px-6 py-1 rounded-xl'>
            Explore
          </span>
          <h1 className='text-2xl my-2 font-bold md:text-3xl lg:text-4xl uppercase'>
            Our diverse Palette
          </h1>
          <p className='text-[#646F77]'>
          If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
          </p>
        </div>
        {/*  */}
        <div className='grid place-items-center'>
        <ul className='grid gap-6 lg:gap-8 w-full max-w-[497px]'>
          {explore.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/recipes?explore=${item.path}`} className='flex items-center justify-between shadow-md p-1 rounded-md transition-all ease-in-out duration-150 hover:px-2 uppercase'>
                  <Image src={item.icon} alt={item.title} width={40} height={40} />
                  <span className='font-medium text-lg  lg:text-xl'>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
        </div>
      </div>
    </section>
  )
}

export default Explore