import React from "react";
import troll from "../assets/troll.png"

export default function Header() {
    return(
        <div className="header-container">
            <img src={troll} alt="troll-face"></img>
            <h1>Meme Generator</h1>
            <h4>React Course - Project 3</h4>
        </div>
    )
}