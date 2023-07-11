import React from 'react'
import ReactDOM from 'react-dom/client'
import 'swiper/css';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Pages/Home/Home.jsx';
import Main from './Components/Layout/Main.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AuthProvider from './Components/Providers/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="mx-auto max-w-7xl">
    <React.StrictMode>
     
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      
    </React.StrictMode>
  </div>
)
