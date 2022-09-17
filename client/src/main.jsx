import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthContext } from "./context/authContext";
import { ShopContext } from './context/shopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <AuthContext>
        <ShopContext>
          <App />
        </ShopContext>
     </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
)
