import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <h3>This is an Error Page...</h3>
      <h4>{err.status + " : "+ err.statusText}</h4>
    </>
  );
};
export default Error;
