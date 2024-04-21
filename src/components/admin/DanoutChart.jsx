// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";
import { useEffect, useState } from "react";
import { getTheMostSubcategoriesUsed } from "../../data/statistics/StatisticsData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
// const data = [
//     {
//         id: "Developpement & IT",
//         label: "dev",
//         value: 572,
//     },
//     {
//         id: "Data & Scientist",
//         label: "data",
//         value: 100,
//     },
//     {
//         id: "Design",
//         label: "design",
//         value: 174,
//     },
// ];
const DanoutChart = () => {
    const [data , setData] = useState({})
    useEffect(() => {
        const fetchSubcategoryUsed = async () => {
            try {
                const response = await getTheMostSubcategoriesUsed();
                setData(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        fetchSubcategoryUsed()
    }, []);
    

    if (data && data.length > 0) {
        return (
            <ResponsivePie
                data={data}
                margin={{ top: 60, right: 120, bottom: 60, left: 100 }}
                sortByValue={true}
                innerRadius={0.8}
                colors={["#fb923c" , "#38bdf8" , "#bef264"]}
                padAngle={2}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: "color",
                    modifiers: [["brighter", "0"]],
                }}
                arcLinkLabelsSkipAngle={7}
                arcLinkLabelsTextOffset={7}
                arcLinkLabelsTextColor="#000"
                arcLinkLabelsOffset={5}
                arcLinkLabelsDiagonalLength={5}
                arcLinkLabelsStraightLength={10}
                arcLinkLabelsThickness={3}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={12}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", "3"]],
                }}
                legends={[
                    {
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: 0,
                        translateY: -100,
                        itemsSpacing: 0,
                        itemWidth: 20,
                        itemHeight: 20,
                        itemTextColor: "#999",
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 15,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: "#000",
                                },
                            },
                        ],
                    },
                ]}
            />
        );
    }
};
export default DanoutChart;
