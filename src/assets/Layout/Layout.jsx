import "./Layout.css"
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import Home from "../../Pages/Home/Home";
import useAuthStore from "../Zustand/Auth/UserAuth";
import Header from "../../Components/Header/Header";
import CreateCV from "../../Pages/CreateCV/CreateCV";
import MyCVs from "../../Pages/MyCVs/MyCVs";


/** ----------------------------------------------- Components ------------------------------------------------ */

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
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "create-cv",
          element: (
            <ProtectedRoute>
              <CreateCV />
            </ProtectedRoute>
          ),
        },
        {
          path: "my-cvs",
          element: (
            <ProtectedRoute>
              <MyCVs />
            </ProtectedRoute>
          ),
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

  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Layout;
