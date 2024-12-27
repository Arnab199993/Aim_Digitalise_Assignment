import Navbar from "../../../Backbone/Layout/Sidebar/Navbar/Navbar";

const DefaultPageSetup = (props: any) => {
  const { children, ...rest } = props;

  return (
    <div
      {...rest}
      className={`flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#88999f] to-[#697780]`}
    >
      <Navbar />
      <div className="flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default DefaultPageSetup;
