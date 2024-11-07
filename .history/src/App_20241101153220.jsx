import { useState } from "react";
import "./App.css";
import Layout from "./assets/Layout/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Layout />
      <Toaster />
    </>
  );
}

export default App;
