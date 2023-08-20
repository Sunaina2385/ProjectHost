import React,{useHistory} from 'react';
import {NavLink} from "react-router-dom";

const Error1=()=>{

    // const history=useHistory();
    return (
    <>
        <div className='setStyle2'>
            <h1>404 Error page</h1>
            <h1>Sorry!This page doesn't exist</h1>
            {/* <button onClick={()=> history.goBack()}>Go Back</button> */}

            <NavLink to="/">Go Back</NavLink>
        </div>
    </>
    );
}

export default Error1;