

import React, { useState, useEffect } from "react";

import "../../taskBord.scss";
import TaskBoard from "../taskBoard/TaskBoard";
import Form from "../Form/Form";

import service from '../../API/mockdata'
import { TODO, PROGRESS, DONE } from '../../Constans/statusConst'


// context
import useList from "./useList";
import ListContext from '../../context/ListContext'


export default function List(){

    const {list, getList} = useList()


    console.log('LIST LIST LIST')
    
  

  
  
    return list.length ? (
  
      <>
  
        <ListContext.Provider value={{list, getList}}>
        <Form/>
        <TaskBoard/>
        

        </ListContext.Provider>
        
        

        
  
        
      </>
    ) : null;


}