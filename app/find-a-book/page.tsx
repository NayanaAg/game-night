"use client";

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import Library from "../library.json";
import { RatingDisplay } from "@fluentui/react-components";

export default function Page() {

    const genreList = Library.map(book => book.genre)
    const allGenres = genreList.join().split(",")
    const uniqueGenres = [...new Set(allGenres)]

    const shuffledLibrary = Library.slice(0);

    for (let i = shuffledLibrary.length - 1; i > 0; i--) {
        const Random = Math.floor(Math.random() * (i + 1));

        const temp = shuffledLibrary[i]
        shuffledLibrary[i] = shuffledLibrary[Random]
        shuffledLibrary[Random] = temp
    }

    const [filter, setFilter] = useState("");


    return <>
        <div id="container">
            <GlobalNav />

            <div className="row">
                <div className="col-10 offset-1">
                    {uniqueGenres.map(genre =>
                        <a href="#" className={"btn p-3 m-2 btn-primary " + (genre === filter ? "btn-focus" : "")} id="genre" onClick={(e) => { setFilter(genre) }
                        }>{genre}</a>
                    )}

                    <a href="#">Clear all</a>
                </div>
            </div>

            <div className="row row-cols-4 mx-5 my-4">

                {shuffledLibrary.map((book, length) => {

                    if (book.genre.indexOf(filter) === -1) {
                        return <></>
                    } else {
                        length += 1;
                    }

                    if (length >= 5) {
                        return <></>
                    }

                    return <>

                        <div className="col">
                            <div key={book.id} className="tile-book p-0">
                                <a href="#">
                                    <img className="tile-book-cover" src={book.cover} />
                                    <div className="tile-book-content d-flex flex-column justify-content-between">
                                        <h3>{book.title}</h3>
                                        <p>{book.author}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </>

                })}
            </div>

        </div>


    </>
}


