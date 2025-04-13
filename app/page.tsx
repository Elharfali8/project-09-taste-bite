import Categories from '@/components/Categories'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Explore />
      <Categories />
    </main>
  )
}

export default Home