import React from 'react'
import { createContext, useContext, useState, useEffect } from "react";
import { getProducts, getCategories, getProduct } from '../api/shop';


export const shopsContext = createContext()

export const useShop = () => {
    const context = useContext(shopsContext)
    return context
  }

export function ShopContext({children}) {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
      (async () => {
        const prodRes = await getProducts();
        const catRes = await getCategories();

        setProducts(prodRes.data);
        setCategories(catRes.data)
      })();
    }, []);


    const getOneProd = async (id) => {
      const res = await getProduct(id)
      return res.data
    }



  return (
    <shopsContext.Provider value={{
      products,
      categories,
      getOneProd
    }}>
        {children}
    </shopsContext.Provider>
  )
}
