export function getTasks(req, res){
    res.send('tasks')
}

export function createTask(req,res){
    const newTask = req.body;
    res.status(201).send('Task Added');
}

export function updateTask(req,res){
    const taskUpdate = req.body;
    const {taskId} = req.params;
    res.status(202).send('task updated')
}

export function deleteTask(req,res){
    const {taskId} = req.params;
    res.status(203).send('Task deleted')
}