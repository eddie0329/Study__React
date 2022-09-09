/* IMPORTS */
import express, {Request, Response} from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';
/* ROUTES */
import TodoModule from './modules/todo.module';

const app = express()
const PORT = 8080

/* MIDDLE_WARE */
app.use(cors())
app.use(bodyParser.json())

/* routes */
app.use('/todos', TodoModule)

app.get('/', (req: Request, res: Response) => {
  res.send('hello word')
})

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT} 🚀`)
})
