import { Outlet } from "react-router-dom";
import Navbarr from "../Components/Navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbarr />
      <Outlet />
    </>
  );
}
