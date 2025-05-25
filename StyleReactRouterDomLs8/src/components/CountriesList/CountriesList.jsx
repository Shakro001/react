
import React, {useReducer} from "react";

import useSelectCountry from '../SelectCountry/useSelectCountry'


export default function CountriesList() {


    const {state, countrySelect, setCountrySelect} = useSelectCountry()

  
    return (
      <div className="countries-list">
        {state.country.map((el, index) => (
          <a href={`/name/${el.name.common}`} key={el.cca3 || index}>
            {el.flag} - {el.name.common}
          </a>
          
        ))}
      </div>
    );
  }
  