import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/pages/Header";
import Footer from "@/pages/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <Header />
      
      {/* Main content area */}
      <main className="flex-grow">
       
        <Outlet />
      </main>
      
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Layout;
