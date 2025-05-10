

import React, {useContext} from "react";

import TaskBoardContext from "../../../context/TaskBoardContext";
export default function ToDo({list}){

    const {handleStatus} = useContext(TaskBoardContext)


    const toDo = list.filter((el) => el.status == 0);

    return (
        <div className="toDo">
            To Do: {toDo.length}
            <ul className="toDo">
              {toDo.map((el, index) => (
                <li key={el.id}>
                  {el.title}
                  <button onClick={() => handleStatus(el, 1)}>In progress</button>
                </li>
              ))}
            </ul>
          </div>
    )
}