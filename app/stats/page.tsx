"use client";

import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";

export default function Page() {
  return <>
    <div id="container">
      <GlobalNav />
      
      <div className="row">
        <div className="col-10 offset-1">
          <h1>My reading stats</h1>
          <p>One of the most satisfying things about reading is checking out your stats in fun little categories. Select a tab below to check out my ratings, genres, keywords, and more!</p>
        </div>
      </div>
    </div>
  
  </>
};

