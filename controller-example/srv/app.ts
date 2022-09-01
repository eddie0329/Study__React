/* IMPORTS */
import express, {Request, Response} from 'express'
/* ROUTES */
import TodoModule from './modules/todo.module';

const app = express()
const PORT = 8080

app.use('/todos', TodoModule)

app.get('/', (req: Request, res: Response) => {
  res.send('hello word')
})

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT} 🚀`)
})
