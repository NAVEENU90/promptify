import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  return (
    <nav className="flex min-h-16 items-center justify-between gap-3 py-3 sm:py-4">
      <Link to="/">
        <span className="text-xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
          Promptify
        </span>
      </Link>

      <div className="flex items-center">
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-2 text-xs transition-transform hover:scale-105 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
              aria-label={`Credits left: ${credit}. Buy more credits`}
            >
              <img className="w-4 sm:w-5" src={assets.credit_star} alt="" />
              <span className="sm:hidden">{credit}</span>
              <span className="hidden sm:inline">Credits left: {credit}</span>
            </button>
            <p className="hidden text-sm sm:block">Hi, {user.name}</p>
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen((isOpen) => !isOpen)}
                className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Open profile menu"
                aria-expanded={isProfileMenuOpen}
              >
                <img
                  src={assets.profile_icon}
                  className="w-9 drop-shadow sm:w-10"
                  alt=""
                />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 top-full z-10 mt-2 min-w-32 rounded-md border border-gray-200 bg-white p-1 text-sm text-black shadow-lg">
                  <button
                    type="button"
                    onClick={() => {
                      setIsProfileMenuOpen(false);
                      logout();
                    }}
                    className="w-full rounded px-3 py-2 text-left hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              type="button"
              onClick={() => navigate("/buy")}
              className="cursor-pointer text-sm sm:text-base"
            >
              Pricing
            </button>
            <button
              type="button"
              onClick={() => setShowLogin(true)}
              className="cursor-pointer rounded-full bg-zinc-800 px-5 py-2 text-sm text-white transition-colors duration-150 hover:bg-zinc-700 sm:px-10"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
