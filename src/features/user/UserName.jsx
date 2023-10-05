import { useSelector } from "react-redux";

import { getUsername } from "./userSlice";

export default function Username() {
  const username = useSelector(getUsername);

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}
