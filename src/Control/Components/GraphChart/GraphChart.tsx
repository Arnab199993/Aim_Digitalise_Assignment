import { backgroundGridLines, months } from "./GraphChartData";
import {
  data,
  maxValue,
  chartHeight,
  barWidth,
  barSpacing,
  chartWidth,
} from "../GraphChart/Constant";
const GraphChart = () => {
  return (
    <div>
      <svg width={chartWidth + 100} height={chartHeight + 100}>
        {backgroundGridLines.map((_, index) => (
          <line
            key={index}
            x1="50"
            y1={50 + index * (chartHeight / 10)}
            x2={chartWidth + 50}
            y2={50 + index * (chartHeight / 10)}
            stroke="lightgray"
            strokeWidth="0.5"
          />
        ))}
        {data.map((_, index) => (
          <line
            key={index}
            x1={50 + index * barSpacing + barWidth / 2}
            y1="50"
            x2={50 + index * barSpacing + barWidth / 2}
            y2={chartHeight + 50}
            stroke="lightgray"
            strokeWidth="0.5"
          />
        ))}

        <line
          x1="50"
          y1="50"
          x2="50"
          y2={chartHeight + 50}
          stroke="lightgray"
          strokeWidth="1"
        />

        <line
          x1="50"
          y1={chartHeight + 50}
          x2={chartWidth + 50}
          y2={chartHeight + 50}
          stroke="lightgray"
          strokeWidth="1"
        />

        {Array.from({ length: 11 }).map((_, index) => (
          <text
            key={index}
            x="40"
            y={chartHeight + 50 - index * (chartHeight / 10)}
            textAnchor="end"
            fontSize="12"
            className="text-gray-500"
          >
            {index * 10}%
          </text>
        ))}

        {months.map((day, index) => (
          <text
            key={index}
            x={50 + index * barSpacing + barWidth / 2}
            y={chartHeight + 70}
            textAnchor="middle"
            fontSize="12"
            className="text-gray-500"
          >
            {day.label}
          </text>
        ))}

        {data.map((value, index) => {
          const percentage = (value / maxValue) * 100;
          const barHeight = (percentage / 100) * chartHeight;
          const barX = 50 + index * barSpacing;

          return (
            <g key={index}>
              <rect
                x={barX}
                y={chartHeight + 50 - barHeight}
                width={barWidth}
                height={barHeight}
                fill="white"
                rx={0}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default GraphChart;
