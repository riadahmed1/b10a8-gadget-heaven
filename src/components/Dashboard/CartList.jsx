import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { clearStoredCart, getStoredCartList, removeFromStoredCartList } from '../Utility/addToDb';
import CartProduct from './CartProduct';

const CartList = () => {
  const allProducts = useLoaderData()

  const [cartList, setCartList] = useState([])
  useEffect(() => {
    const storedCartList = getStoredCartList()
    const cartProductList = allProducts.filter(product => storedCartList.includes(product.product_id));
    setCartList(cartProductList);
  },[])

  const handleRemove = (id) => {
    removeFromStoredCartList(id)
    const remaining = cartList.filter(p => p.product_id !== id)
    setCartList(remaining);
  }

  const totalCost = cartList.reduce( (accumulator, currentProduct) => {
    return accumulator + currentProduct.price;
  }, 0)

  const handleSort = () => {
    const storedList = [...cartList].sort((a,b) => b.price - a.price)
    setCartList(storedList)
  }

  const handlePurchase = () => {
    clearStoredCart()
    document.getElementById('success_modal').showModal()
  }

  const navigate = useNavigate()
  const handleCloseModal = () => {
    setCartList([])
    navigate('/')
  }

  return (
    <div className='mt-5'>
      <section className='flex justify-between items-center'>
        <h1 className='text-2xl'>Cart Items: {cartList.length}</h1>
        <div className='flex gap-5 items-center'>
          <h1><span className='font-bold text-lg'>Total Cost:</span> ${totalCost.toFixed(2)}</h1>
          <button onClick={handleSort} className='btn border-purple-600 rounded-full'>
            Sort by Price <i className='fa-solid fa-arrow-down-wide-short ml-2'></i>
          </button>
          <button disabled={cartList.length === 0 || totalCost === 0} onClick={handlePurchase} className='btn bg-purple-600 rounded-full disabled:bg-gray-300'>
            Purchase
          </button>
        </div>
      </section>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="success_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <div className='flex justify-center mb-4'>
            <img src="/src/assets/Group.png" alt="" />
          </div>
          <h3 className="font-bold text-lg">Payment Successful</h3>
          <hr className='opacity-30 mx-auto w-11/12 mt-2 mb-3' />
          <p className="py-2">Thanks For Purchasing</p>
          <p>Total: ${totalCost.toFixed(2)}</p>
          <div className="modal-action justify-center">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={handleCloseModal} className="btn border-green-700 rounded-lg w-full">Close</button>
          </div>
        </div>
      </dialog>

      <section className='gap-4 mt-5 flex flex-col'>
        {
          cartList.map(product => <CartProduct key={product.product_id} product={product} handleRemove={handleRemove}></CartProduct>)
        }
      </section>
    </div>
  );
};

export default CartList;