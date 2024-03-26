import React from "react";
import Line from "./Area";

const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 3000,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 0,
        pv: 0,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 300,
        amt: 20,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
];

const LineChart = () => {
    return (
        <div className="mb-5 border p-5 border-gray-200 bg-white rounded-lg">
            <header className="">
                <h3>Total Service Sold Per Day</h3>
            </header>
            <div className="">
                <Line data={data} />
            </div>
        </div>
    );
};

export default LineChart;
