import App from "@/App";
import Home from "@/home/Home";
import { createBrowserRouter } from "react-router-dom";
import About from "../about/About";

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
]);
export default router;
