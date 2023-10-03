import { Link } from "react-router-dom";

import SearchOrder from "../features/order/SearchOrder";

export default function Header() {
  return (
    <header>
      <Link to="/">Pizza Order App</Link>

      <SearchOrder />

      <p>Krishandeep</p>
    </header>
  );
}
