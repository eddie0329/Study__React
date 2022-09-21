import React from 'react';
import {Outlet} from 'react-router-dom'
import routes from './routes';
import NavItem from './components/NavItem';

function App() {
  return (
    <div className="App">
      <nav>
        {routes.map(routeInfo => <NavItem key={routeInfo.name} to={routeInfo.path} name={routeInfo.name} />)}
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
