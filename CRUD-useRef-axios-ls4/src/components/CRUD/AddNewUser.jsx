import React, { useState, useEffect } from "react";
import service from "../../services/mockapi";


export default function AddNewUser({ getApi}) {
  const [newUser, setNewUser] = useState({
    name: "",
    username: "",
    email: "",
    married: false,
  });

  const handleFormInput = (val, e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [val]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleFromSubmit = async (e) => {
    e.preventDefault();

    try {
      await service.post("users", newUser);
      getApi();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action="#" className="register">
      <h2>regiter new user:</h2>
      <label>
        Name:
        <input type="text" onChange={(e) => handleFormInput("name", e)} />
      </label>
      <label>
        username:
        <input type="text" onChange={(e) => handleFormInput("username", e)} />
      </label>
      <label>
        email:
        <input type="email" onChange={(e) => handleFormInput("email", e)} />
      </label>
      <label>
        married:
        <input
          type="checkbox"
          onChange={(e) => handleFormInput("married", e)}
        />
      </label>

      <button type="submit" onClick={handleFromSubmit}>
        submit
      </button>
    </form>
  );
}
