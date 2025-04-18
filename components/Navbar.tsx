'use client'

import { links } from '@/utils/links'
import { AlignJustify, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from './ui/button'

interface NavbarProps {
    sideIsOpen?: boolean
    handleSide: () => void
  }

const Navbar = ({ handleSide }: NavbarProps) => {
    const pathname = usePathname()

  return (
      <nav className='w-full  grid place-items-center py-2 lg:py-4 px-2 lg:px-0'>
          <div className="container main-container h-[70px] w-full flex justify-between items-center border-[1px] border-[#9F9C95] rounded-full" >
              
              <Link href='/' className='lg:pl-2 font-extrabold text-xl md:text-2xl lg:text-3xl'>
                Logo
              </Link>

              <ul className='hidden lg:flex items-center gap-x-4'>
                  {links.map((link) => {
                      const { id, path, title } = link
                      
                      return (
                          <li key={id}>
                              <Link href={path} className={`capitalize text-lg xl:text-xl font-medium text-[#9F9C95] ${pathname === path && 'text-black pb-1 border-b-[2px] border-b-[#EE6352]'}`}>
                                  {title}</Link>
                          </li>
                      )
                  })}
              </ul>

              <div className='hidden lg:flex items-center gap-x-5 lg:pr-2'>
                  <button type='button' >
                      <Search size={28} />
                  </button>
                  <Button className='rounded-2xl'>
                      SUBSCRIBE
                  </Button>
              </div>

              <div className='lg:hidden grid place-items-center'>
                  <Button size='icon' className='bg-[#F29C33] text-black hover:text-white cursor-pointer' onClick={handleSide}>
                      <AlignJustify  />
                  </Button>
              </div>

          </div>
    </nav>
  )
}

export default Navbar