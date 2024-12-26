import DefaultPageSetup from "../../Control/Components/DefaultPageSetup/DefaultPageSetup";
import DonoughtChart from "../../Control/Components/Donught/DonoughtChart/DonoughtChart";
import GraphChart from "../../Control/Components/GraphChart/GraphChart";

export interface ShowSearchbarProps {
  showSearchbar: boolean;
}

const Dashboard = (props: ShowSearchbarProps) => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-[#88999f] to-[#697780]">
      <DefaultPageSetup />
      <div className="flex-1 flex flex-col">
        <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome to the Dashboard</h1>
          {props.showSearchbar && (
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2"
            />
          )}
        </div>
        <div className="flex justify-between my-8 p-8">
          <DonoughtChart />
          <GraphChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
