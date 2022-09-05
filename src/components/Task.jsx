import React, { useEffect } from "react";
const Task = ({ title, details,  provided, handleRemove,handleEdit }) => {
 
  return (
    <div
      className="task"
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <div className="btn-operation">
        <img src={process.env.PUBLIC_URL + "/edit.svg"} alt="编辑" title="编辑" onClick={handleEdit}/>
        <img src={process.env.PUBLIC_URL + "/del.svg"} alt="删除" title="删除" onClick={handleRemove}/>
      </div>
      <h3 className="tasktitle" >{title}</h3>
      <p className="taskdetail">{details}</p>
    </div>
  );
};

export default Task;
