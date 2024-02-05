import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayouts = () => {
    return (
        <div className="grid grid-cols-12 h-[100vh]">
            <SideBar />
            <div className="col-span-10 px-5">
            <Outlet />
            </div>
        </div>
    );
};

export default AdminLayouts;