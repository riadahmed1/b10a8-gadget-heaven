import { toast } from "react-toastify";

const getStoredCartList = () => {
  const storedListStr = localStorage.getItem('cart-list')
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  }else {
    return [];
  }
}

const addToStoredCartList = (id) => {
  const storedList = getStoredCartList()
  if(storedList.includes (id)) {
    toast.error('Already exists in the Cart List')
  } else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList)
    localStorage.setItem('cart-list', storedListStr)
    toast.success('Added to Cart List Successfully')
  }
}

const removeFromStoredCartList = (id) => {
  const storedList = getStoredCartList()
  const remaining = storedList.filter(itemId => itemId !== id)
  localStorage.setItem('cart-list', JSON.stringify(remaining))
  toast.warn('Product removed from Cart')
}

const getStoredWishlist = () => {
  const storedListStr = localStorage.getItem('Wishlist')
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr)
    return storedList
  } else {
    return [];
  }
}

const addToStoredWishlist = (id) => {
  const storedList = getStoredWishlist()
    if (storedList.includes (id)) {
      toast.error('Already exists in the Wishlist')
    } else {
      storedList.push(id)
      const storedListStr = JSON.stringify(storedList)
      localStorage.setItem('Wishlist', storedListStr)
      toast.success('Added to Wishlist Successfully')
    }
}

const removeFromStoredWishlist = (id) => {
  const storedList = getStoredWishlist()
  const remaining = storedList.filter(itemId => itemId !== id)
  localStorage.setItem('Wishlist', JSON.stringify(remaining))
  toast.warn('Product removed from Wishlist')
}

const clearStoredCart = () => {
  localStorage.removeItem('cart-list')
}

export {getStoredCartList, addToStoredCartList, getStoredWishlist, addToStoredWishlist, removeFromStoredCartList, removeFromStoredWishlist, clearStoredCart}