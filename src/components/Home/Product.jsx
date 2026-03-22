import React from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const { product_image, product_title, price, product_id } = product;
  // console.log(product)

  return (
    <div className="card bg-base-100 shadow-sm border rounded-2xl p-2 flex flex-col h-full">
      <figure>
        <img src={product_image} alt={product_title} className="rounded-lg" />
      </figure>
      <div className="text-left flex flex-col grow">
        <h2 className="card-title my-2">{product_title}</h2>
        <div className="grow">
          <p className="my-2 text-gray-400">Price: {price} tk</p>
        </div>
        <div className="card-actions justify-start">
          <Link to={`/product/${product_id}`}>
            <button className="btn border-purple-600 rounded-full">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
