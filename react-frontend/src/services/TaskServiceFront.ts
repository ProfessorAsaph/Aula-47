import axios from "axios";
import Task from "../interfaces/Task";

const TASK_API_BASE_URL = "http://localhost:8080/tasks";

class TaskServiceFront {

    saveTask(task: Task){
        return axios.post(TASK_API_BASE_URL + "/new", task);
    }
}

export default new TaskServiceFront();