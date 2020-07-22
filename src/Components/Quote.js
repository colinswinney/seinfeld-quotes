import React from "react"

function Quote(props) {
    // let quote = props.quotes ? props.quotes[0] : "error";
    let randNum = Math.floor(Math.random() * props.quotes.length);

    return (
        <div className="quote-wrap" id="quote-wrap">
            <blockquote>
                <p className="text">{props.quotes[randNum].quote}</p>
            </blockquote>
            
            <p className="meta">
                <span className="author">{props.quotes[randNum].author}</span>
                <br/>
                <span className="episode">Season: <span>{props.quotes[randNum].season}</span>, Episode: <span>{props.quotes[randNum].episode}</span></span>
            </p>
        </div>
        
    )
}

export default Quote;