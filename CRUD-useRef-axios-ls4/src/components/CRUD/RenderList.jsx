import React, { useState, useEffect } from "react";
import service from "../../services/mockapi";
import DelEl from "./DelEl";
import CreateNewName from "./CreateNewName";
export default function RenderList({data, filterEl,  getApi}){


    const renderItem = (item, isRoot = false) => {
        if (typeof item === "object" && item !== null && !Array.isArray(item)) {
          return (
            <ul className={isRoot ? "users__list" : null} key={item.id}>
              {Object.keys(item).map((key) => {
                if (filterEl[key] === false) return null;
                return (
                  <li key={key}>
                    <span>{key}: </span>
                    {renderItem(item[key])}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          return <span>{item !== null ? item.toString() : "null"}</span>;
        }
      };


      


    return(
        <div className="users">
        {data.map((el, index) => {
          return (
            <div className="users__item" key={el.id}>
              {renderItem(el, true)}
 
              <DelEl el={el} getApi={getApi} />
              <CreateNewName el={el} getApi={getApi}/>


            </div>
          );
        })}
      </div>
    )
}