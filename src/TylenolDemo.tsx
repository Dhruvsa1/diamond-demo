// TylenolStatsPage.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Bar, Pie, Line } from "react-chartjs-2";
import Plot from "react-plotly.js";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Chart as ChartJS,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const TylenolStatsPage: React.FC = () => {
  const barData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Monthly Distribution",
        data: [65, 59, 80, 81],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["In Stock", "Used this month"],
    datasets: [
      {
        data: [300, 150],
        backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
      },
    ],
  };

  const lineData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Weekly Usage",
        data: [12, 19, 3, 17],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const tableData = React.useMemo(
    () => [
      { month: "January", usage: 65, stock: 120 },
      { month: "February", usage: 59, stock: 110 },
      { month: "March", usage: 80, stock: 90 },
      { month: "April", usage: 81, stock: 85 },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "Month", accessor: "month" },
      { Header: "Usage", accessor: "usage" },
      { Header: "Stock", accessor: "stock" },
    ],
    []
  );

  return (
    <div className="bg-white p-4">
      <NavLink to="/stats" className="inline-block mb-4">
        <motion.div whileTap={{ scale: 0.95 }}>
          <span className="text-blue-600 text-lg">&#x3c; Back</span>
        </motion.div>
      </NavLink>
      <h1 className="text-[35pt] font-bold text-left mb-4 mx-4">
        Tylenol Usage Statistics
      </h1>
      <div style={{ height: "500px", overflowY: "auto" }}>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">
            Monthly Usage Distribution
          </h2>
          <Bar
            data={barData}
            options={{ scales: { y: { beginAtZero: true } } }}
          />
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Stock Levels</h2>
          <Pie data={pieData} />
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Weekly Usage Trends</h2>
          <Line
            data={lineData}
            options={{ scales: { y: { beginAtZero: true } } }}
          />
        </div>
        <div className="mb-6 ">
          <h2 className="text-lg font-semibold mb-2">
            Box Plot of Monthly Usage
          </h2>
          <Plot
            data={[
              {
                y: [65, 59, 80, 81],
                type: "box",
                name: "Monthly Usage",
              },
            ]}
            layout={{ width: 700, height: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

export default TylenolStatsPage;
