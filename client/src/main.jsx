import React from 'react'
import ReactDOM from 'react-dom/client'
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Error from './pages/Error';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'team',
        element: <Team />,
      },
      {
        path: 'events',
        element: <Events />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
