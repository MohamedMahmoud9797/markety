import { Outlet } from "react-router-dom";
import Navbarr from "../Components/Navbar/Navbar";
import Footer from "./../Components/footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbarr />
      <Outlet />
      <Footer />
    </>
  );
}
