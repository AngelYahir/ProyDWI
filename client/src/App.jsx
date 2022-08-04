import './App.css'
import './assets/css/styles.css'
// * Import Router-dom
import { Routes, Route } from 'react-router-dom'

// * Import pages here
import { 
  Home, 
  NotFound,
  Categories ,
  Login,
  SignUp,
  CustomerService,
  Products,
  ShoppingCart,
  Profile
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
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/shoppingcart" element={<ShoppingCart/>} />
        <Route path="profile" element={<Profile/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
