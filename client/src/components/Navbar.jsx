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
                        <Link to='/'><li>Inicio</li></Link>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to='/' ><img src={logo} alt="" className='max-h-14' /></Link>
            </div>
            <div className="navbar-end">

                {!session &&
                  <div className=''>
                    <Link to='/signin'>
                      <button className='btn btn-primary text-white max-h-5'>
                        Iniciar Sesion
                      </button>
                    </Link>
                  </div>
                }

                {session &&
                  <>
                    <div className="dropdown dropdown-end">
                      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          {rol.includes('user') ? <img src={userImg} alt="" /> : <img src={adminImg} alt="" />}
                        </div>
                      </label>
                      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/profile'><li><p className="justify-between">Perfil</p></li></Link>
                        <li><button onClick={handleLogout}>Cerrar sesion</button></li>
                      </ul>
                    </div>
                  </>
                }
            </div>
        </div>
    </>
  )
}
