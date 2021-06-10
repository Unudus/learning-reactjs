import React from "react";
import {Link} from "react-router-dom";

const NavLink = (props) => {
    console.log('trying to add nav link',props);
    return (
        <li 
            class="navLink" 
            style={{ 
                height:'12pt',
                listStyle:'none',
                marginRight:'5pt'
            }}
        >
            <Link to={props.url} >
                {props.name}
            </Link>
        </li>
    );
}

export default NavLink;