import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {

  return (
    <div className="w-screen">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  );
  
}

export default Root;