import { useEffect, useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";
import { useParams } from "react-router-dom";

export default function UpdateTask(){

    const [task, setTask] = useState<Task>();

    const { id } = useParams();

    useEffect(() => {

        const fetchTask = async () => {
            try {
                const response = await TaskServiceFront.getTaskById(id!);
                setTask(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTask();

    },[]);


    if(task !== undefined){
        return(
            <>
                <h1>Create Task</h1>
    
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="name..."
                        value={task.name}
                        // onChange={(e) => handleChange(e)}
                    />
                </div>
    
                <div>
                    <label>Description: </label>
                    <textarea 
                        name="description"
                        placeholder="description..."
                        value={task.description}
                        // onChange={(e) => handleChange(e)}
                    />
                </div>
    
                <div>
                    <label>Deadline: </label>
                    <input
                        type="datetime-local"
                        name="deadlineDate"
                        value={task.deadlineDate}
                        // onChange={(e) => handleChange(e)}
                    />
                </div>
    
                <div>
                    {/* <button onClick={saveTask}>Add</button> */}
                </div>
            </>
        );
    }else {
        return(
            <p>erro</p>
        )
    }
    

}