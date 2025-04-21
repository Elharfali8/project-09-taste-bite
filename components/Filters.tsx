import { categoriesBtns } from '@/utils/data'
import React from 'react'

const Filters = ({activeBtn}: {activeBtn: string}) => {


  return (
      <div className='p-6 rounded-2xl border border-[#9F9C95] grid place-items-center'>
          
          <div className='flex flex-wrap items-center gap-2 '>
              {categoriesBtns.map((btn) => {
                  const { id, name, query } = btn
                  return (
                      <button key={id} className={`!px-8 py-2 rounded-full cursor-pointer font-medium md:text-lg  lg:text-xl ${activeBtn === name ? 'bg-[#d94d3e] text-white ' : 'border-[#9F9C95] border transition-all ease-in-out duration-150 hover:text-white hover:bg-[#ff8274] hover:border hover:border-white'}`} onClick={() => {}}>
                          {name}
                      </button>
                  )
              })}
              </div>
    </div>
  )
}

export default Filters