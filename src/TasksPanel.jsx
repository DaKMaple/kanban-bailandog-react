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
  const initEvent = 
    {
      ["To do"]: [],
      ["In progress"]: [],
      ["Completed"]: [],
    }
  ;

  const [events, setEvents] = React.useState(() => {
    console.log(localStorage.getItem("events"));
    return localStorage.getItem("events")
      ? JSON.parse(localStorage.getItem("events"))
      : initEvent;
  });
  //监听events的状态，当events的值改变时执行这段
  React.useEffect(() => {
    console.log(!events);
    if (!events) {
      //初始化时
      localStorage.setItem("events", JSON.stringify(initEvent));
      console.log(localStorage.getItem("events"));
      setEvents(JSON.parse(localStorage.getItem("events")));
    } else {
      localStorage.setItem("events", JSON.stringify(events));
    }
  }, [events]);

  //拖动组件结束后触发的事件
  const handleDragEnd = (res) => {
    /**
     * {
    "draggableId": "测试一下",
    "type": "DEFAULT",
    "source": {//这个item所在的原列表
        "index": 0,//item所在原列表的下标
        "droppableId": "To do"//item所在原列表列表标识
    },
    "reason": "DROP",
    "mode": "FLUID",
    "destination": {//item需要移动去的列表
        "droppableId": "In progress",//列表所在标识
        "index": 0//移动到列表的这个下标的位置
    },
    "combine": null
}
     */
    console.log(res);
    if (!res.destination) return;
    const { source, destination } = res;
    console.log(events);
    const copyTask = events;
    console.log(copyTask);
    setEvents((prev) => {
      console.log(1);
      console.log(prev?.[source.droppableId]);
      let eventCopy = { ...prev };
      //移除
      const tasklistSource = prev?.[source.droppableId];
      const tmp=prev?.[source.droppableId][source.index];
      tasklistSource.splice(source.index, 1);
      eventCopy = { ...prev, [source.droppableId]: tasklistSource };
      //添加
      const tasklistDes=prev?.[destination.droppableId];
      console.log(tmp);
      tasklistDes.splice(destination.index,0,tmp)
      eventCopy = { ...prev, [destination.droppableId]: tasklistDes };
      return eventCopy;
    });
  };
  const [popupState, setPopupState] = useState(false);
  const [task, setTask] = useState({
    taskName: "",
    taskDetail: "",
  });
  console.log(task);
  console.log(events);
  const inputchang = (event) => {
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

  console.log(events);
  return (
    <DragDropContext onDragEnd={(res) => handleDragEnd(res)}>
      <div className="task_body" key="task_body">
        {Object.entries(events).map((key, index) => (
          <TaskList
            tag={key[0]}
            events={events}
            setEvents={setEvents}
            key={key[0]}
          ></TaskList>
        ))}
      </div>
    </DragDropContext>);
};

export default TaskPanel;
