import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { /*Això importa funcions del react-router-dom */
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [ //children permet fer una nested route. En aquest cas, veurem els contactes al costat de la dreta.
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
