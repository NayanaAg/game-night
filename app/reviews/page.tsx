"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import Library from "../library.json";

import { FluentProvider, webLightTheme, RatingDisplay } from '@fluentui/react-components';


export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />

            <div className="row mt-5">
                <div className="col-10 offset-1 text-center">
                    <h1>{Library.length} / 50 Books read this year</h1>
                    <p>A list of all books I've read this year! Click any of the covers below for a quick summary of my thoughts.</p>
                </div>
            </div>

            <div className="row tile-container row-cols">
                {Library.map((book) => {
                    return <>
                        <div className="col p-3 mx-3 my-2 tile-book text-center" key={"book_" + book.id}>
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
                    </>
                })}
            </div>
        </div>



    </>
}