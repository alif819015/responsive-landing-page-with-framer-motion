import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const MainLayouts = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayouts;
