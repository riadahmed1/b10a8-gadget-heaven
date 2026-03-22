import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    fetch('./products.json')
    .then (res => res.json())
    .then (data => {
      setProducts(data);
      setFilteredProducts(data)
    })
  }, [])

  const Categories = ['All', 'Laptop', 'Mobile', 'Headphone', 'Accessories']

  const handleFilter = (category) => {
    // console.log(category);
    setActiveCategory(category)
    if(category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category)
      setFilteredProducts(filtered)
    }
  }

  return (
    <div className="mt-10 text-center">
      <h1 className="text-3xl my-5">Exploring Cutting-Edge Gadgets</h1>
      <div className="flex gap-5">
        <section className="w-1/4 flex flex-col gap-5">
          {
            Categories.map (category => (
              <button key={category} onClick={() => handleFilter(category)} 
                className={`btn rounded-full ${activeCategory === category 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 '}`}
              >
                {category === 'All' ? 'All' : category}
              </button>
            ))
          }
        </section>
        <section className="w-3/4">
          {
            filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map(product => <Product key={product.product_id} product={product}></Product>)}
              </div>
            ) : (
              <div className="text-center mt-20">
                <h2 className="text-3xl font-bold text-purple-600">Oops! No Product Found.</h2>
                <p className="text-gray-500 mt-2">Currently, there are no items in this category.</p>
              </div>
            )
          }
        </section>
      </div>
    </div>
  );
};

export default Products;
