import React from 'react'

import { ProductsList } from '../components'
import { products } from '../data/Data'

export function Products() {
  return (
    <>
        <div className="bg-white">
            <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         

                <div className="w-full grid-cols-3 md:w-auto md:pl-6 mt-1 md:mt-0 ml-auto text-teal-600 text-sm font-medium">

                    <h2 className="col-span-2 text-2xl font-extrabold tracking-tight text-gray-900">Tiendas oficiales</h2>
                    <a className="col-span-1 hover:text-teal-800 cursor-pointer">Ver todas las tiendas oficiales</a>

                </div>

                <div className="pl-10 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {products.map((product) => (
                        <ProductsList product={product} />
                    ))}
                </div>
            </div>
        </div>

    </>
  )
}
