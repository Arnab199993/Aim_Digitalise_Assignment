import MenuList from "../MenuList/Index";

const Navbar = () => {
  return (
    <div className="w-64 bg-[#697780] text-white hidden md:block">
      <div className="p-4 text-center text-lg font-semibold">Dashboard</div>
      <MenuList />
    </div>
  );
};

export default Navbar;
