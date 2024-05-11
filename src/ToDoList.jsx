import { useState } from "react";

function ToDoList(){

    const [tasks,setTasks] = useState([]);
    const [newTask,setNewTask] = useState("");

    function HandleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        setTasks(tasks.filter((_,i)=> i !== index));
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index - 1]] = [updatedTasks[index - 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]] = [updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>TO DO LIST</h1>
            <input type="text" value={newTask} onChange={HandleInputChange} placeholder="Enter a task to add"/>
            <button className="add-button" onClick={addTask}>Add</button>
            <ol>
                {tasks.map((task,key)=> <li key={key}>
                    <div className="text-div"><span className="text">{task}</span></div>
                    <button className="delete-button" onClick={()=> deleteTask(key)}>Remove</button>
                    <button className="move-button" onClick={()=> moveTaskUp(key)}>☝️</button>
                    <button className="move-button" onClick={()=> moveTaskDown(key)}>👇</button>
                    </li>)}
            </ol>
        </div>
    );
}

export default ToDoList;