import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="flex flex-col  ">
      <div className="flex">
        <h1>APP - LOGIN</h1>
      </div>

      <div className="flex">
        <Link
          className="text-red-800 font-medium bg-green-300 p-2 rounded-md"
          to="/">
          GO TO DASHBOARD
        </Link>
      </div>
    </div>
  );
};
export default Login;
