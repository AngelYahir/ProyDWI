import React from "react";
import { Link } from "react-router-dom";
import { VscEmptyWindow } from "react-icons/vsc";

// ? IMportar componentes
import { ProductsList, SellerCard, Slide } from '../components'

// ? Importar datos para prueba
import { sellers } from "../data/Data";


// ? Importar imagenes
import heroImg from '../assets/images/heroImg.png'

import { useShop } from '../context/shopContext'

export function Home() {

  const {products, categories} = useShop()

  const renderProducts = () => {
    if(products.length === 0)
      return (
        <>

          <div className="flex flex-col justify-center items-center">
            <VscEmptyWindow className="w-48 h-48" />
            <h1 className="text-2xl">Aun no hay productos 😞</h1>
          </div>

        </>
      )

    return(
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {products.slice(0,8).map((prod) => (
        <Link to={`/product/${prod._id}`} key={prod._id}>
          <ProductsList key={prod._id} product={prod} />
        </Link>
      ))}
    </div>
    )

  }


  return (
    <>

      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">

          <div>
            <p className='text-2xl'>Sale Site</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>G-Market</h1>
            <p className='text-2xl'>A new online experience</p>
            <Link to='/products'>
              <button className=' py-3 px-6 sm:w-[60%] my-4 btn btn-primary'>Explore</button>
            </Link>
          </div>
          <img src={heroImg} className="max-w-xs sm:max-w-sm ml-5" />
        </div>
      </div>

      <Slide />

      {/*
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Categorias</h2>

          <div className="w-full flex-none md:w-auto md:pl-6 mt-1 md:mt-0 ml-auto text-teal-600 text-sm font-medium">
            <a className="hover:text-teal-800 cursor-pointer">Ver todas las categorias</a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {categories.slice(0, 4).map((category) => (
              <Link to=''>
                <div className="flex flex-col items-center justify-center max-w-sm mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-2xl ...">
                  <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"><img src={category.img.url} alt="" className="max-h-full"/></div>

                  <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
        </div>    
      </div> */}


      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Most purchased</h2>

          <div className="w-full flex-none md:w-auto md:pl-6 mt-1 md:mt-0 ml-auto text-teal-600 text-sm font-medium">
            <Link to='/products' className="hover:text-teal-800 cursor-pointer">See more products</Link>
          </div>
          {renderProducts()}
        </div>
      </div>

      <div className="hero min-h-screen hero-image">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            {!localStorage.getItem('isAuthenticated') 
              ? <h1 className="mb-5 text-5xl font-bold">Create an account!</h1> 
              : <h1 className="mb-5 text-5xl font-bold">Start exploring!</h1>
            }
            <p className="mb-5">Start buying or selling in the easiest way!</p>
            {!localStorage.getItem('isAuthenticated')
              ? <Link to='/inicio-sesion'> <button className="btn btn-primary transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-80 ...">Let's go!</button> </Link>
              : <Link to='/products'> <button className="btn btn-primary transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-80 ...">Let's go!</button> </Link>
            }
          </div>
        </div>
      </div>

{/*
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="w-full grid-cols-3 md:w-auto md:pl-6 mt-1 md:mt-0 ml-auto text-teal-600 text-sm font-medium">

            <h2 className="col-span-2 text-2xl font-extrabold tracking-tight text-gray-900">Tiendas oficiales</h2>
            <a className="col-span-1 hover:text-teal-800 cursor-pointer">Ver todas las tiendas oficiales</a>

          </div>

          <div className="pl-10 mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {sellers.slice(0,4).map((seller) => (
              <SellerCard seller={seller} />
            ))}
          </div>
        </div>
      </div>
            */}
    </>
  )
}
