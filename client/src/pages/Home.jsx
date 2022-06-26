import React from "react";

// ? IMportar componentes
import { ProductsList, SellerCard } from '../components'

// ? Importar datos para prueba
import { categories, products, sellers } from "../data/Data";


// ? Importar imagenes
import heroImg from '../assets/images/heroImg.png'


export function Home() {


  return (
    <>
      <div name='home' className='w-full h-screen bg-[#F6F8F9] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <p className='text-2xl'>Compra - Venta</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>G-Market</h1>
            <p className='text-2xl'>Una nueva experiencia en linea</p>
            <button className=' py-3 px-6 sm:w-[60%] my-4 btn btn-primary'>Explorar</button>
          </div>
          <div className="mt-6">
            <img className='w-full' src={heroImg} alt="/" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-6 ">
        <div className="grid grid-cols-12 gap-x-2 max-w-[1240px]">

          <div className="col-span-6 mb-3">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Categorias</h2>
          </div>

          <div className="w-full flex-none md:w-auto md:pl-6 mt-1 md:mt-0 ml-auto text-teal-600 text-sm font-medium col-span-6">
            <a className="hover:text-teal-800 cursor-pointer">Ver todas las categorias </a>
          </div>

          {categories.slice(0, 6).map((category) => (
            <div className="col-span-2" key={category.id}>
              <a href="" className="max-h-12">
                <img src={category.img} class="rounded-xl brightness-75 max-h-28 min-w-full" />
              </a>
              <p className="text-xs -translate-y-6 text-white font-semibold sm:-translate-y-8 sm:text-base translate-x-3"> {category.category} </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Más comprados</h2>

          <div className="w-full flex-none md:w-auto md:pl-6 mt-1 md:mt-0 ml-auto text-teal-600 text-sm font-medium">
            <a className="hover:text-teal-800 cursor-pointer">Ver más productos</a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.slice(0,8).map((product) => (
              <ProductsList product={product} />
            ))}
          </div>
        </div>
      </div>

      <div class="hero min-h-screen hero-image">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">¡Crea una cuenta!</h1>
            <p class="mb-5">Comienza a comprar o vender de la manera más sencilla!</p>
            <button class="btn btn-primary">Vamos!</button>
          </div>
        </div>
      </div>

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

    </>
  )
}
