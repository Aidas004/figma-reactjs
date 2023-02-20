import * as React from "react"
import * as ReactDOM from "react-dom"
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import { Navbar } from './components/Navbar'
import Home from './pages/Home'


const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/marketplace',
        element: <div>marketplaceoo</div>,
      },
      {
        path: '/markings',
        element: <div>markings</div>,
      },
      {
        path: '/connect',
        element: <div>connect</div>,
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,

)