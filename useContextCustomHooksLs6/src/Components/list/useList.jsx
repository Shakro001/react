

import React, {useState, useEffect} from "react";

import service from "../../API/mockdata";



export default function useList(){

const [list, setList] = useState([]);

const getList = async () => {
    try {
      const response = await service.get();
      setList(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);


  return {list, getList}

}