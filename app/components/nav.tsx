import React from "react";
import Link from "next/link";

export default function GlobalNav() {
    return <>
        <div className="row g-0">
            <div className="col-12">
                <header>
                <nav className="navbar navbar-dark navbar-expand-lg" id="global-nav">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/reviews">Reviews</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/find-a-book">Find your next read</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/stats">Stats & graphs</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" href="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    </>
}