import React, { useContext } from "react";

import ToDo from "./toDo/ToDo";
import Progress from "./progress/Progress";
import Done from "./done/Done";

import ListContext from "../../context/ListContext";

// taskboard context
import useTaskBoard from "./useTaskBoard";
import TaskBoardContext from "../../context/TaskBoardContext";

export default function TaskBoard() {
  const { list } = useContext(ListContext);

  const { handleStatus, handleDelete } = useTaskBoard();


  return (
    <div className="taskBoard">
      <TaskBoardContext.Provider value={{ handleStatus, handleDelete }}>
        <ToDo list={list}  />
        <Progress list={list}  />
        <Done list={list}  />
      </TaskBoardContext.Provider>
    </div>
  );
}
