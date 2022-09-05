import React, { useState } from "react";
import Popup from "./Popup";
import uuid from "react-uuid"
const AddTaskPopup = ({ tag ,setEvents}) => {
  const [popupState, setPopupState] = useState(true);
  const [task, setTask] = useState({
    id:uuid(),
    taskName: "",
    taskDetail: "",
  });
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
    setPopupState(false);
    setTask({
      id:"",
      taskName: "",
      taskDetail: "",
    });
  };
  const confirmSubmit = () => {
    //写保存数据的逻辑
    setEvents((prev)=>{
      console.log(prev);
      const copyArr={...prev};
      console.log(copyArr);
      console.log();
      copyArr?.[tag]?.push(task)
      return copyArr;
    });
    //保存好数据后就关闭
    closePopup();
  };
  console.log(popupState);
  if (popupState) {
    return (
      <Popup handleClose={setPopupState}>
        <div className="popupBody">
          <div className="close mb-2 " onClick={closePopup}>
            X
          </div>
          <div className="mb-2">
            <p className="title">Add Task {tag}</p>
          </div>
          <div className="mb-2">
            <label htmlFor="taskName" className="form-label">
              任务标题：
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
            <button
              type="button"
              className="btn btn-primary"
              onClick={confirmSubmit}
            >
              确认
            </button>
          </div>
        </div>
      </Popup>
    );
  }
};
export default AddTaskPopup;
