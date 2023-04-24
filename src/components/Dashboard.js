// src/components/Dashboard.js
import React, { useState } from "react";
import "./Dashboard.css";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  LabelList,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const Dashboard = () => {
  const kpis = [
    { title: "Sales Revenue", value: "$50,000" },
    { title: "Sales Growth", value: "10%" },
    { title: "Conversion Rate", value: "25%" },
    { title: "Average Deal Size", value: "$5,000" },
    { title: "Sales Cycle Length", value: "30 days" },
  ];

  const [selectedChart, setSelectedChart] = useState("radar");

  const pieChartData = [
    { name: "Sales Revenue", value: 400 },
    { name: "Sales Growth", value: 100 },
    { name: "Expenses", value: 350 },
  ];

  const areaChartData = [
    { month: "Jan", revenue: 800, growth: 1000, conversion: 150 },
    { month: "Feb", revenue: 1200, growth: 400, conversion: 250 },
    { month: "Mar", revenue: 1500, growth: 400, conversion: 330 },
    { month: "Apr", revenue: 2200, growth: 200, conversion: 500 },
    { month: "May", revenue: 1100, growth: 500, conversion: 120 },
    { month: "Jun", revenue: 2300, growth: 200, conversion: 530 },
    { month: "Jul", revenue: 1800, growth: 200, conversion: 330 },
    { month: "Aug", revenue: 500, growth: 100, conversion: 100 },
  ];

  const renderLineChart = () => {
    return (
      <LineChart
        width={600}
        height={400}
        data={areaChartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        <Line type="monotone" dataKey="growth" stroke="#82ca9d" />
        <Line type="monotone" dataKey="conversion" stroke="#ffc658" />
      </LineChart>
    );
  };

  const renderAreaChart = () => {
    return (
      <AreaChart
        width={600}
        height={400}
        data={areaChartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#8884d8"
          fillOpacity={0.3}
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="growth"
          stroke="#82ca9d"
          fillOpacity={0.3}
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="conversion"
          stroke="#ffc658"
          fillOpacity={0.3}
          fill="#ffc658"
        />
      </AreaChart>
    );
  };

  const renderPieChart = () => {
    const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

    return (
      <PieChart width={400} height={400}>
        <Pie
          data={pieChartData}
          cx={200}
          cy={200}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {pieChartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <LabelList
            dataKey="name"
            position="outside"
            style={{ fill: "black" }}
          />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    );
  };

  const renderSelectedChart = () => {
    switch (selectedChart) {
      case "radar":
        return renderLineChart();
      case "area":
        return renderAreaChart();
      case "pie":
        return renderPieChart();
      default:
        return renderLineChart();
    }
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-section chart">
        <h3>KPI Stats and Chart</h3>
        <div className="kpi-chart-container">
          <select
            className="chart-select"
            value={selectedChart}
            onChange={(e) => setSelectedChart(e.target.value)}
          >
            <option value="radar">Line Chart</option>
            <option value="area">Area Chart</option>
            <option value="pie">Pie Chart</option>
          </select>
          <div className="chart">{renderSelectedChart()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
