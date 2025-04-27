'use client'

import BreadCrumbs from '@/components/BreadCrumbs'
import { categoriesData } from '@/utils/data'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React from 'react'

type Prop = {
    id: number,
    name: string,
    desc: string,
    img: StaticImageData,
  ingredients?: [],
  dishTypes?: string[],
  readyInMinutes?: number,
  sourceUrl?: string,
}

const SingleRecipePage = () => {
    const { id } = useParams()  
    
    const recipeId = Number(id)

  const recipe: Prop | undefined =  categoriesData.find((item) => item.id === recipeId)

  console.log(recipe?.sourceUrl);
  
  

  if (!recipe) {
    return (
      <main className='py-4'>
        <div className='container'>
          <p className='text-center text-lg text-red-500'>Recipe not found.</p>
        </div>
      </main>
    )
  }
  
  
  
  return (
    <main className='py-4 lg:py-8 min-h-[calc(100vh-86px)] lg:min-h-[calc(100vh-102px)]'>
          <div className="container main-container">
        <BreadCrumbs title='recipes' id={recipeId.toString()} page={true} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center'>
          <div className='grid place-items-center overflow-hidden'>
            <Image src={recipe?.img} alt={recipe?.name} className='w-full h-auto rounded-2xl shadow-lg object-cover' />
          </div>
          <div>
            <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{recipe?.name}</h1>
            <p className='text-gray-500 mt-2 md:text-lg lg:text-xl'>{recipe?.desc}</p>
            <div className='flex items-center gap-2 mt-2'>
              <span className='text-sm font-semibold text-gray-700'>Source:</span>
              {recipe?.sourceUrl && (
                <Link href={recipe?.sourceUrl}  className='text-blue-500 hover:underline'>{recipe?.sourceUrl}</Link>
              )}
            </div>
            <div className='my-4'>
              <span className='text-sm  font-semibold text-gray-700'>Ready in:</span>
              <span className='lg:text-lg font-semibold text-red-600 ml-2'>{recipe?.readyInMinutes} minutes</span>

            </div>
            <div className='my-4'>
              <span className='text-sm font-semibold text-gray-700'>Dish Types:</span>
              <div className='flex flex-wrap gap-2 mt-2'>
                {recipe?.dishTypes?.map((type, index) => (
                  <span key={index} className='bg-blue-100 text-blue-800 lg:text-lg font-medium px-2.5 py-0.5 rounded-full'>{type}</span>
                ))}
              </div>
            </div>
            <div className=' bg-white p-4 rounded-lg shadow-md'>
              <h2 className='text-xl font-semibold'>Ingredients</h2>
              <ul className='list-disc list-inside mt-2'>
                <li>Ingredient 1</li>
                <li>Ingredient 2</li>
                <li>Ingredient 3</li>
                <li>Ingredient 4</li>
                <li>Ingredient 5</li>
              </ul>   
              </div>
          </div>
        </div>
          </div>
          </main>
  )
}

export default SingleRecipePage