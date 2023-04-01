import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export function Header() {
  const navigate = useNavigate();
  const [LoggedIn, setLoggedIn] = useState();
  const firstName = localStorage.getItem("firstName");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(firstName);

  const handleLogOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("firstName");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("surName");
    localStorage.removeItem("email");
    localStorage.removeItem("userName");
    localStorage.removeItem("user");
    setLoggedIn(false);
    navigate("/");
    // window.location.href = "/";
  };
  return (
    <div className="navbar bg-[#3D4451] ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {firstName ? (
              <li tabIndex={0}>
                <button onClick={handleLogOut}>
                  <Link className="justify-between text-black">Logout</Link>
                </button>
              </li>
            ) : (
              <li tabIndex={0}>
                <Link to="/login" className="justify-between text-black">
                  Login
                </Link>
              </li>
            )}

            {firstName ? (
              " "
            ) : (
              <li tabIndex={0}>
                <Link to="/register" className="justify-between text-black">
                  Register
                </Link>
              </li>
            )}
          </ul>
        </div>
        <Link className="ml-7 normal-case text-xl ">
          {" "}
          <img
            src="/assets/images/logo-no-background.png"
            className="w-16"
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-4 ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-white" to="/">
              Home
            </Link>
          </li>

          {firstName ? (
            <li tabIndex={0}>
              <button onClick={handleLogOut}>
                <Link className="justify-between text-white">Logout</Link>
              </button>
            </li>
          ) : (
            <li tabIndex={0}>
              <Link to="/login" className="justify-between text-white">
                Login
              </Link>
            </li>
          )}

          {firstName ? (
            ""
          ) : (
            <li tabIndex={0}>
              <Link to="/register" className="justify-between text-white">
                Register
              </Link>
            </li>
          )}
          <li></li>
        </ul>
      </div>
    </div>
  );
}
