import { useState } from "react";
import Task from "../interfaces/Task";

export default function CreateTask() {

    const [task, setTask] = useState<Task>({
        id: undefined,
        name: "",
        description: "",
        creationDate: null,
        updateDate: null,
        deadlineDate: null,
        done: false,
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask({...task, [e.target.name]: e.target.value})
    };

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
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Description: </label>
                <textarea 
                    name="description"
                    placeholder="description..."
                    value={task.description}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Deadline: </label>
                <input
                    type="datetime-local"
                    name="deadlineDate"
                    value={task.deadlineDate}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <button>Add</button>
            </div>
        </>
    );

}