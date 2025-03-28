// Importar las tareas desde el archivo tasksList.js
const { tasks } = require("../database/tasksList");

// Obtener todas las tareas
const getTasks = (req, res) => {
    res.json(tasks);  // Devolvemos el array de tareas
}

// Agregar nueva tarea
const addTask = (req, res) => {
    const { name } = req.body;  // Asegurándonos de que recibimos 'name' en el body

    if (!name) {
        return res.status(400).json({ message: "El campo 'name' es requerido" });
    }

    const newTask = {
        id: tasks.length + 1, 
        name: name,
        completed: false
    };

    tasks.push(newTask); 
    res.status(201).json(newTask);
}

// Actualizar tarea
const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);  
    const taskToUpdate = tasks.find(x => x.id === taskId);  

    if (!taskToUpdate) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }

    const { name, completed } = req.body; 

    if (name) taskToUpdate.name = name; 
    if (completed !== undefined) taskToUpdate.completed = completed;  
    res.status(200).json(taskToUpdate);  
};

// Eliminar tarea
const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);  
    const taskIndex = tasks.findIndex(x => x.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Tarea no encontrada" });
    }

    tasks.splice(taskIndex, 1); 

    res.status(204).send();  
};

module.exports = { getTasks, addTask, updateTask, deleteTask };
