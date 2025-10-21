'use client';

import { useGetAllProducts } from '../../../hooks';
import EmptyState from '../../ui/Common/EmptyState/EmptyState';
import ProductCardSkeleton from '../../ui/Skeleton/Card/ProductCardSkeleton';
import ProductList from '../Product/ProductList/ProductList';

const WishlistSection = () => {
  // Tanstack query
  const { data, isLoading } = useGetAllProducts();
  const productList = data?.productData?.results.filter(
    product => product.isInWishlist
  );

  return (
    <>
      <div className="flex flex-wrap justify-start items-center gap-3">
        {isLoading ? (
          <ProductCardSkeleton count={3} />
        ) : productList?.length ? (
          <ProductList products={productList} />
        ) : (
          <EmptyState
            title="No Wishlist Items"
            message="Start adding products to your wishlist to see them here."
            buttonText="Shop Now"
            buttonHref="/"
            className="flex justify-center w-full"
          />
        )}
      </div>
    </>
  );
};

export default WishlistSection;
