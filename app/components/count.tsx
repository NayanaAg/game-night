import React from "react";
import Library from "../library.json";

export default function DataGenerator(property) {

    const sortedLibrary = Library.sort((a, b) => a.rating - b.rating)

    const extractValues = sortedLibrary.map(book => book[(property)])
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
        dataSet.push({"name": value, "value": Counter(allValues, value), "percentage": (Counter(allValues, value) / allValues.length * 100)})
    }

    return dataSet
}

// export function DataSummarizer(property) {

// CK INTERPRETATION OF THE ABOVE CODE

//     const summary = {};
//     const dataSet = [];

//     Library.map((lo,li) => {
        
//         if (lo[property]) {

//             const values = lo[property].split(",");
//             values.map((vo,vi) => {

//                 if (summary[vo] === undefined) {
//                     summary[vo] = 0;
//                 }
//                 summary[vo]++;

//             });

//         }

//     })
    
//     Object.keys(summary).map((so, si) => {

//         dataSet.push({
//             name: so,
//             value: summary[so]
//         })

//     });

//     console.log(dataSet);


// }


