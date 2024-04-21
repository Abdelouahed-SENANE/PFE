import React, { useRef, useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { getSalesByDayOfWeek } from "../../../data/statistics/StatisticsData";
const ColumnChart = () => {
    return (
        <div className="mb-5 border p-5 border-gray-200 bg-white rounded-lg">
            <header className="text-xl">
                <h3>Incomes Per day of Week</h3>
            </header>
            <div className="">
                <Column/>
            </div>
        </div>
    );
};
const Column = () => {
    const chartRef = useRef(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchSalesData = async () => {
            try {
                const response = await getSalesByDayOfWeek();
                const salesDataArray = Object.entries(response.data).map(([day, totalSales]) => ({
                    date: day,
                    total_sales: parseInt(totalSales) // Convert total sales string to number
                }));
                setData(salesDataArray);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchSalesData();
    }, []);

    useEffect(() => {
        if (data && data.length > 1) {
            const categories = data.map(item => item.date);
            const salesData = data.map(item => item.total_sales);

            const options = {
                series: [
                    {
                        name: "Sales",
                        data: salesData
                    },
                ],
                chart: {
                    type: "bar",
                    fontFamily: "Ubuntu, sans-serif",
                    height: 310,
                    toolbar: {
                        show: false
                    },
                    background: '#fff', 

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
                xaxis: {
                    categories: categories,
                    labels: {
                        style: {
                            fontSize: "14px",
                        },
                    },
                    title: {
                        text: "Days",
                    },
                },
                yaxis: {
                    tickAmount: 5,
                    labels: {
                        formatter: function (value) {
                            return `$${(value / 1000).toFixed(1)}K`;
                        },
                        style: {
                            fontSize: "14px",
                        },
                    },
                    title: {
                        text: "$ (K)",
                        style: {
                            fontSize: "14px",
                        },
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return `$${val}K`;
                        },
                    },
                },
            };
            const chart = new ApexCharts(chartRef.current, options);
            chart.render();

            return () => {
                chart.destroy();
            };
        }
    }, [data]);

    return <div id="chart" ref={chartRef}></div>;
};

export default ColumnChart;
