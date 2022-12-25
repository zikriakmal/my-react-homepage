import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import WorksPage from "../pages/WorksPage";
import App from "../App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/works",
    element: <WorksPage />,
  },
  {
    path: "/resume",
    element: <WorksPage />,
  },
  {
    path: "/articles",
    element: <WorksPage />,
  },
  {
    path: "*",
    element: (
      <App>
        <div style={{ alignItems: "center" }}>
          <p style={{ fontSize: 50 }}>
            404 <br />
            Page not found
          </p>
        </div>
      </App>
    ),
  },
]);

export default router;
