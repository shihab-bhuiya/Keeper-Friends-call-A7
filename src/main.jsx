import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { routes } from './Routers/Routers.jsx'
import FriendProvider from './Context/FriendContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>

<FriendProvider> 

    <RouterProvider router={routes} > </RouterProvider>
  <ToastContainer/>
</FriendProvider>




  </StrictMode>,
)
