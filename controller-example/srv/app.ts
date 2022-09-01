/* IMPORTS */
import express, {Request, Response} from 'express'

const app = express()
const PORT = 8080

app.get('/', (req: Request, res: Response) => {
  res.send('hello word')
})

app.listen(PORT, () => {
  console.log(`Server is Running at port ${PORT} 🚀`)
})
