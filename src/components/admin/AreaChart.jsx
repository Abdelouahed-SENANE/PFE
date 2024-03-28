import { React, useRef, useEffect } from "react";
import ApexCharts from "apexcharts";


const LineChart = () => {
    return (
        <div className="mb-5 border p-5 border-gray-200 bg-white rounded-lg">
            <header className="">
                <h3>Total Service Sold Per Day</h3>
            </header>
            <div className="">
                <Area />
            </div>
        </div>
    );
};

const Area = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        var options = {
            series: [
                {
                    name: "Devloppment & IT",
                    data: [31, 40, 28, 51, 42, 109, 100],
                },
                {
                    name: "Data Sience",
                    data: [11, 32, 45, 32, 34, 52, 41],
                },
            ],
            legend: {
                position: "top",
                horizontalAlign: "center",
                fontSize: "16px",
            },
            chart: {
                height: 370,
                toolbar: false,
                type: "area",
            },
            colors: ["#84cc16", "#06b6d4"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "smooth",
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();

        return () => {
            chart.destroy();
        };
    }, []);

    return (
        <div>
            <div id="chart" ref={chartRef}></div>
        </div>
    );
};

export default LineChart;
