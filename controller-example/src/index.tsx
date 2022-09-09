import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home'
import Form from './pages/Form'
import Todos from './pages/Todos'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todos" element={<Todos />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
