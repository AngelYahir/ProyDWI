import React from 'react'
import image from '../assets/images/404.png'

export function NotFound() {
  return (
    <>
      <div class="h-screen w-full bg-gray-50 flex items-center">
        <div class="container flex flex-col md:flex-row items-center justify-between px-5 text-gray-700">
          <div class="w-full lg:w-1/2 mx-8">
            <div class="text-7xl text-green-500 font-dark font-extrabold mb-8"> 404</div>
            <p class="text-2xl md:text-3xl font-light leading-normal mb-8">
                Lo sentimos, esta no es la página que estas buscando...
            </p>
            
            <a href="#" class="px-5 inline py-3 text-sm font-medium leading-5 shadow-2xl text-white transition-all duration-400 border border-transparent rounded-lg focus:outline-none bg-green-600 active:bg-red-600 hover:bg-red-700">Volver al inicio</a>
          </div>
          <div class="w-full lg:flex lg:justify-end lg:w-1/2 mx-5 my-12">
            <img src={image} class="" alt="Page not found"/>
          </div>
    
        </div>
      </div>
    </>
  )
}
