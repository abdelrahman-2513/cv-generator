import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Home from "../../Pages/Home/Home";
import useAuthStore from "../Zustand/Auth/UserAuth";
import Header from "../../Components/Header/Header";
/** ----------------------------------------------- Componenets ------------------------------------------------ */

function Main() {
  return (
    <>
      <Header />
      <main onContextMenu={(e) => e.preventDefault()}>
        <Outlet />
      </main>
    </>
  );
}
const ProtectedRoute = ({ children }) => {
  const user = useAuthStore((state) => state.user);

  if (!user) {
    return <Navigate replace to="/login" />;
  }

  return children;
};
function Layout() {
  const routes = [
    {
      path: "/",
      element: <ProtectedRoute children={<Main />} />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ];
  const handleRouterError = (error) => {
    console.error("Router encountered an error:", error);
    if (
      error.message.includes("Failed to fetch dynamically imported module") ||
      error.message.includes("Importing a module script failed")
    ) {
      window.location.reload();
    }
    // Optional: Implement additional error handling logic here
    // For example, redirect to a global error page:
    // window.location.href = "/error";
  };
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Layout;
