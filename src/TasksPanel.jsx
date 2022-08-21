import React, { useEffect, useState } from "react";
import Task from "./components/Task";
import Popup from "./components/Popup";
import TaskList from "./components/TaskList";
import "./TasksPanel.css";
import "bootstrap/dist/css/bootstrap.css";
import { DragDropContext } from "react-beautiful-dnd";

export const TempTask = {
  taskName: "",
  taskDetail: "",
};
const TaskPanel = () => {
  const initEvent = [
    {
      ["To do"]: [],
      ["In progress"]: [],
      ["Completed"]: [],
    },
  ];

  const [events, setEvents] = React.useState(() => {
    return localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : initEvent;
  });
  const [popupState, setPopupState] = useState(false);
  const [task, setTask] = useState({
    taskName: "",
    taskDetail: "",
  });
  console.log(task);

  const inputchang = (event) => {
    console.log(event);
    console.log();
    let tmp = task;
    tmp[event.target.name] = event.target.value;
    console.log(tmp);
    setTask({
      ...task,
      [event.target.name]: event.target.value,
    });
    console.log(task);
  };
  /**
   * 关闭弹出层
   */
  const closePopup = () => {
    setPopupState(!popupState);
    setTask({
      taskName: "",
      taskDetail: "",
    });
  };
  let temppopup = (
    <div className="popupBody">
      <div className="close mb-2 " onClick={closePopup}>
        X
      </div>
      <div className="mb-2">
        <p className="title">Add Task TODO</p>
      </div>
      <div className="mb-2">
        <label htmlFor="taskName" className="form-label">
          任务标题：{task["taskName"]}
        </label>
        <input
          type="email"
          className="form-control"
          id="taskName"
          placeholder="Pleas input task name !"
          name="taskName"
          value={task.taskName}
          onChange={inputchang}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="textarea" className="form-label">
          任务详情：
        </label>
        <textarea
          className="form-control"
          id="textarea"
          rows="3"
          name="taskDetail"
          value={task.taskDetail}
          onChange={inputchang}
        ></textarea>
      </div>
      <div className="d-grid">
        <button type="button" className="btn btn-primary">
          确认
        </button>
      </div>
    </div>
  );
  // const draglist = Object.entries(events[0]).map((key, index) => (
  //   <TaskList tag={key[0]} events={events} setEvents={setEvents}></TaskList>
  // ));
  // const draglist = Object.entries(events[0]).map(([key, index]) => (
  //   <TaskList tag={key} key={key} events={events} setEvents={setEvents}></TaskList>
  // ));
  return (
    // <div className="APP">
      <DragDropContext>
        <div className="task_body">
          {Object.entries(events[0]).map((key, index) => (
            <TaskList
              tag={key[0]}
              events={events}
              setEvents={setEvents}
              key={key[0]}
            ></TaskList>
          ))}
        </div>
        {popupState ? (
        <Popup handleClose={setPopupState}>{temppopup}</Popup>
      ) : null}
      </DragDropContext>

       
    // </div>
  );
};

export default TaskPanel;
