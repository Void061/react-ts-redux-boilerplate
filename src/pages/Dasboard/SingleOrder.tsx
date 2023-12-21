import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const SingleOrder = () => {
  const { slug } = useParams();
  return (
    <div className="flex flex-col">
      <div className="flex">
        <h1>DASHBOARD - ORDINE N. {slug}</h1>
      </div>

      <div className="flex">
        <Link
          className="text-red-800 font-medium bg-green-300 p-2 rounded-md"
          to="/orders">
          BACK TO ORDERS
        </Link>
      </div>
    </div>
  );
};
export default SingleOrder;
