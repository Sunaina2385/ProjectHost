import React from 'react';
import {useParams,useLocation} from 'react-router-dom';

// const User=({match})=>{
//     return (
//         <>
//             <h1>User {match.params.name} WebPage</h1>
//         </>
//     );
// }

const User=()=>{
    const {fname,lname}=useParams();
    const location=useLocation();
    //useLocation Hook is used to display Current URL
    console.log(location);  
    return (
        <>
            <h1>User {fname} {lname} WebPage</h1>
            <p> My cureent URL is {location.pathname}</p>
        </>
    );
}

export default User;