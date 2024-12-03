import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import GlobalNav from "./components/nav";
import RatingDisplay from '@fluentui/react-rating';
import Library from "./library.json";

export default function Page() {
    return <>
        <div id="container">
            <GlobalNav />

            <div className="row">
                <div className="col-9">
                    <h1>Welcome to my website</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laudantium sit? Explicabo, voluptatem voluptas. Inventore quibusdam aspernatur tempore perspiciatis ex eos quasi accusamus totam modi! Quasi officiis ratione quibusdam quo!</p>

                    <hr />

                    <h2>Recent reads</h2>
                    <div className="row row-cols-4 align-items-center flex-row">
                        {Library.slice(0,4).map((book) => {
                            return <>
                            <div className="col">
                                <div key={book.id} className="tile-book p-0">
                                    <a href="./reviews">
                                        <img className="tile-book-cover" src={book.cover}
                                            alt="book cover" />
                                        <div className="tile-book-content d-flex flex-column justify-content-between">
                                            <h4>{book.title}</h4>
                                            <p>{book.author}</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            </>
                        })}
                    </div>
                </div>
                <div className="col-3 sidebar">
                    <h2>Coming up next:</h2>
                    <p>book 1 goes here</p>
                    <p>book 2 goes here</p>
                </div>
            </div>
        </div>
    </>
  }