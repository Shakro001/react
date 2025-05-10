
import React, {useState, useContext} from "react";
import ListContext from "../../context/ListContext";
import service from "../../API/mockdata";
export default function UseForm(){


 

    const {getList} = useContext(ListContext)

    const [newValue, setNewValue] = useState({
        title: "",
        status: 0,
      });
    
      const handleInput = (e) => {
        setNewValue((prevState) => ({ ...prevState, title: e.target.value }));
      };
    
      const handleSelect = (e) => {
        setNewValue((prevState) => ({ ...prevState, status: e.target.value }));
      };
    
      const handleForm = async (e) => {
        e.preventDefault();
    
        try {
          await service.post(newValue);
          getList();
        } catch (error) {
          console.log(error);
        }
      };


      return { handleInput, handleSelect, handleForm }

}

