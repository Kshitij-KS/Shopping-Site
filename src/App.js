import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import "./App.css";

import Navbar from "./pages/components/Navbar/Navbar.component";

import HomePage from "./pages/Home-page";
import Login from "./pages/Login-page";
import AboutPage from "./pages/About-page";
import ServicesPage from "./pages/Services-page";
import CartPage from "./pages/Cart-page";

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/services", element: <ServicesPage /> },
        { path: "/login", element: <Login /> },
        { path: "/cart", element: <CartPage /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
