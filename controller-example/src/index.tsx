import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import routes from './routes'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {routes.map(routeInfo => <Route key={routeInfo.name} {...routeInfo} />)}
      </Route>
    </Routes>
  </BrowserRouter>
);
