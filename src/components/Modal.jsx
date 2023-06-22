import React from 'react';

export default function Modal({ children, show, setShow }) {
  return (
    <div className={`moda-container ${show ? 'block' : 'hidden'}`}>
      <div
        className='overlay fixed w-full h-[100vh] top-0 left-0 bg-black opacity-70 z-40 cursor-pointer'
        onClick={() => setShow(false)}
      />
      <div className='content fixed top-1/4 left-1/2 -translate-x-1/2 z-50'>
        {children}
      </div>
    </div>
  );
}
