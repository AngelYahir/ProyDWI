import React from 'react'
import { Fragment, useState } from 'react'

export function CartItem(product) {

    
  const [count, setCount] = useState(product.product.quantity);
  return (
    
    <div>
        <li key={product.product.id} className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <img
                    src={product.product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                />
            </div>
      
            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                            <a href={product.product.href}> {product.product.name} </a>
                        </h3>
                        <p className="ml-4">{product.product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>

                <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="button__wrapper">
                        <button onClick={() => setCount(count - 1)}>-</button>
                            <input className='w-10 text-center' value={count} min='0' max={product.product.quantity}></input>
                        <button onClick={() => setCount(count + 1)}>+</button>
                    </div>

                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </li>
    </div>
  )
}
