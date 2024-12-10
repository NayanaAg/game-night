import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import Library from "../library.json";
import "../stats/stats.css";

const genreList = Library.map(book => book.genre)
const allGenres = genreList.join().split(",")
const uniqueGenres = [...new Set(allGenres)]


export default function GenreChart() {

    /*where the count function is*/
    function CountGenre(genrelist, genre) {
        let counter = 0

        for (const value of genrelist) {
            if (value === genre) counter += 1
        } return counter
    }

    /*where the dataset for the function is*/
    const Piechart = []
    for (let genre of uniqueGenres) {
        Piechart.push({ "name": genre, "value": CountGenre(allGenres, genre) })
    }

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
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
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
                <path
                    d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
                    stroke={fill}
                    fill="none"
                />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    textAnchor={textAnchor}
                    fill="#333"
                >{CountGenre(allGenres, payload.name)}</text>
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    textAnchor={textAnchor}
                    fill="#999"
                >
                    {`(${(CountGenre(allGenres, payload.name)/(Library.length)).toFixed(2)}%`}
                </text>
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
        <PieChart width={750} height={450}>
            <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={Piechart}
                cx={250}
                cy={200}
                innerRadius={120}
                outerRadius={150}
                fill="green"
                dataKey="value"
                onMouseEnter={onPieEnter}
            />
        </PieChart>
    </>
}