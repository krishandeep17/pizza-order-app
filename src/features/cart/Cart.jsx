import { useDispatch, useSelector } from "react-redux";

import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import { getUsername } from "../user/userSlice";
import CartItem from "./CartItem";
import { clearCart, getCart, getTotalCartQuantity } from "./cartSlice";
import EmptyCart from "./EmptyCart";

export default function Cart() {
  const dispatch = useDispatch();
  const username = useSelector(getUsername);
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  if (!totalCartQuantity) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">
        Your cart, <span className="capitalize">{username}</span>
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}
