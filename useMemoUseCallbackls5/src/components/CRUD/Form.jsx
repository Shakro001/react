

import React, {useState, useEffect, memo} from "react";
import service from "../../API/mockdata";

export default memo(function Form({getList}){
    console.log('FORM FORM FORM')
    const [newValue, setNewValue] = useState({
        name: 'one',
        completed: false,

    })

    const handleName = (e) => {
            setNewValue(prevState => ({
                ...prevState,
                name: e.target.value
            }))
    }

    const handleCompleted = (e) => {
        setNewValue(prevState => ({
            ...prevState,
            completed: e.target.checked
        }))
    }

    const handleFormInput = (val, e) => {
        setNewValue((prevState) => ({
          ...prevState,
          [val]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
        }));
      };



    const handleFormSubmit = async (e) => {
        e.preventDefault()

        try {
            await service.post(newValue)
            getList()
        } catch (error) {
            console.log(error)
        }
    }


      return (
        <form action="#" className="register">
          <h2>regiter new user:</h2>
          <label>
            Name:
            <input type="text" onChange={(e) => handleFormInput("name", e)} />
          </label>
          <label>
            Completed:
            <input
              type="checkbox"
              onChange={(e) => handleFormInput("completed", e)}
            />
          </label>
    
          <button type="submit" onClick={handleFormSubmit}>
            submit
          </button>
        </form>
      );

})