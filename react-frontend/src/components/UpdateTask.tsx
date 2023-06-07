import { useEffect, useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";
import { useParams } from "react-router-dom";

export default function UpdateTask(){

    const [task, setTask] = useState<Task>();
    const [readOnly, setReadOnly] = useState<boolean>(true);

    const { id } = useParams();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        if(task !== undefined){
            setTask({...task, [e.target.name]: e.target.value});
        }
    };

    const handleIsDone = (checked: boolean)  => {
        if(task !== undefined){
            setTask({...task, done: checked});
        }
    };

    const readOnlyToggle = () => {
        setReadOnly(false);
    }


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

    },[id]);


    if(task !== undefined){
        return(
            <>
                <h1>Task id: {task.id}</h1>
    
                <div>
                    <label>Name: </label>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="name..."
                        value={task.name}
                        onChange={(e) => handleChange(e)}
                        disabled={readOnly}
                    />
                </div>
    
                <div>
                    <label>Description: </label>
                    <textarea 
                        name="description"
                        placeholder="description..."
                        value={task.description}
                        onChange={(e) => handleChange(e)}
                        disabled={readOnly}
                    />
                </div>
    
                <div>
                    <label>Deadline: </label>
                    <input
                        type="datetime-local"
                        name="deadlineDate"
                        value={task.deadlineDate}
                        onChange={(e) => handleChange(e)}
                        disabled={readOnly}
                    />
                </div>

                <div> 
                    <label>
                        Is Done:
                        <input
                            type="checkbox"
                            checked={task.done}
                            onChange={(e) => handleIsDone(e.target.checked)}
                            disabled={readOnly}
                        />     
                    </label>

                </div>
    
                <div>
                    {readOnly ? 
                        <button onClick={readOnlyToggle}> Edit </button>
                        :
                        <button> Save </button>
                    }
                </div>
            </>
        );
    }else {
        return(
            <p>erro</p>
        )
    }
    

}