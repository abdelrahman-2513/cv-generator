import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./assets/Layout/Layout";
import { Toaster } from "react-hot-toast";
import useAuthStore from "./assets/Zustand/Auth/UserAuth";

function App() {
  const initializeAuthState = useAuthStore(
    (state) => state.initializeAuthState
  );

  useEffect(() => {
    initializeAuthState();
  }, []);
  return (
    <>
      <Layout />
      <Toaster />
    </>
  );
}

export default App;
