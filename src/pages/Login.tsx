import { Link } from "react-router-dom";
import { loginAuth } from "../features/user/userSlice";
import { useAppDispatch } from "../hooks";
import { ChangeEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const initialState: loginData = {
  username: "kminchelle",
  password: "0lelplR",
};
const Login = () => {
  const [loginData, setLoginData] = useState(initialState);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await dispatch(loginAuth(loginData));
    if (result.meta.requestStatus == "fulfilled") {
      navigate('/');
    } else {
      alert("Invalid credentials.");
    }
    console.log(result);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData({ ...loginData, [name]: value });
  };

  return (
    <div className="flex flex-col  ">
      <div className="flex">
        <h1>APP - LOGIN</h1>
      </div>

      <form
        method="POST"
        onSubmit={handleSubmit}
        className="bg-red-500 py-4 flex flex-col gap-[5px]">
        <div>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            value={loginData.username}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            name="password"
            type="text"
            value={loginData.password}
            placeholder="Password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>

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
