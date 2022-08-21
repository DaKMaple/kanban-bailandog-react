import React, { useEffect } from "react";
const Task = ({ title, details, index, id, provided, handleRemove,children }) => {

  const [count, setCount] = React.useState(1);
  useEffect(() => {});
  return (
    <div className="task"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
    >
      <div>
        <img src={process.env.PUBLIC_URL + "/edit.svg"} alt="编辑" />
        <img src={process.env.PUBLIC_URL + "/del.svg"} alt="删除" />
      </div>
      <h2>{title}</h2>
      <p>{details}</p>
      <p>{index}</p>
      <p>{id}</p>
    </div>
  );
};

export default Task;
