import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
// import "./index.css";

/* existing imports */
import Layout from "./components/Layout.jsx";
import ErrorPage from "./routes/error-page";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Book from "./components/Book";
import Genres from "./components/Genres";

import Authors from "./pages/Authors";

import Index from "./routes";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}
    //  errorElement={<ErrorPage />}
     >
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="books" element={<Books />}>
        <Route index element={<Genres />} />

        <Route path=":genre" element={<Genres />}>
        {/* <Route index element={<Genres />} /> */}

          <Route path=":title" element={<Book />} />
        </Route>
      </Route>
      <Route path="authors" element={<Authors />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
