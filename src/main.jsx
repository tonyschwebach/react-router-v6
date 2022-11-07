import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";

/* existing imports */
import Layout from "./pages/Layout.jsx";
import ErrorPage from "./routes/error-page";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Authors from "./pages/Authors";

import Index from "./routes";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>} errorElement={<ErrorPage />}>
      <Route index path="home" element={<Home />} />
      <Route path="books" element={<Books />} />
      <Route path="authors" element={<Authors />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
