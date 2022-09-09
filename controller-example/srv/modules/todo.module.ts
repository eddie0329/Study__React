import {Request, Response, Router} from 'express'
import {todos} from '../mocks/todos'

const router = Router()

let id = 6;

let data = todos

router.get('/', (req: Request, res: Response) => {
  res.send(data)
})

router.post('/addTodo', (req: Request<{}, { title: string }>, res: Response) => {
  const newTodo = {id: ++id, title: req.body.title, completed: false}
  data.push(newTodo)
  res.send(true)
})

router.post('/deleteTodo', (req: Request<{}, { id: number }>, res: Response) => {
  data = data.filter(({id}) => id !== req.body.id)
  res.send(true)
})

router.post('/modifyTodo', (req: Request<{}, { id: number }>, res: Response) => {
  const record = data.find(({id}) => id === req.body.id) ?? {completed: false}
  record.completed = !record.completed
  res.send(true)
})

export default router
