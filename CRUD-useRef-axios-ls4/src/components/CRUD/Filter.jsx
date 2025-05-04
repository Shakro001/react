

import React, { useState} from "react";


export default function Filter({filterEl, setFilterEl}){


    const handleFilterEl = (el) => {
        setFilterEl((prev) => ({
          ...prev,
          [el]: !prev[el],
        }));
      };


    return (
        <div className="filter">
        <h3>filter</h3>
        {Object.keys(filterEl).map((el) => (
          <label key={el}>
            <input
              type="checkbox"
              checked={filterEl[el]}
              onChange={() => handleFilterEl(el)}
            />
            {el}
          </label>
        ))}
      </div>
    )
}