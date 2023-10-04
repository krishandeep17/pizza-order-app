import { useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  // this hook returns anything thrown during an action, loader, or rendering
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p className="bg-red-300 text-red-600">{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}
