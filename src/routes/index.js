import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

export default router;
