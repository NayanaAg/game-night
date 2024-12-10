"use client";

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import Library from "../library.json";

import { FluentProvider, webLightTheme, RatingDisplay } from '@fluentui/react-components';

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
                    <p>Click one of the buttons below to get some random book recommendations!</p>
                    <p>You can also click on the books to see my rating and a few keywords that I think describe the book well (I tried my best to be objective, whether I liked the book or not!) </p>
                </div>
            </div>

            <div className="row mt-4 text-center">
                <div className="col-lg-6 mx-auto col-10 offset-1">
                    {uniqueGenres.map(genre =>
                        <a href="#" className={"btn px-3 py-2 m-2 btn-primary btn-filter" + (genre === filter ? " btn-focus" : "")} id="genre" onClick={(e) => { setFilter(genre) }
                        }>{genre}</a>
                    )}
                </div>
            </div>

            <div className="container-fluid mt-5 d-flex justify-content-center">
                <div className="row row-cols row-cols-lg-5 text-center justify-content-center tile-container">
                    {library.map((book) => {
                        return <div className="col tile-book text-center" key={"book_" + book.id}>
                        <div data-bs-toggle="modal" data-bs-target={"#book_" + (book.id).toString()}>
                            <img className="tile-book-cover" src={book.cover} />
                        </div>

                        <div className="modal fade" id={"book_" + (book.id).toString()} tabIndex={-1} aria-labelledby="book-modal-label" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="modal-title" id="book-modal-label">{book.title}</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body align-self-center">
                                        <h3>By {book.author}</h3>
                                        <FluentProvider theme={webLightTheme}>
                                            <RatingDisplay value={book.rating} size="large" color="marigold" />
                                        </FluentProvider>
                                        <p>{book.keywords}</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    })}
                </div>

            </div >
        </div>

    </>
}


