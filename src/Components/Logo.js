import React from "react"
import logo from "../seinfeld-logo.png"

function Logo() {
    return (
        <div className="logo-wrapper">
            <img
                src={logo}
                alt="Seinfeld Logo"
                className="logo"
            />
        </div>
    )
}

export default Logo