import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  {
    text: "Dashboard",
  },
  {
    text: "Transactions",
  },
  {
    text: "Line",
  },
  {
    text: "Friends",
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div>
      {isSidebarOpen && (
        <div
          className={`bg-base-100 text-primary-content
 h-screen fixed top-0 left-0 z-40 transition duration-300 ease-in-out ${
            isNonMobile ? `w-${drawerWidth}` : 'w-full'
          }`}
        >
          <div className="p-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">ExpenditureXpert</h1>
            <button
              className="text-white focus:outline-none"
              onClick={handleSidebarClose}
            >
              Close
            </button>
          </div>
          <ul className="mt-6">
            {navItems.map(({ text }, index) => (
              <li key={index}>
                <button
                  className={`flex items-center space-x-3 px-4 py-2 w-full hover:bg-gray-200 focus:outline-none ${
                    active === text.toLowerCase() ? "bg-gray-200" : ""
                  }`}
                  onClick={() => {
                    navigate(`/${text.toLowerCase()}`);
                    setActive(text.toLowerCase());
                  }}
                >
                  <span className="flex-1">{text}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-6 left-0 w-full border-t border-gray-800 p-4">
            <div className="flex items-center gap-2">
              <img
                src={user.profile}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-lg text-primary-content">
                  {user.name}
                </p>
                <p className="text-xs text-primary-content">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
