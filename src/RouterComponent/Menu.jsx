import React from 'react';
import {NavLink} from "react-router-dom";

const Menu=()=>{
    return(
        <>
            <div className="menu_style">
                <NavLink exact activeClassName="active_class" to="/">
                    About Us
                </NavLink>
                <NavLink exact activeClassName="active_class" to="/Contact">
                    Contact Us
                </NavLink>
                <NavLink exact activeClassName="active_class" to="/Service">
                    Service
                </NavLink>

                <NavLink activeClassName="active_class" to="/User/">
                    User
                </NavLink>
            </div>

            {/* <a href="/">About us</a>
            <a href="/contact">Contact us</a> */}
        </>
    );
}

export default Menu;