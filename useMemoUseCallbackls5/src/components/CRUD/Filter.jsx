

import React, {useState, useEffect, memo} from "react";

// constans
import {
    TODOS_FILTER_ALL,
    TODOS_FILTER_COMPLETED,
    TODOS_FILTER_PROGRESS,
  } from '../../constans/filterConst';

export default memo(function Filter({filter, setFilter}){
console.log('FILTER FILTER FILTER')

    const handleFilter = (e) => {
        setFilter(e.target.value)
    }

    return (
        <select defaultValue={filter} onChange={handleFilter} name="filter" id="filter">
            <option value={TODOS_FILTER_ALL}>All</option>
            <option value={TODOS_FILTER_COMPLETED}>Completed</option>
            <option value={TODOS_FILTER_PROGRESS}>Progress</option>
        </select>
    )

})