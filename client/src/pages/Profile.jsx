import React from 'react'
import profBanner from '../assets/images/heroBanners/profile-banner.jpg'
import profImg from '../assets/images/user.png'

export function Profile() {

    if(!localStorage.getItem('user'))
      return(<><h1>Inicia Sesion</h1></>)
    const user = JSON.parse(localStorage.getItem('user'))

    return (
      <>
        <div className='place-content-center'>
          <div className="max-w-full max-h-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="bg-cover h-40 place-content-center"> <img src={profBanner} alt="" /></div>
            <div className="border-b px-4 pb-6">
              <div className="text-center sm:text-left sm:flex mb-4">
                <img className="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4 shadow-2xl" src={profImg} alt="" />
                <div className="py-2">
                  <h3 className="font-bold text-2xl mb-1">{user.name + ' ' + user.lastname}</h3>
                  {user.contact.address.length != 0 &&
                    <div className="inline-flex text-grey-dark sm:flex items-center">
                      <svg className="h-5 w-5 text-grey mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
                      {user.contact.address.map((add) => (
                        <>{add.state + ', ' + add.country}</>
                      ))}
                    </div>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='justify-items-center'>
            <div className="w-full justify-items-center">
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded w-full" >
                <div className="items-center -mx-2 md:flex mb-4">
                  <div className="w-full mx-2">
                    <label className="block mb-2 text-sm font-medium">Nombre(s)</label>

                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      name='name'
                      placeholder="Nombre(s)"
                      value={user.name}
 
                    />
                  </div>

                  <div className="w-full mx-2 mt-4 md:mt-0">
                    <label className="block mb-2 text-sm font-medium">Apellido(s)</label>

                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastname"
                      type="text"
                      name='lastname'
                      placeholder="Apellido(s)"
                      value={user.lastname}
   
                    />
                  </div>
                </div>  
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Correo Electronica
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name='email'
                    placeholder="Ingresa tu email"
                    value={user.email}
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    name='password'
                    placeholder="Ingresa tu contraseña"

                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                    Confrimar contraseña
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="confpassword"
                    type="password"
                    name='confirmPassword'
                    placeholder="Ingresa tu contraseña"

                  />
                </div>
                <div className="mb-6 text-center">
                  <button className="w-60 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }