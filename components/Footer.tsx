import { links } from '@/utils/links'
import Link from 'next/link'
import React from 'react'
import { FaTiktok, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
      <footer className='py-4 lg:py-8 px-2 lg:px-0 '>
          <div className="container main-container bg-[#262522] py-4 lg:py-10 rounded-2xl ">
              <div className='flex items-center flex-col md:flex-row justify-between px-2 !lg:px-4'>
                <Link href='/' className='lg:pl-2 font-extrabold text-xl md:text-2xl lg:text-3xl text-white'>
                    Logo
                  </Link>
                  <ul className='flex flex-wrap items-center gap-4 my-6 md:my-0'>
                      {links.map((link) => {
                          const { id, title, path } = link
                          
                          return (
                              <li key={id}>
                                  <Link href={path} className='text-white lg:text-lg capitalize font-medium hover:text-gray-400'>
                                    {title}
                                  </Link>
                              </li>
                          )
                      })}
                  </ul>

                  <ul className='flex items-center gap-x-2'>
                      <li><FaFacebookF color='white' size={26} /></li>
                      <li><FaInstagram color='white' size={26} /></li>
                      <li><FaTiktok color='white' size={26} /></li>
                      <li><FaYoutube color='white' size={26} /></li>
                  </ul>
              </div>
          </div>
    </footer>
  )
}

export default Footer