import React, { useState, useEffect } from "react";
import service from "../../services/mockapi";

export default function CreateNewName({el, getApi}) {
    const [newName, setNewName] = useState({});


  const handleNewName = (e) => {
    

    setNewName((prevState) => ({
      name: e.target.value,
    }));
  };

  const handleNewNamSubmit = async (e, id) => {
    try {
      await service.put("users", id, newName);
      getApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new-name">
      <label>
        set name:
        <input onChange={(e) => handleNewName(e)} type="text" />
      </label>
      <button onClick={(e) => handleNewNamSubmit(e, el.id)}>new name</button>
    </div>
  );
}
