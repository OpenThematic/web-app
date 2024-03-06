import { useRouteError } from "react-router-dom";

const ErrorView = () =>
{
	const error = useRouteError();
	console.error(error);

	return (
		<div>
			<h1>404</h1>
			<p>Page not found</p>
			<p>{error.statusText || error.message}</p>
		</div>
	);
}

export default ErrorView;