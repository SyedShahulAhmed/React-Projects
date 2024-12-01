import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx'; 
import Home from './pages/Home'; 
import About from './pages/About'; 
import Services from './pages/Services.jsx';
import Blogs from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import BlogInfo from './pages/BlogInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
    children: [
      {
        path: "/", 
        element: <Home />,     
      },
      {
        path: "about", 
        element: <About />, 
      },
      {
        path: "services", 
        element: <Services />, 
      },
      {
        path: "blogs", 
        element: <Blogs />, 
      },
      {
        path: "contact", 
        element: <Contact />, 
      },
      {
        path:"/blogs/:id",
        element:<BlogInfo/>
      }
    ],
  },
]);

// Render the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
