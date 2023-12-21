import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { increment } from "../../features/counter/counterSlice";
const Home = () => {
  const { value } = useAppSelector((store) => store.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col  ">
      <div className="flex">
        <h1>DASHBOARD - HOME</h1>
      </div>

      <div className="flex flex-col py-[10px] gap-[20px]">
        <div>
          <Link
            className="text-red-800 font-medium bg-green-300 p-2 rounded-md"
            to="/orders">
            GO TO ORDERS
          </Link>
        </div>
        <div>
          <Link
            className="text-red-800 font-medium bg-green-300 p-2 rounded-md"
            to="/login">
            GO TO LOGIN
          </Link>
        </div>
      </div>

      <div className="flex">
        <button className="bg-green-500 text-red-800 rounded-md p-2" onClick={() => dispatch(increment())}>INCREASE ME WITH RTK {value}</button>
      </div>
    </div>
  );
};
export default Home;
