import React from 'react'

export function SellerCard(seller) {
  return (
    <>
      <div className="flex items-center justify-center flex-col bg-slate-200 p-4 rounded-lg w-52 ">
         <img className="rounded-full border-gray-100 shadow-sm w-24 h-24" src={seller.seller.img} alt="user image" />
        <h1 className="mt-5 text-black font-semibold">{seller.seller.name}</h1>
        <button className="mt-5 px-8 py-1 border-2 btn btn-primary rounded-full text-gray-50 font-semibold transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">Visitar</button>
     </div>
    </>
  )
}
