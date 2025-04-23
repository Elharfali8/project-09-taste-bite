import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  id?: string
  page?: boolean
}

const BreadCrumbs = ({title, id, page}: Props) => {
  return (
    <div className='flex items-center gap-x-2 mb-2 lg:mb-4'>
      <Link href='/' className='text-gray-600 md:text-lg lg:text-xl hover:text-black'>Home</Link>
      <span className='text-gray-600 md:text-lg lg:text-xl hover:text-black'>&gt;</span>
      {page ? (
        <span  className='text-gray-600 md:text-lg lg:text-xl hover:text-black'>Recipes</span>
      ): (
        <Link href={`/${title}`} className='text-gray-600 md:text-lg lg:text-xl hover:text-black'>Recipes</Link>
      )}
      {id && (
        <><span className='text-gray-600 md:text-lg lg:text-xl hover:text-black'>&gt;</span>
      <Link href={`/${title}/${id}`} className='text-gray-600 md:text-lg lg:text-xl hover:text-black'>Recipe Title</Link> </>
      )}
    </div>
  )
}

export default BreadCrumbs