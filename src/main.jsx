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
import Login from './Components/Pages/Login/Login';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Components/Pages/Signup/Signup';
import Unknownpage from './Components/Pages/Unknownpage';
import Blog from './Components/Pages/Blog/Blog';
import AllToys from './Components/Pages/AllToys/AllToys';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
         path:'login',
         element: <Login/>,
      },
      {
        path:'signup',
        element:<Signup/>
      },
      {
        path:'blog',
        element:<Blog/>
      },
      {
        path:'alltoys',
        element:<AllToys/>,
        loader:()=>fetch('http://localhost:3000/alltoys')
      }

    ],
  },
  {
    path:'*',
    element:<Unknownpage/>
  }
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
