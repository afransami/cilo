import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './components/Layouts/Routes/route.jsx'
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
   <ParallaxProvider>
    <div className='lg:mt-14 mt-12'>
    <RouterProvider router={router} />
    </div>
   </ParallaxProvider>
  </React.StrictMode>,
)
