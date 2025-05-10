

import React, {useContext, useCallback} from "react";
import service from "../../API/mockdata";


// context
import ListContext from '../../context/ListContext'

export default function useTaskBoard(){

    const {getList} = useContext(ListContext)

const handleStatus = async (el, setStatus) => {
      try {
        await service.put(el.id, { ...el, status: setStatus });
        getList();
      } catch (error) {
        console.log(error);
      }
    };




  
    const handleDelete = async (el) => {
      try {
        await service.delete(el.id);
        getList();
      } catch (error) {
        console.log(error);
      }
    };


    return {handleStatus, handleDelete}
}