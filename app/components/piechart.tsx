import React, { useCallback, useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Sector } from "recharts";
import DataGenerator from "./count";


export default function GenreChart() {

    const pieData = DataGenerator("genre");

    const renderActiveShape = (props: any) => {
        const RADIAN = Math.PI / 180;
        const {
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            startAngle,
            endAngle,
            fill,
            payload,
            percent,
            value
        } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";

        return <>
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"#000"} fontSize={"1.1em"}>
                    {payload.name + ` (${((payload.percentage)).toFixed(2)}%)`}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={"lightgreen"}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={"lightgreen"}
                />

            </g>
        </>;
    };

    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    /*actual pie chart rendering*/
    return <>
        <ResponsiveContainer width="100%" height={450}>
            <PieChart >
                <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={pieData}
                    innerRadius={120}
                    outerRadius={150}
                    fill="green"
                    dataKey="value"
                    onMouseEnter={onPieEnter}

                />
            </PieChart>
        </ResponsiveContainer>
    </>
}