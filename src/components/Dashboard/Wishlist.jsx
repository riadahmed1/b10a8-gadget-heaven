import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredWishlist, removeFromStoredWishlist } from '../Utility/addToDb';
import WishProduct from './WishProduct';

const Wishlist = () => {
  const allProducts = useLoaderData()

  const [wishlist, setWishlist] = useState([])
  useEffect (() => {
    const storedWishlist = getStoredWishlist()
    const wishlistProducts = allProducts.filter(product => storedWishlist.includes(product.product_id))
    setWishlist(wishlistProducts)
  }, [])

  const handleRemove = (id) => {
    removeFromStoredWishlist(id)
    const remaining = wishlist.filter(p => p.product_id !== id)
    setWishlist(remaining)
  }

  return (
    <div className='mt-5'>
      <section className='flex justify-between items-center'>
        <h1 className='text-2xl'>Wished Items: {wishlist.length}</h1>
      </section>
      <section className='gap-4 mt-5 flex flex-col'>
        {
          wishlist.map(product => <WishProduct key={product.product_id} product={product} handleRemove={handleRemove}></WishProduct>)
        }
      </section>
    </div>
  );
};

export default Wishlist;