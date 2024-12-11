import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function TopButton() {
    return <>
        <a className="btn btn-top" href="#" style={{
            position: "fixed",
            bottom: "var(--sm-space)",
            left: "var(--sm-space)",
            border: "none",
            fontWeight: "var(--mdbold)",
            transition: "var(--transition-time)"
        }}><i className="bi bi-arrow-up-circle-fill"></i></a>
    </>
}