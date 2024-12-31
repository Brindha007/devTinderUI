import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const avatarPhoto = "https://aui.atlassian.com/aui/9.0/docs/images/avatar-person.svg";
  console.log(user?.photoUrl);
  return (
    <div>
        <div className="navbar bg-base-300">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevTinder</a>
        </div>
        {user && <p>Welcome, {user.firstName} {user.lastName}</p>}
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
                  src={user ? user.photoUrl : avatarPhoto}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;