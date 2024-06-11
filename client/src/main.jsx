import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { router } from "./Router";

import "./index.css";
import "regenerator-runtime/runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Outlet />
  </>
);
