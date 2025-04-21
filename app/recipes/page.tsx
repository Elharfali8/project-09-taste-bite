'use client'
import BreadCrumbs from '@/components/BreadCrumbs'
import Filters from '@/components/Filters'
import MainCard from '@/components/MainCard'
import { categoriesData } from '@/utils/data'
import React, { useState } from 'react'

const RecipesPage = () => {
    const [activeBtn, setActiveBtn] = useState('All')

  return (
      <main className='py-4 lg:py-8 min-h-[calc(100vh-86px)] lg:min-h-[calc(100vh-102px)]'>
          <div className="container main-container">
              <BreadCrumbs title='recipes' id='' page={true} />
              <Filters activeBtn={activeBtn} />
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-8'>
                  {categoriesData.map((category) => {
                      const { id } = category
                      return (
                          <MainCard key={id} {...category} />
                      )
                  }
                    )}
              </div>
          </div>
    </main>
  )
}

export default RecipesPage