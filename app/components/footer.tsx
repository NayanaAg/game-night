import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Footer() {
    return <>
        <footer>
            <div className="row text-center align-items-center" id="footer">
                <div className="col-6 offset-1">
                    <p id="footer-text">All rights reserved by Nayana Agrawal</p>
                </div>
                <div className="col-3 offset-1 d-flex align-items-start">
                    <a href="https://www.linkedin.com/in/nayana-agrawal-855948175/"><i className="bi bi-linkedin"></i></a>
                    <a className="btn btn-primary btn-filter mx-3 align-self-center" href="https://nayanaag.github.io/portfolio/">My portfolio</a>
                </div>
            </div>
        </footer>
    </>
}