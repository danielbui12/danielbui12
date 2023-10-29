import { useRouteError } from "react-router-dom";
import style from '../assets/style/error-page.module.css'

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className={`bg-dark text-light ${style.error_page}`}>
      <h1>Oops!</h1>
      <p className="text-white-50">Sorry, an unexpected error has occurred.</p>
      <p className="text-white-50">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}