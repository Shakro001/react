import React from "react";
import { useLoaderData } from "react-router-dom";

export default function CountryAboutUsRoute() {
  const country = useLoaderData();

    console.log(country)

  return (
    <div>
      <h1>name: {country.name.common}</h1>
      <p>capital: {country.capital}</p>
      <p>region: {country.region}</p>
      <p>people: {country.population.toLocaleString()}</p>
      <p>flag: {country.flag}</p>
    </div>
  );
}
