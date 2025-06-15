

import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import LoginRoute from "./routes/LoginRoute";
import FlightsRoute from "./routes/FlightsRoute";
import FlightsDetailsRoute from "./routes/FlightsDetailsRoute";
import AuthGuard from "./HOC/authGuard";
import { QueryClientProvider } from "@tanstack/react-query";

import queryClient from "./api/QueryClient";


let router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: '/',
        Component: HomeRoute,
      },
      {
        path: '/login',
        Component: LoginRoute,
      },
      {
        path: '/flights',
        element: <AuthGuard><FlightsRoute/></AuthGuard>,
      },
      {
        path: '/flights/:id',
        element: <AuthGuard><FlightsDetailsRoute/></AuthGuard>,
      },
    ]
  },
]);




export default function App() {
  return  ( 
  <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
  </QueryClientProvider>
  )
}