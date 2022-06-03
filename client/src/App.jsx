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
