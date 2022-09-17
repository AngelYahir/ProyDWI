import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/authContext';

export function SignUp({session}) {

	// ? variables
	const navigate = useNavigate()
	

	const { signup } = useAuth()
	const [errorMessage, setError] = useState('');
	const [user, setUser] = useState ({
		name: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
		rol: 'user'
	})


	// ? Functions
	const handleChange = ({target: {name, value}}) =>
		setUser({...user, [name]: value})

	const handleSubmit = async (e) => {
		try {
			e.preventDefault()
			await signup(user.name, user.lastname, user.email, user.password, user.confirmPassword, user.rol)
			navigate('/')
		} catch (error) {
			console.log(error)
		}
	}



  return (		
    <div className="container mx-auto">
		{errorMessage &&
			<h1>{errorMessage}</h1>
		}
		<div className="flex justify-center px-6 my-12">

			<div className="w-full xl:w-3/4 lg:w-11/12 flex">

				<div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-r-none">
					<h3 className="pt-4 text-2xl text-center">Bienvenido!</h3>
					<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded" onSubmit={handleSubmit}>
            			<div className="items-center -mx-2 md:flex mb-4">
                			<div className="w-full mx-2">
                    			<label className="block mb-2 text-sm font-medium">Nombre(s)</label>

                    			<input 
									className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" 
									id="name" 
									type="text" 
									name='name' 
									placeholder="Nombre(s)"
									onChange={handleChange}
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
									onChange={handleChange} 
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
								name='password' 
								placeholder="Ingresa tu contraseña"
								onChange={handleChange}
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
								onChange={handleChange}
							/>
						</div>
						<div className="mb-6 text-center">
							<button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
								Registrarse
							</button>
						</div>
						<hr className="mb-6 border-t" />
						<div className="text-center">
							<p className="inline-block text-sm text-blue-500 align-baseline" href="./register.html">
								¿Ya tienes una cuenta? 
								<Link to='/inicio-sesion'>
									<span className='hover:text-blue-800'> Inicia Sesión!</span>
								</Link>
							</p>
						</div>
					</form>
				</div>

    			<div className="signup-banner w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover bg-center rounded-r-lg"></div>

			</div>
		</div>
	</div>
  )
}
