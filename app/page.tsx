import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import GlobalNav from "./components/nav";

export default function Page() {
    return <>
        <div id="container">
            <GlobalNav />

            <div className="row">
                <div className="col-9">
                    <h1>Welcome to my website</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laudantium sit? Explicabo, voluptatem voluptas. Inventore quibusdam aspernatur tempore perspiciatis ex eos quasi accusamus totam modi! Quasi officiis ratione quibusdam quo!</p>

                    <hr />
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