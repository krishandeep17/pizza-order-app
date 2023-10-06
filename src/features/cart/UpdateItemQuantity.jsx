import { useDispatch } from "react-redux";

import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";
import Button from "../../ui/Button";

export default function UpdateItemQuantity({ currentQuantity, pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3 ">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}
