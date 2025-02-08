import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Goal from "./pages/Goal.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:'/Addgoal',
        element:<Goal />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

);
