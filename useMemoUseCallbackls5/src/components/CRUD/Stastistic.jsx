
import React, {memo} from "react";

export default memo(function Statistic({data}){
    


    return (
        <div className="statistic">
            Statistic:
            <ul>
                <li>
                All: {data.length}
                </li>
                <li>Completed: {data.filter((el) => el.completed).length}</li>
                <li>Not completed: {data.filter((el) => !el.completed).length}</li>
            </ul>
        </div>
    )
})