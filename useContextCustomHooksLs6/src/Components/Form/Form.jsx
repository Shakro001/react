import React, { useState, useContext, memo } from "react";

import { TODO, PROGRESS, DONE } from "../../Constans/statusConst";
import service from "../../API/mockdata";

// context
import UseForm from "./UseForm";
import FormContext from "../../context/FormContext";



export default memo(function Form() {
 
    console.log('FORM FORM FORM')


    const { handleInput, handleSelect, handleForm } = UseForm()

  return (
    <div className="createTaskBoard">
      <h2>create task</h2>
      <label>
        Title:
        <input onChange={handleInput} type="text" />
      </label>

      <label>
        Status:{" "}
        <select defaultValue={TODO} onChange={handleSelect} name="addValue">
          <option value={TODO}>To Do</option>
          <option value={PROGRESS}>In progress</option>
          <option value={DONE}>Done</option>
        </select>
      </label>

      <button onClick={handleForm}>Create task</button>
    </div>
  );
})
