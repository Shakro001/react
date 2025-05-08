
import React, {useState, useEffect, useCallback} from "react";
// memo - HOC 

import service from "../../API/mockdata";

import Filter from './Filter'
import Form from "./Form";
import Statistic from "./Stastistic";
import List from "./RenderList";


import {
    TODOS_FILTER_ALL,
    TODOS_FILTER_COMPLETED,
    TODOS_FILTER_PROGRESS,
  } from '../../constans/filterConst';

export default function Crud(){
    console.log('CRUD CRUD CRUD')


const [list, setList] = useState([])

const [filter, setFilter] = useState(TODOS_FILTER_ALL)


const getList = useCallback(async () => {
    try {
        const response = await service.get()
        setList(response)
    } catch (error) {
        console.log(error)
    }
}, [])

useEffect(()=>{
    getList()
}, [])

return list.length ? (
    <>
    <Filter filter={filter} setFilter={setFilter} />
    <Form getList={getList} />
    <Statistic data={list} />
    <List data={list} getList={getList} filter={filter} />
    </>
) : null

}