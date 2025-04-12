import { StaticImageData } from 'next/image'
import breakfast from '@/public/assets/breakfast.png'
import lunch from '@/public/assets/lunch.png'
import dinner from '@/public/assets/dinner.png'
import dessert from '@/public/assets/dessert.png'
import bite from '@/public/assets/bite.png'

type Explore = {
  id: number,
  icon: StaticImageData,
    title: string,
  path: string
}

export const explore: Explore[] = [
  {
    id: 1,
    icon: breakfast,
        title: 'Breakfast',
    path: 'breakfast'
  },
  {
    id: 2,
    icon: lunch,
      title: 'Lunch',
    path: 'lunch'
  },
  {
    id: 3,
    icon: dinner,
      title: 'Dinner',
    path: 'dinner'
  },
  {
    id: 4,
    icon: dessert,
      title: 'Dessert',
    path: 'dessert'
  },
  {
    id: 5,
    icon: bite,
      title: 'Quick Bites',
    path: 'quickBites'
  },
]
