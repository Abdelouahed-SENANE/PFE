import { React, useRef, useEffect } from "react";
import ApexCharts from "apexcharts";
import "./style.css";

const ChartColumn = () => {
    return (
        <div className="mb-5 border p-5 border-gray-200 bg-white rounded-lg">
            <header className="">
                <h3>Total Sales Service Per Day</h3>
            </header>
            <div className="">
                <Column />
            </div>
        </div>
    );
};

const Column = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        var options = {
            series: [
                {
                    name: "Sales",
                    data: [1000, 9985, 8455, 8000, 9000, 5000, 6188],
                },
            ],
            chart: {
                type: "bar",
                fontFamily: "Ubuntu, sans-serif",
                height: 310,
                toolbar: false,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: "20%",
                    barRounded: true,
                    borderRadius: 8,
                },
            },
            dataLabels: {
                enabled: false,
            },
            colors: ["#ff7f11"],
            stroke: {
                show: false,
                width: 2,
                colors: ["transparent"],
            },
            xaxis: {
                labels: {
                    style: {
                        fontSize: "14px",
                    },
                },
                title: {
                    text: "Days",
                },
                categories: ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            },
            yaxis: {
                tickAmount: 5,
                min: 0,
                max: 10000,
                labels: {
                    formatter: function (value) {
                        return `${value / 1000}K`;
                    },
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
                categories: ["1K", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"],
            },

            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " K";
                    },
                },
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

export default ChartColumn;
