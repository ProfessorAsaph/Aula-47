import { useEffect, useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";
import { Link } from "react-router-dom";

export default function TaskList() {

    const [taskList, setTaskList] = useState<Task[]>([]);

    useEffect(() => {

        const fetchTaskList = async () => {
            try {
                const response = await TaskServiceFront.getTasks();
                setTaskList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTaskList();

    },[]);

    const taskListRows = taskList.map( task =>
        <TaskListRow task={task} key={task.id}/>
    );

    return(
        <table>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task Name</th>
                    <th>Deadline</th>
                    <th>Is Done</th>
                </tr>
            </thead>

            <tbody>
                {taskListRows}
            </tbody>

        </table>
    );
}

interface TaskListRowProps {
    task: Task;
}

function TaskListRow(props: TaskListRowProps){

    return(
        <tr>
            <td>{props.task.id}</td>
            <td><Link to={"/" + props.task.id}>{props.task.name}</Link></td>
            <td>{props.task.deadlineDate}</td>
            <td>{props.task.done ? "True": "False"}</td>
        </tr>
    );
} 