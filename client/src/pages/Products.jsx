import React from 'react'

import { ProductsList } from '../components'

import { useShop } from '../context/shopContext'

export function Products() {

    const {products, categories} = useShop()

    return (
        <>
            <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

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
