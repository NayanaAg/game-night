import React from "react";

export default function GlobalNav() {
    return <>
        <div className="row g-0">
            <div className="col-12">
                <header>
                    <div id="global-nav">
                        <ul>
                            <li><a href="./">home</a></li>
                            <li><a href="./reviews">reviews</a></li>
                            <li><a href="./random-book">find your next read</a></li>
                            <li><a href="./recommend">recommend a book</a></li>
                            <li><a href="./about">about</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    </>
}