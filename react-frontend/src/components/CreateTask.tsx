export default function CreateTask() {

    return(
        <>
            <h1>Create Task</h1>

            <div>
                <label>Name: </label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="name..."
                />
            </div>

            <div>
                <label>Description: </label>
                <textarea 
                    name="description"
                    placeholder="description..."
                />
            </div>

            <div>
                <label>Deadline: </label>
                <input
                    type="datetime-local"
                    name="deadlineDate"
                />
            </div>

            <div>
                <button>Add</button>
            </div>
        </>
    );

}