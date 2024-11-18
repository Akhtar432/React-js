import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import Home from './pages/Home';
import Docs from './pages/Docs';
import GitHub from './pages/GitHub';
import About from "./pages/About";

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path="" element={<Layout />}>
      <Route path="home" element={<Home/>} />
      <Route path="docs" element={<Docs/>} />
      <Route path="github" element={<GitHub/>} />
      <Route path="about" element={<About/>} />
    </Route>
  )
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();