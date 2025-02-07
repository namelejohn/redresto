import {Product, Filter, Match, Event} from '../types';

export const products: Product[] = [
  // Dish
  {
    id: 1,
    name: 'Grilled Salmon',
    image: 'https://i.ytimg.com/vi/dHMZ5tXWI6s/maxresdefault.jpg',
    price: 18.0,
    category: 'Dish',
    description: 'with salmon',
  },
  {
    id: 2,
    name: 'Steak with Fries',
    image: 'https://oliveresto.com/images/slides/3.jpeg',
    price: 20.0,
    category: 'Dish',
    description: 'with beef',
  },
  {
    id: 3,
    name: 'Chicken Alfredo Pasta',
    image:
      'https://i.pinimg.com/originals/bd/5a/29/bd5a2901225d822ece33cabd7f5eade2.jpg',
    price: 15.5,
    category: 'Dish',
    description: 'with sauce',
  },
  {
    id: 4,
    name: 'Vegetable Stir Fry',
    image:
      'https://avatars.mds.yandex.net/i?id=eb55b0d5c807b5f3a4bc5b7a52b8fe07_l-5233671-images-thumbs&n=13',
    price: 12.0,
    category: 'Dish',
    description: 'with vegetables',
  },
  {
    id: 5,
    name: 'BBQ Ribs',
    image:
      'https://simply-delicious-food.com/wp-content/uploads/2020/06/Sticky-BBQ-ribs-3.jpg',
    price: 22.0,
    category: 'Dish',
    description: 'with BBQ sauce',
  },
  {
    id: 6,
    name: 'Roast Chicken',
    image:
      'https://avatars.mds.yandex.net/i?id=d124790cca6f3ecf8780541480b58335_l-12480075-images-thumbs&n=13',
    price: 19.0,
    category: 'Dish',
    description: 'with rosemary',
  },

  // Salads
  {
    id: 7,
    name: 'Caesar Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=a63160b1ebcc920c855e2dc1272cfaa74deb54a5-10451794-images-thumbs&n=13',
    price: 10.0,
    category: 'Salads',
    description: 'with parmesan',
  },
  {
    id: 8,
    name: 'Greek Salad',
    image:
      'https://avatars.mds.yandex.net/get-altay/7186075/2a0000018771c556fb65cdf728ab072414a3/XXL_height',
    price: 9.0,
    category: 'Salads',
    description: 'with olives',
  },
  {
    id: 9,
    name: 'Quinoa Bowl',
    image:
      'https://i.pinimg.com/736x/a1/84/63/a1846358441b1addf4b3bbc75b435ab8--cooking-light-recipes-entree-recipes.jpg',
    price: 11.0,
    category: 'Salads',
    description: 'with avocado',
  },
  {
    id: 10,
    name: 'Caprese Salad',
    image: 'https://cdn.metro-cc.ru/ru/ru_pim_151860001001_03.png',
    price: 8.5,
    category: 'Salads',
    description: 'with mozzarella',
  },
  {
    id: 11,
    name: 'Spinach Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=da501cb18c5f4eb91366cb7af8a218e0_l-5360274-images-thumbs&n=13',
    price: 9.5,
    category: 'Salads',
    description: 'with walnuts',
  },
  {
    id: 12,
    name: 'Avocado Salad',
    image:
      'https://avatars.mds.yandex.net/i?id=948afe86088198ed3494bd0ca53490ae_l-7185373-images-thumbs&n=13',
    price: 10.0,
    category: 'Salads',
    description: 'with dressing',
  },

  // Drinks
  {
    id: 13,
    name: 'Fresh Orange Juice',
    image:
      'https://avatars.mds.yandex.net/i?id=b8dff3e8dea1c9f9d8689c1c05d3b4d4aad03f89-10346227-images-thumbs&n=13',
    price: 4.0,
    category: 'Drinks',
    description: 'with orange',
  },
  {
    id: 14,
    name: 'Iced Coffee',
    image:
      'https://avatars.mds.yandex.net/i?id=ba156ddde0a4cad7a8ae9e5cadb95f69_l-5480364-images-thumbs&n=13',
    price: 3.5,
    category: 'Drinks',
    description: 'with ice',
  },
  {
    id: 15,
    name: 'Smoothie',
    image: 'https://object.pscloud.io/cms/cms/Uploads/image_7FDAnH.png',
    price: 5.0,
    category: 'Drinks',
    description: 'with berries',
  },
  {
    id: 16,
    name: 'Lemonade',
    image:
      'https://www.mashed.com/img/gallery/why-you-might-want-to-think-twice-about-trader-joes-new-sparkling-lemonade/l-intro-1626027167.jpg',
    price: 4.5,
    category: 'Drinks',
    description: 'with mint',
  },
  {
    id: 17,
    name: 'Green Tea',
    image:
      'https://avatars.mds.yandex.net/i?id=42870a2945afc1ff6e40cebe99881bc7_l-5879090-images-thumbs&n=13',
    price: 3.0,
    category: 'Drinks',
    description: 'with jasmine',
  },
  {
    id: 18,
    name: 'Milkshake',
    image:
      'https://i.pinimg.com/736x/fe/4d/ac/fe4dace9e76654cda833479dde0429c4.jpg',
    price: 5.5,
    category: 'Drinks',
    description: 'with vanilla',
  },
];

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'ALL',
  },
  {
    id: 2,
    name: 'DISH',
  },
  {
    id: 3,
    name: 'SALADS',
  },
  {
    id: 4,
    name: 'DRINKS',
  },
];

export const eventData: Event[] = [
  {
    id: 1,
    date: '27.12.24',
    title: 'The history of sushi and rolls',
    desc: 'Sushi and rolls are not only food, but also a unique gastronomic culture from Japan that has gained popularity all over the world. So how did sushi and rolls come about, what is the difference between them and is it possible to prepare these Japanese dishes without leaving home?',
    image: require('../assets/event1.png'),
  },
  {
    id: 2,
    title: "Children's Drawing Master Class",
    date: '01.01.25',
    desc: 'Interactive lesson from a professional artist: An experienced teacher will playfully tell about the basics of drawing, show different techniques and help each child to create their own masterpiece. This is a great opportunity to spend time in an interesting and useful way, in an unfamiliar restaurant environment.\nChildren will be able to socialize and make new friends.\nAn opportunity to try themselves as artists: We will help every child to discover their creative potential.',
    image: require('../assets/event2.png'),
  },
];
