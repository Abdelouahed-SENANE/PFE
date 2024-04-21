import { React, useRef, useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { getPopularGigsOnWeek } from "../../data/statistics/StatisticsData";
const LineChart = () => {
    return (
        <div className="mb-5 border p-5 border-gray-200 bg-white rounded-lg">
            <header className="text-xl">
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
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getPopularGigsOnWeek();
                setData(response);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data && data.data && data.data.length > 1) {
            const options = {
                series: [
                    { name: data.data[0].title, data: data.data[0].data },
                    { name: data.data[1].title, data: data.data[1].data },
                ],
                chart: {
                    type: "area",
                    height: 350,
                    fontFamily: "Ubuntu, sans-serif",
                    toolbar: false,
                    background: '#fff', 
                },
                colors: ["#84cc16", "#06b6d4"],
                legend: {
                    position: "top",
                    horizontalAlign: "center",
                    fontSize: "16px",
                },
                dataLabels: { enabled: false },
                stroke: { curve: "smooth" },
                yaxis: {
                    tickAmount: 8,
                    min: 0,
                    max: 20,
                    labels: { style: { fontSize: "14px" } },
                    title: { text: "By Order", style: { fontSize: "14px" } },
                },
                xaxis: {
                    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    labels: { style: { fontSize: "14px" } },
                },
            };

            if (chartRef.current) {
                const chart = new ApexCharts(chartRef.current, options);
                chart.render();

                return () => {
                    chart.destroy();
                };
            }
        }
    }, [data]);

    return <div id="chart" ref={chartRef}></div>;
};

export default LineChart;