import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StateContext } from '../Context/StateContext'
import './index.css'
import Home from './home';
import Filter from './pages/Filter';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/filter', element: <Filter/> },
  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateContext>
    <Toaster />
     <RouterProvider router={router} />
     </StateContext>
  </StrictMode>,
)
