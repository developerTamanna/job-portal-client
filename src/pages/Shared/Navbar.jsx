import { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../contexts/AuthContexts/AuthContext';

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);

  const handleSignout = () => {
    signOutUser()
      .then(() => {
        console.log('signout user');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-500 font-bold' : ''
          }
        >
          Home
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/MyApplications"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : ''
              }
            >
              My Applications
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink
              to="/addJob"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : ''
              }
            >
              Add Job
            </NavLink>
          </li>
        </>
      )}
      {user && (
        <>
          <li>
            <NavLink
              to="/myPostedJobs"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : ''
              }
            >
              myPostedJobs
            </NavLink>
          </li>
        </>
      )}

      {!user && (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : ''
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? 'text-blue-500 font-bold' : ''
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          {/* Mobile Menu */}
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {navItems}
              {user && (
                <li>
                  <button onClick={handleSignout}>Logout</button>
                </li>
              )}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl">
            MySite
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <button onClick={handleSignout} className="btn btn-sm btn-outline">
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="btn btn-sm btn-outline">
              Get Started
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
