import AboutUs from '@/components/AboutUs'
import Categories from '@/components/Categories'
import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
import Subscribe from '@/components/Subscribe'
import React from 'react'

const Home = () => {
  return (
    <main>
      <Hero />
      <Explore />
      <Categories />
      <AboutUs />
      <Subscribe />
    </main>
  )
}

export default Home