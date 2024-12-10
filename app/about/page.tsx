"use client";

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global.css";
import GlobalNav from "../components/nav";

export default function Page() {
    return <>
        <div id="container">
            <GlobalNav />

            <main>
                <div className="row align-items-center mt-5">
                    <div className="col-5 d-flex flex-column align-items-center offset-1">
                        <img src="./images/me.jpg" alt="photo of me!" id="profile-pic"/>
                        <h1>recommend me a book!</h1>
                        <p>I'm always looking for new books or authors that have flown under my radar, so you would be doing me a real solid :)</p>
                    </div>
                    <div className="col-5">
                        <form action="https://api.web3forms.com/submit" method="POST" id="contact-form">

                            <input type="hidden" name="access_key" value="18889202-c100-47e9-9a54-c558ac663cac" />

                            <div className="form-group">
                                <label htmlFor="name">Name: </label>
                                <input type="text" className="form-control" id="name" aria-describedby="Enter your name" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email address: </label>
                                <input type="email" className="form-control" id="email" aria-describedby="Enter your email address" required />
                                <small id="email" className="form-text text-muted">I'll never share your email with anyone else. </small>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Put any questions and comments here!</label>
                                <textarea className="form-control" id="message" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" id="submit-btn">Send</button>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    </>
}