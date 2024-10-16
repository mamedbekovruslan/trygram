import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/auth',
    element: <App />,
  },
];

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
