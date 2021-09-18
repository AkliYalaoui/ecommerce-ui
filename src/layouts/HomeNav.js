import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
const HomeNav = () => {
  return (
    <nav className="flex justify-between items-center max-w-5xl m-auto p-2">
      <h3 className="text-4xl">
        <Link to="/">
          <GiShoppingCart />
        </Link>
      </h3>
      <ul className="flex space-x-3 items-center">
        <li>
          <Link
            to="/login"
            className="p-2 border-b-2 border-purple-700 hover:text-purple-700"
          >
            sign in
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="p-2 text-white bg-purple-700 rounded hover:bg-purple-600"
          >
            sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomeNav;
