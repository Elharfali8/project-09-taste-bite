import { explore } from '@/utils/explore'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Explore = () => {
  return (
    <section className='py-8 lg:py-12 px-2 lg:px-0'>
      <div className="container main-container bg-[#C4E5FC] rounded-2xl !px-6 py-10 lg:py-16 grid lg:grid-cols-2 gap-6 items-center">
        <div className='mb-4 lg:mb-0 lg:pl-2'>
          <span className='bg-[#EE6352] text-white font-bold px-6 py-1 rounded-xl'>
            Explore
          </span>
          <h1 className='text-3xl my-2 font-semibold md:text-4xl lg:text-5xl uppercase'>
            Our diverse <br /> Palette
          </h1>
          <p className='text-[#646F77]'>
          If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.
          </p>

          <Button variant='outline' asChild className=' bg-inherit border-[1px] border-black mt-6 rounded-2xl'>
            <Link href='/recipes'>
              SEE MORE
            </Link>
          </Button>

        </div>
        {/*  */}
        <div className='grid place-items-center'>
        <ul className='grid gap-6 lg:gap-8 w-full max-w-[497px]'>
          {explore.map((item) => {
            return (
              <li key={item.id}>
                <Link href={`/recipes?explore=${item.path}`} className='flex items-center justify-between p-1 rounded-md transition-all ease-in-out duration-150 hover:px-2 uppercase'>
                  <Image src={item.icon} alt={item.title} width={50} height={50} />
                  <span className='font-medium text-xl  lg:text-2xl'>{item.title}</span>
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