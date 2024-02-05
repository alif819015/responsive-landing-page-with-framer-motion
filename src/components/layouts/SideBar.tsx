import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside className="bg-red-400 col-span-2 h-auto sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-2",
              { "bg-dark-gray text-white": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          to="/admin/service-list"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-2",
              { "bg-dark-gray text-white": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Service List</span>
        </NavLink>
        <NavLink
          to="/admin/add-service"
          className={({ isActive }) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all flex items-center gap-2",
              { "bg-dark-gray text-white": isActive }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate">Add Services</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default SideBar;
