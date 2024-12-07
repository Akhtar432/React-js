import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Content/Skills';
import Projects from './components/Content/Projects';
import Experience from './components/Content/Experience'; // Corrected typo in "Experience"

// Define the routes using `createBrowserRouter`
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '', // Default child route
        element: <Home />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'experience', // Updated path to match the corrected component name
        element: <Experience />,
      },
    ],
  },
]);

// Render the router using `RouterProvider`
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// Optional performance monitoring
reportWebVitals();
