import React, { useState } from "react"
import { NavLink } from "react-router-dom"

function Menubar(props) {

    let  [,setState]=useState();

    function handleUpdate() {
        //passing empty object will re-render the component
        setState({});
        window.scrollTo(0, 0);    
    }
    
    return (
        <footer className="menubar">
            {/* <Logo /> */}
            <ul>
                {props.routes.map((route, i) => (
                <li key={i} className={`${route.contentClass}`}>
                    <NavLink exact={route.exact} to={route.path} activeClassName="active" onClick={handleUpdate}>
                        
                        <div className="img-wrap">
                            <img
                                src={route.img}
                                alt={route.contentClass}
                            />
                        </div>
                        <span>{route.navTitle}</span>
                    </NavLink>
                </li>
                ))}
            </ul>
        </footer>
    )
}

export default Menubar