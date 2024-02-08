import { TItem, TPhotoSlides } from "./types";

export const nullItem : TItem = {
  name: "",
  id: "",
  type: "",
  style: "wood",
  additional : {
    appar: false,
    mirror: false,
    noise: false,
    thermal: false,
  },
  material: "",
  price: 0,
  fullPrice: 0,
  sizes: ['', ''],
  color: ""
}

export const SliderItems : TPhotoSlides[] = [
  {
    id: 1,
    title: 'Пример нашей работы №1',
    url: '/images/ourWorks/ourWorks01.jpeg'
  },
  {
    id: 2,
    title: 'Пример нашей работы №2',
    url: '/images/ourWorks/ourWorks02.jpeg'
  },
  {
    id: 3,
    title: 'Пример нашей работы №3',
    url: '/images/ourWorks/ourWorks03.jpeg'
  },
  {
    id: 4,
    title: 'Пример нашей работы №4',
    url: '/images/ourWorks/ourWorks04.jpeg'
  },
  {
    id: 5,
    title: 'Пример нашей работы №5',
    url: '/images/ourWorks/ourWorks05.jpeg'
  },
  {
    id: 6,
    title: 'Пример нашей работы №6',
    url: '/images/ourWorks/ourWorks06.jpeg'
  },
]
  
