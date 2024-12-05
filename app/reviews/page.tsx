"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import Library from "../library.json";

export default function Page() {
    return <>

        <div id="container">
            <GlobalNav />

            <div className="row">
                <div className="col-10 offset-1 text-center">
                    <h1>{Library.length} / 50 Books read this year</h1>
                    <p>A list of all books I've read this year! Click any of the covers below for a quick summary of my thoughts.</p>
                </div>
            </div>

            <div className="row row-cols-5 m-5 p-5 align-items-start flex-row">
                {Library.map((book) => {
                    return <>
                        <div className="col" key={book.id}>
                            <img className="tile-book-cover" src={book.cover} />
                        </div>
                    </>
                })}
            </div>
        </div>



    </>
}