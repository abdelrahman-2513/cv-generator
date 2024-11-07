import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  useParams,
} from "react-router-dom";
import React, { lazy, Suspense, useEffect } from "react";
import Login from "../../Pages/Login/Login";
/** ----------------------------------------------- Componenets ------------------------------------------------ */

function Main() {
  return (
    <>
      <Header />
      <main onContextMenu={(e) => e.preventDefault()}>
        <Navbar />

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
      errorElement: <ErrorPage />,
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
      element: <ResetPassword />,
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

  const router = createBrowserRouter(routes, {
    onError: handleRouterError,
  });

  return (
    <Suspense fallback={<Loading fullScreen={true} />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default Layout;
