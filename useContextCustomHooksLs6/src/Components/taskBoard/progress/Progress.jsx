

import React, {useContext} from "react";

import TaskBoardContext from "../../../context/TaskBoardContext";


export default function Progress({list}){
    const {handleStatus} = useContext(TaskBoardContext)
    const inProgress = list.filter((el) => el.status == 1);

    return (
        <div className="inProgress">
            In Progress: {inProgress.length}
            <ul>
              {inProgress.map((el, index) => (
                <li key={el.id}>
                  {el.title}
                  <button onClick={() => handleStatus(el, 0)}>To Do</button>
                  <button onClick={() => handleStatus(el, 2)}>Done</button>
                </li>
              ))}
            </ul>
          </div>
    )
}