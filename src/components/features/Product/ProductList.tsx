import ProductImage1 from '@/public/svg/products/product_1.svg'
import ProductImage2 from '@/public/svg/products/product_2.svg'
import ProductImage3 from '@/public/svg/products/product_3.svg'
import ProductImage4 from '@/public/svg/products/product_4.svg'

import ProductCard from "./ProductCard/ProductCard";

export default function ProductList() {
  const sampleProducts = [
    {
      id: "1",
      name: "Breed Dry Dog Food",
      price: 100,
      rating: 3,
      reviewCount: 35,
      image: ProductImage1,
    },
    {
      id: "2",
      name: "CANON EOS DSLR Camera",
      price: 360,
      rating: 4,
      reviewCount: 95,
      image: ProductImage2,
    },
    {
      id: "3",
      name: "ASUS FHD Gaming Laptop",
      price: 700,
      rating: 5,
      reviewCount: 325,
      image: ProductImage3,
    },
    {
      id: "4",
      name: "Curology Product Set",
      price: 500,
      rating: 4,
      reviewCount: 145,
      image: ProductImage4,
    },
  ];

  return sampleProducts.map((product, index) => (
    <ProductCard
      key={index}
      id={product.id}
      name={product.name}
      price={product.price}
      rating={product.rating}
      reviewCount={product.reviewCount}
      image={product.image}
    />
  ));
}
