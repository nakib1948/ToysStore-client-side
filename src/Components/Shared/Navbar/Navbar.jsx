import navimg from "../../../assets/BannerImage/navimg.png";
import bannerBg from "../../../assets/BannerImage/BannerBg.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const signout = () => {
    logOut();
    navigate("/");
  };
  return (
    <div className="navbar  rounded-2xl bg-base-200">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="">
              <Link to="/" className="text-xl text-purple rounded-full">
                Home
              </Link>
            </li>
            <li>
              <Link to="/alltoys" className="text-xl text-purple rounded-full">
                All Toys
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-xl  text-purple rounded-full">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/addtoys" className="text-xl  text-purple rounded-full">
                Add Toys
              </Link>
            </li>
          </ul>
        </div>
        <a>
          <img className=" h-20" src={navimg} alt="" />
        </a>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1 ">
          <li className="">
            <Link to="/" className="text-xl text-purple rounded-full">
              Home
            </Link>
          </li>
          <li>
            <Link to="/alltoys" className="text-xl text-purple rounded-full">
              All Toys
            </Link>
          </li>
          <li>
            <Link to="/blog" className="text-xl  text-purple rounded-full">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/addtoys" className="text-xl  text-purple rounded-full">
              Add Toys
            </Link>
          </li>
          <li>
            <Link to="/mytoys" className="text-xl  text-purple rounded-full">
              My Toys
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end mr-3">
        {user?.email ? (
          <div>
            <img
              onClick={() => window.my_modal_2.showModal()}
              className="h-16 rounded-full group hover:tooltip"
              src={user.photoURL}
              alt="User Profile"
              title={user.displayName}
            />
            <dialog id="my_modal_2" className="modal">
              <form method="dialog" className="modal-box bg-base-200">
                <img
                  className="h-16 rounded-full mx-auto"
                  src={user.photoURL}
                  alt="User Profile"
                  title={user.displayName}
                />
                <p className="text-lg text-center">Name: {user.displayName}</p>
                <p className="py-4 text-center">Email: {user.email}</p>
                <button
                  onClick={() => signout()}
                  className="btn btn-block bg-purple text-white"
                >
                  Logout
                </button>
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        ) : (
          <button className="btn bg-purple text-white rounded-full">
            <Link to="login ">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
