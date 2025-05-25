
import React from "react";

import { NavLink } from "react-router-dom";

import useSelectCountry from '../SelectCountry/useSelectCountry'


export default function CountriesList() {


    const {state, countrySelect, setCountrySelect} = useSelectCountry()

  
    return (
      <div className="countries-list">
        {state.country.map((el, index) => (
          <NavLink to={`/name/${el.name.common}`} key={el.cca3 || index}>
            {el.flag} - {el.name.common}
          </NavLink>
          
        ))}
      </div>
    );
  }
  