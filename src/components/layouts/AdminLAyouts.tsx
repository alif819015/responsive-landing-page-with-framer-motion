import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const AdminLayouts = () => {
    return (
        <div className="grid grid-cols-12 h-[200vh]">
            <SideBar />
            <div className="col-span-10">
            <Outlet />
            </div>
        </div>
    );
};

export default AdminLayouts;