"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import GlobalNav from "./components/nav";
import Library from "./library.json";

import { FluentProvider, webLightTheme, RatingDisplay } from '@fluentui/react-components';

export default function Page() {

    const reviewBook = Library.at(-1);

    return <>

        <div id="container">
            <GlobalNav />

            <main>
                <section>
                    <div className="row mt-5">
                        <div className="col-6 offset-1">
                            <h1>My 50 books of 2024</h1>
                            <p>My goal this year was lofty: read 50 books and record at least some rudimentary thoughts about each one. As you can tell, I'm both ambitious and a little bit behind schedule. To motivate myself to keep going and hit my goal (or at least get as close as possible!) I decided to make this little website to track my reading progress, reviews, and some fun stats. </p>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </section>

                <section>
                    <div className="row row-cols-md-4 row-cols m-4 align-items-start justify-content-evenly flex-row">
                        {Library.slice(0, 5).map((book) => {
                            return <>
                                <div className="col p-0" key={"book_" + book.id}>
                                    <div key={book.id} className="tile-book d-flex justify-content-center">
                                        <a href="./reviews">
                                            <img className="tile-book-cover" src={book.cover}
                                                alt="book cover" />
                                            <div className="tile-book-content d-flex flex-column">
                                                <h4>{book.title}</h4>
                                                <p>{book.author}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </>
                        })}
                    </div>
                </section>

                <hr />

                <section>
                    <div className="row my-5">
                        <div className="col-3 offset-2">
                            <img className="review-cover" src={reviewBook.cover} />
                        </div>
                        <div className="col-5">
                            <h2>{reviewBook.title}</h2>
                            <p>{reviewBook.author}</p>
                            <FluentProvider theme={webLightTheme}>
                                <RatingDisplay value={reviewBook.rating} size="large" color="marigold" />
                            </FluentProvider>
                        </div>
                    </div>
                </section>
            </main>
        </div >

    </>

}

