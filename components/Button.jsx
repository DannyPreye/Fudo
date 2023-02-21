import React from 'react';
export default ({ content, className, onClick }) => (
  <button
    onClick={onClick}
    className={`w-[max-content]  rounded-[4rem] border-none text-white text-[0.8rem] lg:text-[1.1rem] cursor-pointer bg-themeRed hover:bg-[300px] hover:bg-green duration-1000 ${className}`}
  >
    {content}
  </button>
);
