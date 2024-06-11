import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { router } from "./Router";
import { RecoilRoot } from "recoil";

import "./index.css";
import "regenerator-runtime/runtime";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
    <Outlet />
  </RecoilRoot>
);
