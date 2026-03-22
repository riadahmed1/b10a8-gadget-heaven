import React, { useState } from "react";
import Cart from "./CartList";
import Wishlist from "./Wishlist";
import CartList from "./CartList";

const Dashboard = () => {
  const dashboardBtn = ['Cart', 'Wishlist']

  const [activeBtn, setActiveBtn] = useState('Cart')
  return (
    <div>
      <section className="bg-purple-600 text-center pt-5 pb-5">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="pt-5">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have
          it all!!
        </p>
        <div className="mt-3 flex justify-center gap-5">
          {
            dashboardBtn.map (btn => (
              <button key={btn} onClick={() => setActiveBtn(btn)}
                className={`btn rounded-full ${activeBtn === btn 
                  ? 'bg-white text-purple-600 shadow-lg border-none'
                  : 'bg-transparent border-white hover:bg-purple-500'
                }`}
                > {btn}
              </button>))
          }
        </div>
      </section>
      <section>
        {
          activeBtn === 'Cart' ? <CartList></CartList> : <Wishlist></Wishlist>
        }
      </section>
    </div>
  );
};

export default Dashboard;
