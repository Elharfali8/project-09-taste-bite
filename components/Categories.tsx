'use client'
import { useState } from 'react'
import CategoriesBtns from './CategoriesBtns'
import { categoriesData } from '@/utils/data'
import MainCard from './MainCard'

const Categories = () => {
    const [activeBtn, setActiveBtn] = useState('all')

    const handleActiveBtn = (name: string) => {
        setActiveBtn(name)
    }

  return (
      <section className='py-10 lg:py-16'>
          <div className="container main-container">
              <div className='grid place-items-center mb-5 lg:mb-10'>
                <span className='bg-[#EE6352] text-white font-bold px-6 py-1 rounded-xl uppercase'>
                    Recipes
                  </span>
                  <h1 className='text-3xl md:text-4xl lg:text-5xl my-2 font-bold uppercase text-center'>
                  Embark on a <br /> journey
                  </h1>
                  <p className='text-[#646F77] lg:text-lg text-center'>
                  With our diverse collection of recipes we have something to <br /> satisfy every palate.
                  </p>
              </div>
              <div className='grid place-items-center'>
              <CategoriesBtns activeBtn={activeBtn} handleActiveBtn={handleActiveBtn} />
              </div>
              <div className='mt-6 lg:mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
                  {categoriesData.map((item) => {
        
                      return <MainCard key={item.id} {...item} />
                  })}
              </div>
          </div>
    </section>
  )
}

export default Categories