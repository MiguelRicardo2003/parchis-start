import React from 'react';

const Circle = ({ color, number }) => {
  return (
    <div className={`w-4 h-4 ${color} flex items-center justify-center border-[1px] border-black rounded-full text-[10px]`}>
      {number}
    </div>
  );
};

export default Circle;
