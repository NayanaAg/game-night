import React from "react";
import Library from "../library.json";

export default function DataGenerator(props) {

    const extractValues = Library.map(book => book[(props.value)])
    const allValues = extractValues.join().split(",")
    const uniqueValues = [...new Set(allValues)]

    function Counter(valuelist, value) {
        let counter = 0

        for (const item of valuelist) {
            if (item === value) counter += 1
        } return counter
    }

    const dataSet = []

    for (let value of uniqueValues) {
        dataSet.push({"name": value, "value": Counter(allValues, value)})
    }

    return dataSet
}


