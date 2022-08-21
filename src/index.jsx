import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TasksPanel from './TasksPanel';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
// const prohibit=true;
// if(prohibit){
//     document.getElementById('root').style=""
// }
root.render(
    <TasksPanel />
);
