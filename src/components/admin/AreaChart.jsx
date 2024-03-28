import { React, useRef, useEffect } from "react";
import ApexCharts from "apexcharts";

const LineChart = () => {
    return (
        <div className="mb-5 border p-5 border-gray-200 bg-white rounded-lg">
            <header className="">
                <h3>The best recommended service</h3>
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
                    data: [500, 300, 200, 550, 122, 69, 425],
                },
                {
                    name: "Data Sience",
                    data: [200, 310, 260, 10, 182, 119, 535],
                },
            ],
            legend: {
                position: "top",
                horizontalAlign: "center",
                fontSize: "16px",
            },
            chart: {
                height: 350,
                fontFamily: "Ubuntu, sans-serif",
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
            yaxis: {
                tickAmount: 8,
                min: 0,
                max: 1000,
                labels: {
                    style: {
                        fontSize: "14px",
                    },
                },
                title: {
                    text: "$ (K)",
                    style: {
                        fontSize: "14px", // Adjust the font size as required
                    },
                },
            },
            xaxis: {
                labels: {
                    style: {
                        fontSize: "14px",
                    },
                },
                categories: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
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
