import React from 'react';

const ErrorPage = () => {
  return (
    <div className='flex flex-col items-center mt-5 gap-5'>
      <h2 className="text-5xl">Page not Found</h2>
      <p className='text-3xl'>Status: 404</p>
    </div>
  );
};

export default ErrorPage;