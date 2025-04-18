import Image from 'next/image'
import aboutUs from '@/public/assets/about-us.png'
import recipeCard2 from '@/public/assets/recipe-card2.png'
import recipeCard from '@/public/assets/recipe-card.png'

const AboutUs = () => {
  return (
      <section className='my-10 lg:my-16 px-2 lg:px-4'>
          <div className='container main-container border border-black p-2 rounded-xl grid xl:grid-cols-4 gap-2'>
              <div className='xl:col-span-3 w-full grid gap-2'>
                  <div className='flex items-center justify-between px-2 lg:px-4 gap-4'>
                      <div className=''>
                          <span className='bg-[#EE6352] text-white font-bold px-6 py-1 rounded-xl uppercase'>
                              ABOUT US
                          </span>
                          <h1 className=' uppercase text-2xl md:text-3xl lg:text-4xl font-bold my-2'>
                          Our Culinary <br /> Chronicle
                          </h1>
                          <p className='text-[#646F77] lg:text-lg max-w-[450px]'>
                          Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences. Join us in savoring the essence of every dish and the stories that unfold.
                          </p>
                      </div>
                      <div>
                          <Image
                              src={recipeCard2}
                              alt='recipe card 2'
                              width={316}
                              height={326}
                              className='rounded-xl '
                          />
                      </div>
                  </div>
                  <div className='px-2 lg:px-4'>
                      <Image
                          src={recipeCard}
                          alt='recipe card'
                          width={861}
                          height={331}
                          className='w-full h-[331px] object-cover xl:object-fill rounded-2xl'
                      />
                  </div>
              </div>
              <div className='xl:col-span-1  w-full hidden xl:grid place-content-end'>
                  <Image
                      src={aboutUs}
                      alt='about us'
                      width={411}
                      height={665}
                      className='w-full h-[683px] object-contain'
                  />
              </div>
          </div>
    </section>
  )
}

export default AboutUs