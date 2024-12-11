"use client";

import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";

import GlobalNav from "../components/nav";
import Footer from "../components/footer";
import TopButton from "../components/top-btn";

import GenreChart from "../components/piechart";
import RatingChart from "../components/barchart";


export default function Page() {
  return <>
    <div id="container">
      <GlobalNav />
      <TopButton />

      <div className="row mt-5">
        <div className="col-10 offset-1">
          <h1>My reading stats</h1>
          <p>One of the most satisfying things about reading is checking out your stats in fun little categories. Select a tab below to check out my ratings, genres, keywords, and more!</p>
        </div>
      </div>

      <main>

        <section>
          <div className="row mt-lg-5 d-flex justify-content-center">
            <div className="col-lg-4 ms-lg-4 me-md-5 col-12">
              <GenreChart />

            </div>
            <div className="col-lg-4 mt-lg-5 px-5 p-lg-3 col-12">
              <h2>Genre spread</h2>
              <p>This year, my top 3 genres have been historical, mystery, and literary! I would include Fiction but turns out I didn't read much non-fiction this year lol, so it stays out of our count despite being in first place.</p>

              <p>I was surprised to see that my science fiction and speculative fiction counts are so low this year; I usually end up reading a good handful of each genre over the year, but looks like this year I was craving something more down-to-earth.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="row mt-lg-5 d-flex justify-content-center">
            <div className="col-lg-4 ms-lg-4 mt-5 me-md-5 col-12">
              <RatingChart />
            </div>

            <div className="col-lg-4 mt-lg-5 p-5 p-lg-3 col-12">
              <h2>Ratings</h2>
              <p>Luckily, I read mostly good books this year! I think I've gotten better at identifying which books I'll like from the blurb, description, and other trusted people's reviews. Unfortunately a mediocre book sneaks in every now and then (I'm still disappointed by how much I disliked City of Brass D:) but at least we didn't have any one-star reads this year!</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>

  </>
};

