import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <nav>
        <NavLink to="/invoices">Invoices</NavLink> | {" "}
        <NavLink to="/expenses">Expenses</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
