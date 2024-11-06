import React, {useState} from "react";

function TodoList(){
    
    const [tasks, setTasks] = useState(["Task 1", "Task 2", "Task 3"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){

        if(newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index + 1]] = [updateTasks[index + 1], updateTasks[index]];
            setTasks(updateTasks);
        }
    }

    return(
        <>
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div className="">
                <input type="text" 
                        placeholder="Enter a task ..." 
                        value={newTask}
                        onChange={handleInputChange}/>
                <button className="add-button" 
                        onClick={addTask}>
                    Add
                </button>
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" 
                                onClick={() => deleteTask(index)}>
                            Delete
                        </button>

                        <button className="move-button" 
                                onClick={() => moveTaskUp(index)}>
                            Move Up
                        </button>

                        <button className="move-button" 
                                onClick={() => moveTaskDown(index)}>
                            Move Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
        </>
    );
}
export default TodoList;