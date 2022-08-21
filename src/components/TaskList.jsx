import AddTaskButton from "./AddTaskButton";
import Task from "./Task";

import { Droppable, Draggable } from "react-beautiful-dnd";
import React, { useState } from "react";
import "./TaskList.css";
import AddTaskPopup from "./AddTaskPopup"

const TaskList = (props) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [task, setTask] = useState({
    taskName: "",
    taskDetail: "",
  });
  /**显示弹出层 */
  const ShowPopup = () => {
    setShowAddTask(true);
  };
  /**输入框 */
//   const inputchang = (event) => {
//     setTask({
//       ...task,
//       [event.target.name]: event.target.value,
//     });
//     console.log(task);
//   };
  /** 关闭弹出层*/
//    const closePopup = () => {
//     setPopupState(!popupState);
//     setTask({
//       taskName: "",
//       taskDetail: "",
//     });
//     setTaskTitle("");
//   };
   /**构建弹出框 */
//    let temppopup = (
//     <div className="popupBody">
//       <div className="close mb-2 " onClick={closePopup}>
//         X
//       </div>
//       <div className="mb-2">
//         <p className="title">Add Task {taskTitle}</p>
//       </div>
//       <div className="mb-2">
//         <label htmlFor="taskName" className="form-label">
//           任务标题：{task["taskName"]}
//         </label>
//         <input
//           type="email"
//           className="form-control"
//           id="taskName"
//           placeholder="Pleas input task name !"
//           name="taskName"
//           value={task.taskName}
//           onChange={inputchang}
//         />
//       </div>
//       <div className="mb-2">
//         <label htmlFor="textarea" className="form-label">
//           任务详情：
//         </label>
//         <textarea
//           className="form-control"
//           id="textarea"
//           rows="3"
//           name="taskDetail"
//           value={task.taskDetail}
//           onChange={inputchang}
//         ></textarea>
//       </div>
//       <div className="d-grid">
//         <button type="button" className="btn btn-primary">
//           确认
//         </button>
//       </div>
//     </div>
//   );
  const handleRemove = (id) => {
    console.log("已删除");
  };
  return (
    <div className="colum">
      <h2>{props.tag}</h2>
      <AddTaskButton setEvents={props.setEvents} onClick={ShowPopup} />
      <Droppable droppableId={props.tag}>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {props.events[0]?.[props.tag].map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => {
                     return(
                        <Task
                        title={item.title}
                        details={item.details}
                        index={index}
                        id={item.id}
                        handleRemove={handleRemove}
                        provided={provided}
                        snapshot={snapshot}
                      >
                      </Task>
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
      {showAddTask?<AddTaskPopup tag={props.tag}></AddTaskPopup>:null}
      
    </div>
  );
};

export default TaskList;
