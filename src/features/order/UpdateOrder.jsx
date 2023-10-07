import { useFetcher } from "react-router-dom";

import { updateOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export async function updateOrderAction({ params }) {
  const data = { priority: true };

  await updateOrder(params.orderId, data);

  return null;
}
