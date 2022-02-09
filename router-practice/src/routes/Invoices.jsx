import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getInvoices } from "../data/invocies";

export default function Invoices() {
  const invocies = getInvoices();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <main>
      <h2>Invoices</h2>
      <nav>
        {invocies.filter((invocie) => {
          const filter = searchParams.get("filter");
          if (!filter) return true;
          const name = invocie.name.toLowerCase();
          return name.startsWith(filter.toLowerCase());
        }).map((invocie) => (
          <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${invocie.number}`}
            key={invocie.number}
          >
            {invocie.name}
          </NavLink>
        ))}
      </nav>
      <input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) setSearchParams({ filter });
          else setSearchParams({});
        }}
      />
      <Outlet />
    </main>
  );
}
