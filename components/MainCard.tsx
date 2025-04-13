import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

type Prop = {
    id: number,
    name: string,
    desc: string,
    img: StaticImageData
}

const MainCard = ({id, name, desc, img}: Prop) => {
  return (
      <div  className='rounded-2xl bg-[#FFFBF2]'>
          <Image src={img} alt={name} height={220} width={300} className=' object-cover w-full' />
          <div className='pt-3 lg:pt-5 px-3 '>
              <h1 className='text-xl md:text-2xl font-semibold xl:text-3xl  '>
                  {name}
              </h1>
              <p className='mt-2 lg:text-lg text-[#646F77]'>
                  {desc}
              </p>
          </div>
          <div className='flex items-center justify-end mb-3 mr-3'>
            <Button variant='outline' asChild className=' bg-inherit border-[1px] border-black mt-6 rounded-2xl'>
                <Link href={`/recipes/${id}`}>
                VIEW RECIPE
                </Link>
            </Button>
          </div>
    </div>
  )
}

export default MainCard