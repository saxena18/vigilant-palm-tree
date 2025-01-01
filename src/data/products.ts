import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 299.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    stock: 10
  },
  {
    id: '2',
    name: 'Smart Watch Series X',
    description: 'Advanced smartwatch with health tracking features',
    price: 399.99,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    rating: 4.8,
    stock: 15
  },
  {
    id: '3',
    name: 'Organic Cotton T-Shirt',
    description: 'Comfortable and sustainable cotton t-shirt',
    price: 29.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    rating: 4.2,
    stock: 50
  },
  {
    id: '4',
    name: 'Leather Crossbody Bag',
    description: 'Stylish and practical leather bag',
    price: 89.99,
    category: 'Fashion',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    stock: 20
  },
  {
    id: '5',
    name: 'Gaming Mechanical Keyboard',
    description: 'RGB mechanical keyboard for gaming',
    price: 149.99,
    category: 'Gaming',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    stock: 30
  },
  {
    id: '6',
    name: 'Hoodies for Mens',
    description: 'Best Quality Hoodies Ever.',
    price: 300.12,
    category: 'Fashion',
    image: 'https://media.istockphoto.com/id/1270897614/photo/young-adult-hipster-with-headphones-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=MhhLrS_MmuX2COnWFwR5Soe9Z5HUtI2Vst8qKm4httU=',
    rating: 4.7,
    stock: 30
  }
];

export const categories = [...new Set(products.map(product => product.category))];