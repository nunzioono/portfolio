import { Outlet } from "react-router";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
  const [darkTheme,setDarkTheme]=useState(false);

  return (
    <div>
        <Navbar props={{darkTheme:darkTheme,setDarkTheme:setDarkTheme}}/>
        <Outlet />
        <Footer />
    </div>
  );
  
}

export default Root;