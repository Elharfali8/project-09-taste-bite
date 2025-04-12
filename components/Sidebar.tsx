'use client'

import { links } from '@/utils/links'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface NavbarProps {
    sideIsOpen: boolean
    handleSide: () => void
  }

const Sidebar = ({ sideIsOpen, handleSide }: NavbarProps) => {
    const pathname = usePathname()

  return (
      <aside className={`bg-[#262522] text-white p-8
        ${sideIsOpen ? 'lg:hidden fixed right-0 left-0 bottom-0 top-0 light-blue-bg-color translate-x-0 transition-all ease-in-out duration-150  z-[99] ' : 'lg:hidden fixed right-0 left-0 bottom-0 top-0 light-blue-bg-color translate-x-[-100%] transition-all ease-in-out duration-150 z-0'}
        `}>
          <div className='flex items-center justify-between'>
              <Link href='/' onClick={handleSide} className='text-2xl font-bold'>
                    Logo
              </Link>
              <button type='button' className=' cursor-pointer p-2 rounded-full bg-[#494744] text-[#F29C33]' onClick={handleSide} >
                  <X size={28} />
              </button>
          </div>

          <ul className='mt-12 grid gap-y-4'>
              {links.map((link) => {
                  const { id, path, title } = link

                  return (
                      <li key={id} >
                          <Link href={path} onClick={handleSide} className={`pb-1 border-b-[2px] block font-bold capitalize text-xl ${pathname === path && 'text-[#F29C33] border-b-[#F29C33]'} transition-all ease-in-out duration-150 hover:pl-2`}>
                            {title}
                          </Link>
                      </li>
                  )
              })}
          </ul>

          <div className='mt-10 grid grid-cols-4 gap-2'>
              <div className='grid place-items-center col-span-1'>
              <button type='button' className='bg-[#494744] p-2 rounded-full'>
                      <Search size={28} />
                  </button>
              </div>
              <div className='grid place-items-center col-span-3'>
              <button type='button' className='bg-[#494744] p-2 rounded-full w-full'>
                      SUBSCRIBE
                  </button>
              </div>
          </div>
        </aside>
  )
}

export default Sidebar