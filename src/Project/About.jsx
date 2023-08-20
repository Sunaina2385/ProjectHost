import React from 'react';
import Common from './Common';
import web from './web.jpg';

const About=()=>{
    return (
        <>
           <Common name="Welcome to About Page"
                imgsrc={web}
                visit="./contact"
                btname="Contact now"/>
        </>
    );
}

export default About;