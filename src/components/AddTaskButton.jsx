import "./AddTaskButton.css";
const AddTaskButton=((props)=>{

    return (
        <div className="add_task_btn" onClick={props.onClick?props.onClick:()=>{console.log("请重写onClick方法");}}>
            +
        </div>
    );
});

export default AddTaskButton;