import React from 'react'

export function ProductsList(product) {
  return (
    <>
      <div key={product.product.id} className="group relative cursor-pointer">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
              src={product.product.img}
              className="w-full h-full object-center object-contain lg:w-full lg:h-full"
            />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <a>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.product.name}
              </a>
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${product.product.price}</p>
        </div>
      </div>
    </>
  )
}
