import {ReactElement} from 'react';
import Home from '../pages/Home'
import Form from '../pages/Form'
import Todos from '../pages/Todos'
import Preview from '../pages/Preview';

interface IRoute {
  index?: boolean
  path: string
  name: string
  element: ReactElement
}

const routes: IRoute[] = [
  {index: true, path: '/', name: 'Home', element: <Home />},
  {path: '/form', name: 'Form', element: <Form />},
  {path: '/todos', name: 'Todos', element: <Todos />},
  {path: '/preview', name: 'Preview', element: <Preview />},
]

export default routes
