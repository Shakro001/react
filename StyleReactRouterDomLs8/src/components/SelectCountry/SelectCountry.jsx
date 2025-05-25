import React from "react";


import useSelectCountry from "./useSelectCountry";

export default function SelectCountry() {

    const {state, countrySelect, setCountrySelect} = useSelectCountry()
  
  return (
    <div className="country">
      <h3 className="country__title title">Home Route</h3>
      <label htmlFor="country">Select country</label>
      <select
        onChange={(e) => setCountrySelect(e.target.value)}
        name="country"
        id="country"
        className="country__select"
      >
        {state.country.map((el, index) => {
          return (
            <option value={el.name.common} key={index}>
              {el.flag} - {el.name.common}
            </option>
          );
        })}
      </select>
      <a href={`/name/${countrySelect}`}>Read more about {countrySelect}</a>
    </div>
  );
}
