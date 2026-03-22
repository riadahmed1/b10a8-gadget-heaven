import React from 'react';

const HomeHero = () => {
  return (
    <div>
      <div className="bg-purple-600 flex flex-col text-center pb-36">
        <h2 className="text-4xl mt-5 font-bold">
          Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessorize
        </h2>
        <p className="mt-5">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!
        </p>
        <button className="my-5 border-none btn bg-white text-purple-600 w-fit mx-auto rounded-full">
          Shop Now
        </button>
      </div>
      <div className="relative -mt-36 z-10 border p-4 bg-white/30 rounded-3xl w-8/12 mx-auto">
        <img className="rounded-3xl" src="/src/assets/banner.jpg" alt="" />
      </div>
    </div>
  );
};

export default HomeHero;