import React from 'react';

const CartProduct = ({product, handleRemove}) => {
  const {product_id, product_image, product_title, price, availability, description, Specification, rating} = product;

  return (
    <div className='flex gap-4 bg-purple-500/30 p-4 rounded-2xl'>
      <img className='w-1/5 rounded-2xl' src={product_image} alt="" />
      <div className='flex flex-col justify-between gap-1 grow'>
        <div className='flex justify-between'>
          <h1 className='text-3xl font-bold'>{product_title}</h1>
          <button onClick={() => handleRemove(product_id)}>
            <i class="fa-solid fa-xmark rounded-full p-2 hover:bg-purple-500"></i>
          </button>
        </div>
        <p className='text-gray-400'>{description}</p>
        <h2 className='text-2xl'><span className='font-bold'>Price: </span>${price}</h2>
      </div>
    </div>
  );
};

export default CartProduct;