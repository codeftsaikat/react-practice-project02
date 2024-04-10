import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops!!!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h4>Page Not Found!</h4>
          <p>Go Back Where Are You From</p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
