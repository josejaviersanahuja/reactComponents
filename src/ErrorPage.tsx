import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
  status?: number;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status || "mira el console log"} - {error.statusText || error.message || "revisa el console log"}</i>
      </p>
    </div>
  );
}