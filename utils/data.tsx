import chicken from '@/public/assets/chicken.png'
import { StaticImageData } from 'next/image'

type Prop = {
    id: number,
    name: string,
    desc: string,
    img: StaticImageData,
    dishTypes: string[],
}

type CategoryBtn = {
    id: number,
    name: string,
    query: string
}

export const categoriesData: Prop[] = [
    {
        id: 1,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken,
        dishTypes: [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    },
    {
        id: 2,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken,
        dishTypes: [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    },
    {
        id: 3,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken,
        dishTypes: [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    },
    {
        id: 4,
        name: 'Savory Herb-Infused Chicken',
        desc: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
        img: chicken,
        dishTypes: [
        "lunch",
        "main course",
        "main dish",
        "dinner"
    ],
    },
]

export const categoriesBtns: CategoryBtn[] = [
    { id: 0, name: 'All', query: '' },
    { id: 1, name: 'Vegetarian', query: 'vegetarian' },
    { id: 2, name: 'Vegan', query: 'vegan' },
    { id: 3, name: 'Desserts', query: 'desserts' },
    { id: 4, name: 'Gluten-Free', query: 'gluten free' },
    { id: 5, name: 'Keto', query: 'keto' },
    { id: 6, name: 'Paleo', query: 'paleo' },
    { id: 7, name: 'Breakfast', query: 'breakfast' },
    { id: 8, name: 'Lunch', query: 'lunch' },
    { id: 9, name: 'Dinner', query: 'dinner' },
    { id: 10, name: 'Snacks', query: 'snacks' }
  ];