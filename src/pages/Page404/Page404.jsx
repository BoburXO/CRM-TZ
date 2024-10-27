import React from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(-1)} className='page404_wrapper'>
        <img
          src='https://i.pinimg.com/originals/cc/4d/aa/cc4daa9d54c97a1badec1f0fd9a327dc.gif'
          alt=''
        />
      </div>
    </>
  );
};

export default Page404;
