// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/pie
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const data = [
    {
        id: "Developpement & IT",
        label: "dev",
        value: 572,
    },
    {
        id: "Data & Scientist",
        label: "data",
        value: 100,
    },
    {
        id: "Design",
        label: "design",
        value: 174,
    },
];
const DanoutChart = () => {
    const colors = {
        data: "#fb923c",
        design: "#38bdf8",
        dev: "#bef264",
    };
    const getColor = (bar) => colors[bar.label];
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 60, right: 120, bottom: 60, left: 100 }}
            sortByValue={true}
            innerRadius={0.8}
            colors={getColor}
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
            arcLinkLabelsOffset={10}
            arcLinkLabelsDiagonalLength={12}
            arcLinkLabelsStraightLength={10}
            arcLinkLabelsThickness={3}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={11}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", "3"]],
            }}
            legends={[
                {
                    anchor: "right",
                    direction: "column",
                    justify: false,
                    translateX: 50,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemWidth: 30,
                    itemHeight: 30,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 18,
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
};
export default DanoutChart;
