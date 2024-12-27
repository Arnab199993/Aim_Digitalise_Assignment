import { gradientStops } from "../Calculation";

const DonoughtChart = () => {
  return (
    <div className="flex justify-center items-center">
      <div
        className="relative rounded-full w-64 h-64 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 2xl:w-80 2xl:h-80"
        style={{
          background: `conic-gradient(${gradientStops})`,
        }}
      >
        <div className="absolute inset-0 m-auto w-32 h-32 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 bg-[#6e797f] rounded-full"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            50%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DonoughtChart;
