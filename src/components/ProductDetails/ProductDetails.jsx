import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredCartList, addToStoredWishlist, getStoredCartList, getStoredWishlist } from '../Utility/addToDb';

const ProductDetails = () => {
  const {product_id} = useParams();
  const ProductData = useLoaderData();

  const product = ProductData.find(product => product.product_id === product_id ) 

  const {product_id: current_product_id, product_image, product_title, price, availability, description, Specification, rating} = product;

  const [isInCart, setIsInCart] = useState(false)
  const [isInWishlist, setIsInWishlist] = useState(false)

  useEffect (() => {
    const cartList = getStoredCartList()
    const wishlist = getStoredWishlist()
    
    if (cartList.includes(product_id)) {
      setIsInCart(true)
    }
    if (wishlist.includes(product_id)) {
      setIsInWishlist(true)
    }
  }, [])

  const handleAddToCart = (id) => {
    addToStoredCartList (id)
    setIsInCart(true)
  }

  const handleAddToWishlist = (id) => {
    addToStoredWishlist(id)
    setIsInWishlist(true)
  }


  return (
    <div>
      <section className='bg-purple-600 text-center pt-5 pb-40'>
        <h1 className="font-bold text-3xl">Product Details</h1>
        <p className='pt-5'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!!</p>
      </section>
      <section className='relative -mt-36 z-10 bg-gray-900 lg:flex gap-5 w-10/12 border mx-auto p-4 rounded-2xl'>
        <div className='w-3/4 lg:w-2/4 mx-auto'>
          <img className='rounded-2xl min-full h-full object-cover' src={product_image} alt="" />
        </div>
        <div className='mx-4 lg:mx-0 mt-3 lg:mt-0 lg:w-2/4'>
          <h1 className='font-bold text-3xl'>{product_title}</h1>
          <h1 className='mt-3 text-xl'><span className='font-bold'>Price:</span> ${price}</h1>
          <div className={`${availability ? 'bg-green-100 text-green-700 border-green-500' : 'bg-red-100 text-red-700 border-red-500'} badge mt-3 p-3 rounded-full border w-fit`}>
            {availability ? 'In Stock' : 'Out of Stock'}
          </div>
          <p className='mt-3 text-gray-400'>{description}</p>
          <div className='mt-3'>
            <span className='font-bold'>Specification:</span> <br />
            <ol className='list-decimal list-inside text-gray-400 ml-2'>
              {Specification.map ((spec, index) => (<li key={index}>{spec}</li>))}
            </ol>
          </div>
          <p className='mt-3'><span className='font-bold'>Rating: {rating}</span></p>
          <div className='flex gap-5 rounded-full mt-3'>
            <button className={`btn rounded-full text-white ${isInCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600'}`} onClick={() => handleAddToCart(product_id)} disabled={isInCart}>
              Add to Cart
            </button>
            <button className={`btn rounded-full text-white ${isInWishlist ? 'bg-gray-400' : 'bg-purple-600'}`} onClick={() => handleAddToWishlist(product_id)} disabled={isInWishlist}>
              <i class={`fa-heart ${isInWishlist ? 'fa-solid': 'fa-regular'}`}></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;