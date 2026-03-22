import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router';

const Root = () => {
  const location = useLocation()
  const isHome = location.pathname === "/"

  return (
    <div className='flex flex-col min-h-screen w-8/12 mx-auto'>
      <div className={`${isHome ? 'bg-purple-600 px-2 pt-2 rounded-t-2xl mt-5' : 'bg-none px-2 pt-2 rounded-t-2xl mt-5'}`}>
        <Navbar></Navbar>
      </div>
      <main className='grow'>
      <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;