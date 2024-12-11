"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import GlobalNav from "./components/nav";
import Footer from "./components/footer";
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
                        <div className="col-lg-6 offset-lg-3 col-10 offset-1">
                            <h1>My 50 books of 2024</h1>
                            <p>My goal this year was lofty: read 50 books and record at least some rudimentary thoughts about each one. As you can tell, I'm both ambitious and a little bit behind schedule. To motivate myself to keep going and hit my goal (or at least get as close as possible!) I decided to make this little website to track my reading progress, reviews, and some fun stats. </p>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </section>

                <section>
                    <div className="container-fluid mt-4 d-flex justify-content-center">
                        <div className="row row-cols row-cols-lg-5 text-center tile-container">
                            {Library.slice(0, 5).map((book) => {
                                return <div className="col p-0" key={"book_" + book.id}>
                                    <div key={book.id} className="tile-book">
                                        <a href="./reviews">
                                            <img className="tile-book-flex" src={book.cover}
                                                alt="book cover" />
                                            <div className="tile-book-content d-flex flex-column">
                                                <h4>{book.title}</h4>
                                                <p>{book.author}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>

                            })}
                        </div>
                    </div>
                </section>

                <hr />

                <section>
                    <div className="row my-5 my-sm-3">
                        <div className="col-lg-3 offset-lg-2 col-12 p-5 text-center">
                            <img className="review-cover" src={reviewBook.cover} />
                        </div>
                        <div className="col-lg-5 col-12 text-center p-5">
                            <h2>{reviewBook.title}</h2>
                            <p>{reviewBook.author}</p>
                            <FluentProvider theme={webLightTheme}>
                                <RatingDisplay value={reviewBook.rating} size="large" color="marigold" />
                            </FluentProvider>
                            <div className="mt-lg-4 mt-3">
                                <p>After hearing about this book for years, I'm so happy I finally picked it up. The writing style, pacing, and setting all work together with the original concept of David Copperfield to make it one of the most unique and memorable books I've read (and that's saying something because I usually forget details about books as soon as I pick a new one up).</p>

                                <p>It felt a bit strange reading a "modernization" of an old classic which, from current day, is still pretty old. Throughout the book I found myself wondering why Kingsolver chose the 90s, and how the story would be different in present day. In the end though, I was glad it had the 90s retro-ish vibe along with the political problems and pressures which eventually exploded into our current society.</p>

                                <p>I'm not a big classics rereader because personally, I always find them to be pale or superficial versions of the original. I think there are a lot of topics and concepts that authors hesitate to include in books because of how much the world has changed in the last couple decades. Demon Copperhead was a refreshing change from all that, and conveyed the original themes while still staying original and maintaining the emotional impact. I just wish Charles Dickens had been able to read this! </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2 text-center">
                            <p><em>More full(ish) reviews for my books coming soon!</em></p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div >

    </>

}

