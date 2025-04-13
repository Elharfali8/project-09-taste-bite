import chicken from '@/public/assets/chicken.png'
import { StaticImageData } from 'next/image'

type Prop = {
    id: number,
    name: string,
    desc: string,
    img: StaticImageData
}

export const categoriesData: Prop[] = [
    {
        id: 1,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken
    },
    {
        id: 2,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken
    },
    {
        id: 3,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken
    },
    {
        id: 4,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken
    },
]