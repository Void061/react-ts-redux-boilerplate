import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h1>DASHBOARD - ORDERS</h1>
      </div>

      <div className="py-[10px] flex flex-col gap-[20px] justify-start">
        <div>
          <Link
            className="text-red-800 font-medium bg-green-300 p-2 rounded-md"
            to="/order/1">
            GO TO ORDER 1
          </Link>
        </div>

        <div>
          <Link
            className="text-red-800 font-medium bg-green-300 p-2 rounded-md"
            to="/">
            BACK TO HOME
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Orders;
