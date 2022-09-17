import React from 'react'

export function ProductsList({product}) {
  return (
    <>
      <div className="group relative cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300  ...">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none shadow-2xl">
          <img
              src={product.images.url}
              className="w-full h-full object-center object-contain lg:w-full lg:h-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.price.$numberDecimal}</p>
        </div>
      </div>
    </>
  )
}
