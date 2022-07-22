import React from "react";
import ironhack from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";

const Header = () => {
    return (
    <section className="header"> 
        <nav className="nav-bar">
            <ul>
                <li className="logo"><img src={ironhack}></img></li>
                <li className="menu"><img src={menu}></img></li>
            </ul>
        </nav>
        <div className="mainText">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
        </div>
        <button className="button">Awesome!</button>
    </section>   
    )
}

export default Header;