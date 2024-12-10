import React from "react";
import Link from "next/link";

export default function GlobalNav() {
    return <>
        <div className="row g-0">
            <div className="col-12">
                <header>
                    <div id="global-nav">
                        <ul>
                            <li><Link href="/">home</Link></li>
                            <li><Link href="/reviews">reviews</Link></li>
                            <li><Link href="/find-a-book">find your next read</Link></li>
                            <li><Link href="/stats">stats and graphs</Link></li>
                            <li><Link href="/about">about</Link></li>
                        </ul>
                    </div>
                </header>
            </div>
        </div>
    </>
}