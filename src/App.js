import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Routes from "./routes";
import QuotesData from "./quotes";
import Menubar from "./Components/Menubar";
import Quote from "./Components/Quote";
import NoMatch from "./Components/NoMatch"



function App() {
  const [quotes] = useState([QuotesData]);

  // let quote = quotes ? quotes[0] : "error";
  // let randNum = Math.floor(Math.random() * quote.length);  

  let jerryQuotes = quotes[0].filter(function(quote) {
    return quote.author === "Jerry"
  });

  let georgeQuotes = quotes[0].filter(function(quote) {
    return quote.author === "George";
  });

  let elaineQuotes = quotes[0].filter(function(quote) {
    return quote.author === "Elaine";
  });

  let kramerQuotes = quotes[0].filter(function(quote) {
    return quote.author === "Kramer";
  });

  let otherQuotes = quotes[0].filter(function(quote) {
    if (
      quote.author !== "Jerry" &&
      quote.author !== "George" &&
      quote.author !== "Elaine" &&
      quote.author !== "Kramer"
    ) {
      return quote.author;
    }
    else {
      return null;
    }
  });

  function passQuotes(route) {
    if ( route.path === "/" ) {
      return quotes[0];
    }
    if ( route.path === "/jerry" ) {
      return jerryQuotes;
    }
    else if (route.path === "/george" ) {
      return georgeQuotes;
    }
    else if (route.path === "/elaine" ) {
      return elaineQuotes;
    }
    else if (route.path === "/kramer" ) {
      return kramerQuotes;
    }
    else if (route.path === "/other" ) {
      return otherQuotes;
    }
  } 

  return (
    <Router>
        <Switch>
          {Routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={ () => 
                <main>
                  <Quote quotes={passQuotes(route)} {...route}/>
                  
                </main>
              }/>
          ))}
          <NoMatch/>
        </Switch>
        
        <Menubar routes={Routes}/>
        <p className="courtesy-link">Quotes courtesy of <a href="https://seinfeld-quotes.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://seinfeld-quotes.herokuapp.com/</a></p>
    </Router>
  );
}

export default App;
