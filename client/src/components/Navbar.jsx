import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logos/logo1.png'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { useAuth } from '../context/authContext'
import userImg from '../assets/images/user.png'
import adminImg from '../assets/images/admin.png'

import { CartItem } from '../components'

const products = [
    {
      id: 1,
      name: 'Mochila hip azul',
      href: '#',
      color: 'Salmon',
      price: 90.00,
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Bolsa de piel pequena',
      href: '#',
      color: 'Blue',
      price: 32.00,
      quantity: 3,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]

  const subtotal = products.map(item => item.price).reduce((prev, curr) => prev + curr, 0)


export function Navbar() {

  const [open, setOpen] = useState(false)

  const {logouts, session} = useAuth('')


  const handleLogout = async () => {
    await logouts()
    location.reload()
  }

  let rol = []
  if(session){
    const userInfo = JSON.parse(localStorage.getItem('user'))
    for(let i = 0; i < userInfo.rol.length; i++){
      rol.push(userInfo.rol[i].name)
    }
  }



  return (
    <>
        <div className="navbar bg-base-100 sticky top-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/'><li><a>Inicio</a></li></Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' ><img src={logo} alt="" className='max-h-14' /></Link>
            </div>
            <div className="navbar-end">

                {!session &&
                  <div className=''>
                    <Link to='/inicio-sesion'>
                      <button className='btn btn-primary text-white max-h-5'>
                        Iniciar Sesion
                      </button>
                    </Link>
                  </div>
                }

                {session &&
                  <>
                    <div className="dropdown dropdown-end">
                      <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                          {products.length > 0 &&
                            <span className="badge badge-sm indicator-item animate-pulse">{products.length}</span>
                          }
                        </div>
                      </label>
                      <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                          <span className="font-bold text-lg">{products.length} Productos</span>
                          <span className="text-info">Subtotal: ${subtotal}</span>
                          <div className="card-actions">
                            <button className="btn btn-primary btn-block" onClick={() => setOpen(true)}>Ver carrito</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown dropdown-end">
                      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          {rol.includes('user') ? <img src={userImg} alt="" /> : <img src={adminImg} alt="" />}
                        </div>
                      </label>
                      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/perfil'><li><a className="justify-between">Perfil</a></li></Link>
                        <li><a onClick={handleLogout}>Cerrar sesion</a></li>
                      </ul>
                    </div>
                  </>
                }
            </div>
        </div>


        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>
      
              <div className="fixed inset-0 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                    <Transition.Child
                      as={Fragment}
                      enter="transform transition ease-in-out duration-500 sm:duration-700"
                      enterFrom="translate-x-full"
                      enterTo="translate-x-0"
                      leave="transform transition ease-in-out duration-500 sm:duration-700"
                      leaveFrom="translate-x-0"
                      leaveTo="translate-x-full"
                    >
                      <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                        <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                            <div className="flex items-start justify-between">
                              <Dialog.Title className="text-lg font-medium text-gray-900"> Shopping cart </Dialog.Title>
                              <div className="ml-3 flex h-7 items-center">
                                <button
                                  type="button"
                                  className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="sr-only">Close panel</span>
                                  <XIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                              </div>
                            </div>
      
                            <div className="mt-8">
                              <div className="flow-root">
                                <ul role="list" className="-my-6 divide-y divide-gray-200">
                                    {products.length == 0 && 
                                        <>
                                            <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                                                <div className="animate-pulse flex space-x-4">
                                                    <div className="rounded-full bg-slate-700 h-10 w-10"></div>
                                                        <div className="flex-1 space-y-6 py-1">
                                                            <div className="h-2 bg-slate-700 rounded"></div>
                                                            <div className="space-y-3">
                                                                <div className="grid grid-cols-3 gap-4">
                                                                    <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                                                                    <div className="h-2 bg-slate-700 rounded col-span-1"></div>
                                                                </div>
                                                            <div className="h-2 bg-slate-700 rounded"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    }
                                  {products.map((product) => (
                                    <CartItem product={product}/>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
      
                          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <p>Subtotal</p>
                              <p>${subtotal}</p>
                            </div>
                            <div className="mt-6">
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                              >
                                Checkout
                              </a>
                            </div>
                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                              <p>
                                o{' '}
                                <button
                                  type="button"
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                  onClick={() => setOpen(false)}
                                >
                                  Continua comprando <span aria-hidden="true"> &rarr;</span>
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
    </>
  )
}
