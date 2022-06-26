import React from 'react'

export function Login() {


    return (

		<div class="container mx-auto">
			<div class="flex justify-center px-6 my-12">

				<div class="w-full xl:w-3/4 lg:w-11/12 flex">

					<div class="login-banner w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"></div>

					<div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
						<h3 class="pt-4 text-2xl text-center">Bienvenido!</h3>
						<form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="email">
									Correo Electronico
								</label>
								<input class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Ingresa tu correo" />
							</div>
							<div class="mb-4">
								<label class="block mb-2 text-sm font-bold text-gray-700" for="password">
									Contraseña
								</label>
								<input class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Ingresa tu contraseña"/>
							</div>
							<div class="mb-6 text-center">
								<button class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
									Sign In
								</button>
							</div>
							<hr class="mb-6 border-t" />
							<div class="text-center">
								<a class="inline-block text-sm text-blue-500 align-baseline" href="./register.html">
									¿No tienes una cuenta? <span className='hover:text-blue-800'> Crea una!</span> 
								</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
    )
}
