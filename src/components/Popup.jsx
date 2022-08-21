// import { useEffect, useState } from "react";
import "./Popup.css";
import 'bootstrap/dist/css/bootstrap.css';
const Popup = (props) => {
  // console.log(props.isShow);
  // console.log(!props.isShow);
//   console.log(props);
//   let tp = props.isShow;
//   if (typeof tp !== "boolean") {
//     return;
//   }
//   if (!props.isShow) {
//     return;
//   }

//   const [asShow, setdisplay] = useState(props.isShow);
//   // 为元素添加事件监听
//   console.log("弹出层状态:" + asShow);
//   useEffect(() => {
//     setdisplay(props.isShow);
//     console.log("初始化弹出层状态:" + asShow);
//   }, []);
//   if (!asShow) {
//     return;
//   }
//   const handleCloseThis = (flag) => {
//     handleClose(flag);
//     setdisplay(flag);
//   };
  return (
    <div className="mask">
      <div className="container">
      <div className="modal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn ESLintbtn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
        {props.children == null ? "null" : props.children}
        {/* <div>
          <p onClick={() => handleCloseThis(!asShow)}>关闭</p>
          <p>{props.title == null ? "空的" : "有点东西"}</p>
          
          <div>当前状态{asShow ? "true" : "false"}</div>
        </div>
        <div className="close">X</div> */}
      </div>
      {/* <div className="close">X</div> */}
    </div>
  );
};

export default Popup;
