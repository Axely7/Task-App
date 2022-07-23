import {Router} from 'express';
import {getTasks, createTask, deleteTask, updateTask, getTask} from '../controllers/tasks.controllers.js'

const router = Router()

router.get('/tasks', getTasks)

router.post('/tasks', createTask)

router.put('/tasks/:id', updateTask)

router.get('/tasks/:id', getTask)

router.delete('/tasks/:id', deleteTask)


export default router