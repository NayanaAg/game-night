"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import Library from "../library.json";

export default function Page() {

    const genreList = Library.map(book => book.genre)
    const allGenres = genreList.join().split(",")
    const uniqueGenres = [...new Set(allGenres)]

    const [filter, setFilter] = useState("");


    return <>
        {uniqueGenres.map(genre =>
            <a href="#" className={"btn p-3 m-2 btn-primary " + (genre === filter ? "btn-focus" : "")} id="genre" onClick={(e) => { setFilter(genre) }
            }>{genre}</a>
        )}

        <a href="#" onClick={(e) => {
            setFilter("");
        }}>Clear all</a>

        
    </>
}


