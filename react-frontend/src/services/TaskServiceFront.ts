import axios from "axios";
import Task from "../interfaces/Task";

const TASK_API_BASE_URL = "http://localhost:8080/tasks";

class TaskServiceFront {

    // Faz uma requisição POST enviando um Objeto TASK
    saveTask(task: Task){
        return axios.post(TASK_API_BASE_URL + "/new", task);
    };

    // Faz uma requisição GET retornando todos as tasks do banco
    getTasks() {
        return axios.get(TASK_API_BASE_URL);
    };

    getTaskById(id : string) {
        return axios.get(TASK_API_BASE_URL + "/" + id);
    }
}

export default new TaskServiceFront();