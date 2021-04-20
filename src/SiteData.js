//Import Product Imgs

import qciqen from './img/productimgs/Recommended1.jpeg';
import skrvwo from './img/productimgs/Recommended2.jpeg';
import rdnaqb from './img/productimgs/Recommended3.jpeg';
import ueivah from './img/productimgs/Recommended4.jpg';
import uudbhg from './img/productimgs/Recommended5.jpg';
import xlcsjw from './img/productimgs/Latest1.jpg';
import vdpjgr from './img/productimgs/Latest2.jpg';
import gfvegy from './img/productimgs/Latest3.jpg';
import eaqvta from './img/productimgs/Latest4.jpg';
import fmdujh from './img/productimgs/Latest5.jpg';
import homeSlider1 from './img/sliderimgs/homeSliderImg1L.jpg';
import homeSlider2 from './img/sliderimgs/homeSliderImg2L.jpg';
import homeSlider3 from './img/sliderimgs/homeSliderImg3L.jpg';
import homeSlider4 from './img/sliderimgs/homeSliderImg4L.jpg';

export const siteData = {
  nav: [
    {
      id: 'brands',
      listItems: [
        'Adidas',
        'Nike SB',
        'Carhartt',
        'RVCA',
        'YardSale',
        'Parlez',
        'Stüssy',
        'Vans',
        'Nike',
        'Wayward Axle',
      ],
    },
    {
      id: 'shoes',
      listItems: ['Adidas', 'Nike SB', 'Vans', 'Nike'],
    },
    {
      id: 'clothing',
      listItems: ['Hats', 'T-Shirts', 'Trousers', 'Jackets', 'Fleeces'],
    },
    {
      id: 'accessories',
      listItems: ['Socks', 'Hats', 'Sunglasses', 'Keyrings'],
    },
    {
      id: 'sale',
      listItems: ['Hats', 'T-Shirts', 'Trousers', 'Jackets', 'Fleeces'],
    },
  ],
  slider: [
    {
      img: homeSlider1,
      header: 'Latest Footwear',
      title: 'Nike Air Force',
      subtitle: 'Zebra',
    },
    {
      img: homeSlider2,
      header: 'Latest Footwear',
      title: 'Adidas',
      subtitle: '3MC Shoes',
    },
    {
      img: homeSlider3,
      header: 'New Brand',
      title: 'Wayward Axle',
      subtitle: 'Ldn',
    },
    {
      img: homeSlider4,
      header: 'Brands',
      title: 'Stüssy',
      subtitle: '',
    },
  ],
  products: [
    {
      id: 'xlcsjw',
      title: 'Nike SB Blazer Mid Shoes',
      style: 'Photon Dust, Psychic Blue, Photon Dust',
      price: 7500,
      sizes: [
        'UK 6',
        'UK 6.5',
        'UK 7',
        'UK 7.5',
        'UK 8',
        'UK 8.5',
        'UK 9',
        'UK 9.5',
        'More',
      ],
      img1: xlcsjw,
      url: '/product/xlcsjw',
      brand: 'Nike SB',
      collection: 'shoes/brands/nike sb',
      homepage: 'latest',
    },
    {
      id: 'vdpjgr',
      title: 'Nike SB Wrecked T-Shirt',
      style: 'Black',
      price: 2500,
      sizes: ['S', 'M', 'L', 'XL'],
      img1: vdpjgr,
      url: '/product/vdpjgr',
      brand: 'Nike SB',
      collection: 'clothing/t-shirts/brands/adidas',
      homepage: 'latest',
    },
    {
      id: 'gfvegy',
      title: 'Nike SB Popsicle T-Shirt',
      style: 'White',
      price: 2500,
      sizes: ['S', 'M', 'L', 'XL'],
      img1: gfvegy,
      url: '/product/gfvegy',
      brand: 'Nike SB',
      collection: 'clothing/t-shirts/brands/nike sb',
      homepage: 'latest',
    },
    {
      id: 'eaqvta',
      title: 'Nike SB Keys T-Shirt',
      style: 'Black',
      price: 2500,
      sizes: ['S', 'M', 'L', 'XL'],
      img1: eaqvta,
      url: '/product/eaqvta',
      brand: 'Nike SB',
      collection: 'clothing/t-shirts/brands/nike sb',
      homepage: 'latest',
    },
    {
      id: 'fmdujh',
      title: 'Nike SB YD Stripe T-Shirt',
      style: 'Dark Smoke Grey',
      price: 2500,
      sizes: ['S', 'M', 'L', 'XL'],
      img1: fmdujh,
      url: '/product/fmdujh',
      brand: 'Nike SB',
      collection: 'clothing/t-shirts/brands/rvca',
      homepage: 'latest',
    },
    {
      id: 'qciqen',
      title: 'Stüssy Emblem Tee',
      style: 'Black',
      price: 2500,
      sizes: ['S', 'M', 'L'],
      img1: qciqen,
      url: '/product/qciqen',
      brand: 'Stüssy',
      collection: 'clothing/t-shirts/brands/stüssy',
      homepage: 'recommended',
    },

    {
      id: 'skrvwo',
      title: 'Wayward Axle Ldn Palm Tee',
      style: 'White',
      price: 2500,
      sizes: ['M', 'L', 'XL'],
      img1: skrvwo,
      url: '/product/skrvwo',
      brand: 'Wayward Axle Ldn',
      collection: 'clothing/t-shirts/brands/waywardaxleldn',
      homepage: 'recommended',
    },
    {
      id: 'ueivah',
      title: 'Vans 506 Splatter',
      style: 'White',
      price: 7000,
      sizes: [
        'UK 6',
        'UK 6.5',
        'UK 7',
        'UK 7.5',
        'UK 8',
        'UK 8.5',
        'UK 9',
        'UK 9.5',
        'More',
      ],
      img1: ueivah,
      url: '/product/ueivah',
      brand: 'Vans',
      collection: 'shoes/brands/vans',
      homepage: 'recommended',
    },
    {
      id: 'rdnaqb',
      title: 'Stüssy Coach Jacket',
      style: 'Black, White',
      price: 8500,
      sizes: ['S', 'M', 'L', 'XL'],
      img1: rdnaqb,
      url: '/product/rdnaqb',
      brand: 'Stüssy',
      collection: 'clothing/jackets/brands/stüssy',
      homepage: 'recommended',
    },
    {
      id: 'uudbhg',
      title: 'Parlez Nautical Tee',
      style: 'Dark Smoke Grey',
      price: 3000,
      sizes: ['S', 'M', 'L', 'XL'],
      img1: uudbhg,
      url: '/product/uudbhg',
      brand: 'Parlez',
      collection: 'clothing/t-shirts/brands/parlez',
      homepage: 'recommended',
    },
  ],
};
