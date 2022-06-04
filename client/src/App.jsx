import './App.css'
// * Import Router-dom
import { Routes, Route } from 'react-router-dom'

// * Import pages here
import { 
  Home, 
  NotFound 
} from './pages'

// * Import components here
import { Navbar } from './components'

/* 
  ! Para crear una nueva ruta ejemplo:
  ? <Route path="/products" element={<Products/>} />
  !Recuerden importal la pagina arriba antes
*/

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
