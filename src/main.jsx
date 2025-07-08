import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import Error from '../components/Error.jsx'
import Body from '../components/Body.jsx'
import Cart from '../components/Cart.jsx'
import RestaurantMenu from '../components/RestaurantMenu.jsx'


const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/Contact',
        element: <Contact/>
      },
      {
        path:'/',
        element: <Body/>
      },
      {
        path:'/Cart',
        element: <Cart/>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      }
    ],

  },
  
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
