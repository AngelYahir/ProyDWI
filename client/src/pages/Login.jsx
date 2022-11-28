import React from 'react'
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { Link, useNavigate } from 'react-router-dom';


export function Login({session}) {
	const navigate = useNavigate()


	const { singnins } = useAuth()
	const [errorMessage, setError] = useState('');
	const [user, setUser] = useState({
		email: '',
		password: ''
	})

	const handleChange = ({target: {name, value}}) =>
		setUser({...user, [name]: value})

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			await singnins(user.email, user.password)
			navigate('/')
			location.reload()
		} catch (error) {
			console.log(error)
		}
	}

    return (

		<div className="container mx-auto">
			<div className="flex justify-center px-6 my-12">
				<div className="w-full xl:w-3/4 lg:w-11/12 flex">

					<div className="login-banner w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>

					<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 className="pt-4 text-2xl text-center">Bienvenido!</h3>
						<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
									Correo Electronico
								</label>
								<input 
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
									id="email" 
									type="email" 
									placeholder="Ingresa tu correo"
									name='email'
									onChange={handleChange}
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
									placeholder="Ingresa tu contraseña"
									name='password'
									onChange={handleChange}
								/>
							</div>
							<div className="mb-6 text-center">
								<button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
									Iniciar Sesión
								</button>
							</div>
							<hr className="mb-6 border-t" />
							<div className="text-center">
								<p className="inline-block text-sm text-blue-500 align-baseline">
									¿No tienes una cuenta?
									<Link to='/signup'>
										<span className='hover:text-blue-800'> Crea una!</span>
									</Link> 
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}
