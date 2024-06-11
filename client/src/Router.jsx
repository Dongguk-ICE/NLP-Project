import { createBrowserRouter } from "react-router-dom";
import { OnBoarding } from "./pages/OnBoarding";
import { Chatting } from "./pages/Chatting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <OnBoarding />,
    children: [],
  },
  {
    path: "/chatting",
    element: <Chatting />,
    children: [],
  },
]);
