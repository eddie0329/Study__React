import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data/invocies";

export default function Invoice() {
  const { invoiceId } = useParams();
  const { amount, due, name, number } = useMemo(() => {
    return getInvoice(invoiceId);
  }, [invoiceId]);

  return (
    <main>
      <h1>Total Due: {amount}</h1>
      <p>{name}: {number}</p>
      <p>Due Date: { due }</p>
    </main>
  );
}
