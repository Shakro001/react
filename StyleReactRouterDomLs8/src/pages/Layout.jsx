import React from "react";
import { Outlet } from "react-router-dom";


import Header from "./Header/Header"; // header

export default function Layout() {
  return (
    <>
      <Header/>
      <main className="main">
        <Outlet />
      </main>
      
    </>
  );
}