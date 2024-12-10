import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Rectangle, ResponsiveContainer, } from "recharts";
import DataGenerator from "./count";
import "../global.css";

export default function RatingChart() {

    // const pieData = <DataGenerator p="genre" />
    const barData = (DataGenerator("rating"));
    console.log(barData);

    return <>
        <ResponsiveContainer width={"100%"} height={300}>
      <BarChart
        data={barData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="value"
          fill="#f8d243"
          activeBar={<Rectangle fill="var(--accent-dark)"/>}
        />
      </BarChart>
    </ResponsiveContainer>
    </>
}