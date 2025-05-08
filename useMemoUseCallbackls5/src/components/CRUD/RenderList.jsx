import React, {useEffect, useState} from "react";

import service from "../../API/mockdata";

import {
    TODOS_FILTER_ALL,
    TODOS_FILTER_COMPLETED,
    TODOS_FILTER_PROGRESS,
  } from '../../constans/filterConst';

export default function List({ data, getList, filter }) {

    console.log('RENDERLIST RENDERLIST RENDERLIST')


    const [filterList, setFilterList] = useState(data)

    useEffect(()=>{

        switch (filter) {
            case TODOS_FILTER_COMPLETED:
                setFilterList(data.filter(el => el.completed))
                break;
            case TODOS_FILTER_PROGRESS:
                setFilterList(data.filter(el => !el.completed))
                break;
            default:
                setFilterList(data)
                break;
        }

    

       
    }, [data, filter])



    // const sortList = structuredClone(filterList).sort((a,b) => b.completed - a.completed)

    const handleDelete = async (id) => {
        try {
            await service.delete(id)
            getList()
        } catch (error) {
            console.log(error)
        }
    }

  const renderItem = (item) => {
    if (typeof item === "object" && item !== null) {
      if (Array.isArray(item)) {
        return (
          <ul>
            {item.map((innerItem, index) => (
              
                <li key={index}>
                  {renderItem(innerItem)}
                  <button onClick={() => handleDelete(innerItem.id)} >delete</button>
                </li>
              
            ))}
          </ul>
        );
      } else {
        return (
          <ul>
            {Object.keys(item).map((key) => (
              <li key={key}>
                <span>{key}: </span>
                {renderItem(item[key])}
              </li>
            ))}
          </ul>
        );
      }
    } else {
      return <span>{item !== null ? item.toString() : "null"}</span>;
    }
  };




  return (
    <>
      <div className="list">{renderItem(filterList)}</div>
    </>
  );
}
