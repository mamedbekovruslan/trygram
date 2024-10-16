import { Navigate, RouteObject } from 'react-router-dom';
import App from './App';

export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="auth" /> },
  { path: '/auth', element: <App /> },
  { path: '/*', element: '404' },
];
