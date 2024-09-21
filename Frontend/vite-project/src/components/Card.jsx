/* eslint-disable react/prop-types */
// import React from 'react'

function Card({item}) {
   
  return (
    <>
    <div className="mt-4 my-3 p-3">
      <div className="card w-92 shadow-xl hover:scale-105 duration-200 dark:border">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title  text-gray-500" >
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="text-gray-500">{item.title }</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-gray-500">${item.price}</div>
            <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200 text-gray-500">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Card