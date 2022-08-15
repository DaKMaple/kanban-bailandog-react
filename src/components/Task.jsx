cosnt Task=((title,details,index,id,provided,handleRemove)=>{
    return(
        <div className="task">
            <div>
                <img src="../public/edit.svg" alt="编辑" />
                <img src="../public/del.svg" alt="删除" />
            </div>
            <h2>{title}</h2>
            <p>{details}</p>
        </div>
    );
})