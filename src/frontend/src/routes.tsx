import { createBrowserRouter } from "react-router-dom";

import Menu from "./pages/menu";
import Members from "./pages/members";
import NewClass from "./pages/newClass";
import Class from "./pages/class";
import Course from "./pages/course";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/members",
    element: <Members />,
  },
  {
    path: "new/class",
    element: <NewClass />,
  },
  {
    path: "/class",
    element: <Class />,
  },
  {
    path: "/course/:id",
    element: <Course />,
  },
]);
