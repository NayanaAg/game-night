"use client";

import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";
import GenreChart from "../components/piechart";

export default function Page() {
  return <>
    <div id="container">
      <GlobalNav />

      <div className="row mt-5">
        <div className="col-10 offset-1">
          <h1>My reading stats</h1>
          <p>One of the most satisfying things about reading is checking out your stats in fun little categories. Select a tab below to check out my ratings, genres, keywords, and more!</p>
        </div>
      </div>

      <section>
        <div className="row mt-5">
          <div className="col-4 offset-1">
            <GenreChart />

          </div>
          <div className="col-5">
            <h2>Genre spread</h2>
            <p>This year, my top 3 genres have been historical, mystery, and literary! I would include Fiction but turns out I didn't read much non-fiction this year lol, so it stays out of our count despite being in first place.</p>

            <p>I was surprised to see that my science fiction and speculative fiction counts are so low this year; I usually end up reading a good handful of each genre over the year, but looks like this year I was craving something more down-to-earth.</p>
          </div>
        </div>
      </section>
    </div>

  </>
};

