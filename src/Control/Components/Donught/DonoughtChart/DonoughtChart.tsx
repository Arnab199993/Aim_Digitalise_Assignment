import { DonoughtDetails } from "../DonoughtDetails/DonoughtDetails";

const DonoughtChart = () => {
  const gradientStops = DonoughtDetails.map((item, index) => {
    const start = DonoughtDetails.slice(0, index).reduce(
      (acc, cur) => acc + cur.percentage,
      0
    );
    const end = start + item.percentage;
    return `${item.color} ${start}% ${end}%`;
  });

  return (
    <div className="flex justify-between items-center ">
      <div
        className="w-64 h-64 rounded-full relative "
        style={{
          background: `conic-gradient(${gradientStops})`,
        }}
      >
        <div className="w-32 h-32 rounded-full absolute top-0 left-0 right-0 bottom-0 m-auto bg-[#6e797f] "></div>
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-lg font-semibold text-white">50%</span>
        </div>
      </div>
    </div>
  );
};

export default DonoughtChart;
