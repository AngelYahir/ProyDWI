import './App.css'
import './assets/css/styles.css'

// * Import Router-dom
import { Routes, Route } from 'react-router-dom'

// * Import context here

import { useShop } from './context/shopContext'

// * Import pages here
import { 
  Home, 
  NotFound,
  Categories ,
  Login,
  SignUp,
  CustomerService,
  Products,
  Product,
  Profile,
  Success,
  Checkout
} from './pages'

/**
 * This is import for components
 */
import { Navbar, Footer } from './components'

/* 
  ! Para crear una nueva ruta ejemplo:
  ? <Route path="/products" element={<Products/>} />
  ! Recuerden importar la pagina arriba antes
*/



function App() {



  return (
    <>
      <Navbar/>
      <Routes>
        //* Home page
        <Route path="/" element={<Home/>} />

        //* Auth pages
        <Route path="/signin" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />

        //* Protect Pages

        //* User pages
        <Route path="/profile" element={<Profile/>} />
        <Route path='/success/:id' element={<Success/>}/>


        //* Products Pages
        <Route path="/categorias" element={<Categories/>} />
        <Route path="/customer-services" element={<CustomerService/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<Product/>} />

        <Route path='/checkout/:id' element={<Checkout/>}/>

        //* 404 error pages
        <Route path="*" element={<NotFound/>} />

      </Routes>
      <Footer/>
    </>
  )
}

export default App
