import React from 'react'

function Square({borderColor}) {
  return (
    <div className={`w-[130px] h-[130px] bg-black border-[10px] ${borderColor}`}></div>
  )
}

export default Square
