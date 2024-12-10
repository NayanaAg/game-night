"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import Library from "../library.json";

export default function Page() {

    const genreList = Library.map(book => book.genre)
    const allGenres = genreList.join().split(",")
    const uniqueGenres = [...new Set(allGenres)]

    const [filter, setFilter] = useState("");
    const [library, setLibrary] = useState([]);

    useEffect(() => {

        generateList();

    }, [filter]);

    const generateList = () => {

        const tempLibrary = [];
        Library.map((lo, li) => {

            const genres = lo.genre.split(",");

            if (genres.indexOf(filter) > -1) {
                tempLibrary.push(lo);
            }
        })

        tempLibrary.sort(() => .5 - Math.random());
        setLibrary(tempLibrary.slice(0, 5));
    }

    return <>
        <div id="container">
            <GlobalNav />

            <div className="row">
                <div className="col-10 offset-1 text-center mt-5">
                    <h1>My book recommendations</h1>
                    <p>Click one of the buttons below to begin!</p>
                    <p></p>
                </div>
            </div>

            <div className="row mt-4 text-center">
                <div className="col-lg-5 mx-auto col-10 offset-1">
                    {uniqueGenres.map(genre =>
                        <a href="#" className={"btn p-2 m-2 btn-primary " + (genre === filter ? "btn-focus" : "")} id="genre" onClick={(e) => { setFilter(genre) }
                        }>{genre}</a>
                    )}
                </div>
            </div>

            <div className="container-fluid mt-5 d-flex justify-content-center">
                <div className="row row-cols-lg-5 text-center tile-container">
                    {library.map((book, length) => {
                        return <div className="col" key={"book_" + book.id}>
                            <div className="tile-book p-0">
                                <a href="#">
                                    <img className="tile-book-cover" src={book.cover} />
                                    <div className="tile-book-content d-flex flex-column">
                                        <h3>{book.title}</h3>
                                        <p>{book.author}</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    })}
                </div>

            </div >
        </div>

    </>
}


