import App from "@/App";
import Home from "@/home/Home";
import { Navigate, createBrowserRouter } from "react-router-dom";
import About from "../about/About";
import AdminLayouts from "@/components/layouts/AdminLAyouts";
import Dashboard from "../admin/Dashboard";
import ServiceList from "../admin/ServiceList";
import AddServices from "../admin/AddServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayouts />,
    children: [
      {
        index: true,
        element: <Navigate to="/admin/dashboard" />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "service-list",
        element: <ServiceList />,
      },
      {
        path: "add-service",
        element: <AddServices />,
      },
    ],
  },
]);
export default router;
