import Navbar from "./layout/Navbar";
import ExplorePage from "./pages/Explore";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Footer from "./layout/Footer";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp.jsx";

import MainLayout from "./layout/MainLayout";
import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH Navbar and Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/learn" element={<Learn />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}