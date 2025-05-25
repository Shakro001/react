import React from "react";

import service from "./service/countryApi/countryApi";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Layout from "./pages/Layout";
import HomeRoute from "./routes/HomeRoute";
import AboutCountryRoute from "./routes/CountryAboutUsRoute";
import CountryAboutUsRoute from "./routes/CountryAboutUsRoute";
import Countries from "./routes/CountriesRoute";
let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <HomeRoute/>
      },
      {
        path: '/name/:country',
        element: <CountryAboutUsRoute/>,
        loader: async ({params}) => {
          const allCountries = await service.get()
          const country = allCountries.find((el) => el.name.common == params.country)

          return country || null
        }
      },
      {
        path: '/countries',
        element: <Countries/>
      },

    ]
  },
]);



export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
