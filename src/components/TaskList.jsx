import AddTaskButton from "./AddTaskButton";
import Task from "./Task";

import { Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";
import "./TaskList.css";
import AddTaskPopup from "./AddTaskPopup";

const TaskList = (props) => {
  // console.log(props.events?.[props.tag]);
  // props.events?.[props.tag].forEach((element) => {
  //   console.log(element);
  // });
  // console.log(props.tag);
  // console.log(props.events);
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTask] = useState({
    id:'',
    taskName: "",
    taskDetail: "",
  });
  /**显示弹出层 */
  const ShowPopup = () => {
    setShowAddTask(true);
  };
  const handleRemove = (id) => {
    console.log("已删除");
  };
  return (
    <div className="colum">
      <h2>{props.tag}</h2>
      <AddTaskButton onClick={ShowPopup} />
      <Droppable droppableId={props.tag} key={props.tag}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {props.events?.[props.tag].map((item, index) => {
                return (  
                  <Draggable
                    draggableId={item.id}
                    key={item.id}
                    index={index}
                  >
                    {(provided, snapshot) => {
                      return (
                        <Task
                          id={item.id}
                          title={item.taskName}
                          details={item.taskDetail}
                          handleRemove={handleRemove}
                          provided={provided}
                          snapshot={snapshot}
                        ></Task>
                      );
                    }}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
      {showAddTask ? (
        <AddTaskPopup
          setEvents={props.setEvents}
          tag={props.tag}
        ></AddTaskPopup>
      ) : null}
    </div>
  );
};

export default TaskList;
