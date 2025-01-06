import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const avatarPhoto =
    "https://aui.atlassian.com/aui/9.0/docs/images/avatar-person.svg";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user?.photoUrl);

  const hanldeLogout = async () => {
    try {
      await axios.post(
        BASE_URL + "/logout",
        {},// Empty req.body
        {
          withCredentials: true, // 
        }
      );
      dispatch(removeUser());
      return navigate("/login");
    } catch (error) {
      console.error("Issue in logging out..", error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
            DevTinder
          </Link>
        </div>
        {user && (
          <>
          <p>
            Welcome, {user.firstName} {user.lastName}
          </p>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mx-7"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <Link onClick={hanldeLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        </>
  )}
      </div>
    </div>
  );
};

export default NavBar;
