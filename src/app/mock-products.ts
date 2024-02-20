import { Product } from './core/product';
import { Size } from './core/size';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'آيس كريم',
    imageUrls: ['../assets/ice-cream-prune.svg', '../assets/ice-cream-cherry.svg', '../assets/ice-cream-squash.svg'],
    price: 10,
    flavors: [
      { name: 'نكهة الخوخ', color: '#5A188E' },
      { name: 'نكهة البرتقال', color: '#F88532' },
      { name: 'نكهة الكرز', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.MEDIUM, Size.LARGE],
  },
  {
    id: 2,
    name: 'بوظة',
    imageUrls: ['../../assets/popsicle-lime.svg', '../../assets/popsicle-lettuce.svg', '../../assets/popsicle-cherry.svg'],
    price: 8,
    flavors: [
      { name: 'نكهة الليمون', color: '#00CACA' },
      { name: 'نكهة البطيخ', color: '#80DC0B' },
      { name: 'نكهة الكرز', color: '#E91E63' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
];
