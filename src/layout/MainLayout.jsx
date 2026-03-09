import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      {/* Outlet marks where the child pages will appear */}
      <div>
      
      <Outlet /> 
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;