import React from 'react';
import {Outlet} from 'react-router-dom'
import NavItem from './components/NavItem';

function App() {
  const navs = [
    {to: '/', name: 'Home'},
    {to: '/form', name: 'Form'},
    {to: '/todos', name: 'Todos'},
  ]

  return (
    <div className="App">
      <nav>
        {navs.map(nav => <NavItem key={nav.name} {...nav} />)}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
