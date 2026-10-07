import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center p-20 text-center">
        <Outlet />
      </div>
    </>
  );
}

export default App;
