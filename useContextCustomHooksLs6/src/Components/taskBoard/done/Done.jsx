import React, { useContext } from "react";

import TaskBoardContext from "../../../context/TaskBoardContext";

export default function Done({ list }) {
  const { handleDelete } = useContext(TaskBoardContext);

  const done = list.filter((el) => el.status == 2);

  return(
    <div className="done">
        Done: {done.length}
      <ul>
        {done.map((el, index) => (
          <li key={el.id}>
            {el.title}{" "}
            <button onClick={() => handleDelete(el)}>To archice</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
