import { Link, Routes, Route } from "react-router-dom";
import AllPath from "../../../../Control/Route/AllPath";
import PagePath from "../../../../Control/Route/PagePath";

const MenuList = () => {
  const menuItems = AllPath();

  return (
    <>
      <ul className="mt-6">
        {menuItems
          ?.filter((path) => path.showInNavbar)
          .map((path: PagePath) => (
            <li
              key={path.label}
              className="px-6 py-2 hover:bg-[#88999f] cursor-pointer"
            >
              <Link to={path.to || "#"} className="text-white">
                {path.label}
              </Link>
            </li>
          ))}
      </ul>

      <Routes>
        {menuItems
          .filter((route) => route.to)
          .map((route) => (
            <Route
              key={route.label}
              path={route.to}
              element={<route.Component showSearchbar={route.showSearchbar} />}
            />
          ))}
      </Routes>
    </>
  );
};

export default MenuList;
