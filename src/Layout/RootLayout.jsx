import React from "react";
import Navbar from "../Componenet/Navbar";
import Footer from "../Componenet/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-[calc(100vh-285px)]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default RootLayout;
