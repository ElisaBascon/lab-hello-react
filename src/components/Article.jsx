import React from "react";
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

const Article = () => {
    return (
    <section className="allCards"> 
        <div className="card">
            <img src={icon1}></img>
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="card">
            <img src={icon2}></img>
            <h3>Components</h3>
            <p>Build encapsulated components that manage theis state.</p>
        </div>
        <div className="card">
            <img src={icon3}></img>
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="card">
            <img src={icon4}></img>
            <h3>JSX</h3>
            <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    </section>   
    )
}

export default Article;