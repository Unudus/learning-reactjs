import React from "react";
import NavLink from "./NavLink";

const URIs = [
    ['/', "Home"],
    ['/articles', "Articles"]
];

const Nav = (props) => {
    return(
        <ul className="nav" style={{
            display:'flex',
            position:'fixed',
            right:'0',
            height:'30pt',
            fontSize:'10pt',
            color:'cornflowerblue'
        }}>
            {URIs.map( page => 
                <NavLink name={page[1]} url={page[0]} />
            )}
        </ul>
    );
}

export default Nav;