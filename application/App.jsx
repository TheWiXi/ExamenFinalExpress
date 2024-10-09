import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
import {LogIn} from './components/logIn';
import { Register, registerAction } from './components/register';
import Start from './pages/VistaUno';


async function profileLoader() {
  const authRes = await fetch('http://localhost:3000/authcheck', {
      credentials: "include"
  });

  if (!authRes.ok) {
      throw new Response(null, { status: 401 });
  }

  const authData = await authRes.json();
  if (!authData.authenticated) {
      throw new Response(null, { status: 401 });
  }

  return { user: authData}; 
}


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Start />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/register',
    element: <Register />,
    action: registerAction,
  }
]);


export function App() {
  return (
    <RouterProvider router={routes}/>

  );
}