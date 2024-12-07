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
          <h1>About Me</h1>
          <p>Another fun website by Nayana.</p>
        </div>
      </div>
    </div>
  
  </>
};

